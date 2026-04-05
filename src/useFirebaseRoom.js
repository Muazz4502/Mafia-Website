import { useState, useEffect, useRef, useCallback } from "react";
import { db, auth, ref, set, get, push, onValue, onDisconnect, remove, update, signInAnonymously } from "./firebase";

const ROLES = {
  villager:     { team:"village" },
  healer:       { team:"village" },
  detective:    { team:"village" },
  vigilante:    { team:"village" },
  bodyguard:    { team:"village" },
  seer:         { team:"village" },
  mayor:        { team:"village" },
  godfather:    { team:"mafia" },
  mafioso:      { team:"mafia" },
  consigliere:  { team:"mafia" },
  bomber:       { team:"mafia" },
  silencer:     { team:"neutral" },
  serialKiller: { team:"neutral" },
  survivor:     { team:"neutral" },
};

const CODE_ADJ = ["DARK","COLD","GRIM","SLY","BOLD","WILD","RED","MAD","DEEP","PALE","LOUD"];
const CODE_NOUN = ["FOX","OWL","WOLF","FANG","MOON","CROW","DUSK","CLAW","BONE","RAGE","TOMB","FATE"];
function genCode() {
  const adj = CODE_ADJ[Math.floor(Math.random()*CODE_ADJ.length)];
  const noun = CODE_NOUN[Math.floor(Math.random()*CODE_NOUN.length)];
  const num = Math.floor(Math.random()*90+10);
  return `${adj}${noun}${num}`;
}

export function useFirebaseRoom() {
  const [userId, setUserId] = useState(null);
  const [roomCode, setRoomCode] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [players, setPlayers] = useState([]);
  const [roomConfig, setRoomConfig] = useState({ roles: { villager:3, healer:1, detective:1, godfather:1, mafioso:1 }, maxPlayers: 7 });
  const [gameData, setGameData] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const unsubscribers = useRef([]);
  const roomCodeRef = useRef(null);

  // Anonymous auth on mount
  useEffect(() => {
    signInAnonymously(auth).then((cred) => {
      setUserId(cred.user.uid);
      setLoading(false);
    }).catch(() => {
      setError("Failed to connect. Please refresh.");
      setLoading(false);
    });
  }, []);

  // Keep roomCodeRef in sync
  useEffect(() => { roomCodeRef.current = roomCode; }, [roomCode]);

  // Cleanup listeners on unmount
  useEffect(() => {
    return () => { unsubscribers.current.forEach(fn => fn()); };
  }, []);

  const subscribe = useCallback((path, callback) => {
    const r = ref(db, path);
    const unsub = onValue(r, callback);
    unsubscribers.current.push(() => unsub());
    return unsub;
  }, []);

  const subscribeToRoom = useCallback((code) => {
    // Clear old listeners
    unsubscribers.current.forEach(fn => fn());
    unsubscribers.current = [];

    // Players
    subscribe(`rooms/${code}/players`, (snap) => {
      const val = snap.val() || {};
      const list = Object.entries(val).map(([id, p]) => ({ ...p, id }));
      setPlayers(list);
    });

    // Config
    subscribe(`rooms/${code}/config`, (snap) => {
      const val = snap.val();
      if (val) setRoomConfig(val);
    });

    // Game data
    subscribe(`rooms/${code}/game`, (snap) => {
      setGameData(snap.val());
    });

    // Chat
    subscribe(`rooms/${code}/chat`, (snap) => {
      const val = snap.val() || {};
      const msgs = Object.values(val).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
      setChatMessages(msgs);
    });
  }, [subscribe]);

  // Create room
  const createRoom = useCallback(async (playerName) => {
    if (!userId) return null;
    setError(null);
    const code = genCode();

    // Check if code exists
    const snap = await get(ref(db, `rooms/${code}/meta`));
    if (snap.exists()) return createRoom(playerName);

    await set(ref(db, `rooms/${code}`), {
      meta: { hostId: userId, roomCode: code, status: "lobby", createdAt: Date.now() },
      config: { roles: { villager:3, healer:1, detective:1, godfather:1, mafioso:1 }, maxPlayers: 7 },
      players: { [userId]: { name: playerName, isHost: true, isReady: false, joinedAt: Date.now() } }
    });

    // Remove player on disconnect
    onDisconnect(ref(db, `rooms/${code}/players/${userId}`)).remove();

    setRoomCode(code);
    setIsHost(true);
    setRoomConfig({ roles: { villager:3, healer:1, detective:1, godfather:1, mafioso:1 }, maxPlayers: 7 });
    subscribeToRoom(code);
    return code;
  }, [userId, subscribeToRoom]);

  // Join room
  const joinRoom = useCallback(async (code, playerName) => {
    if (!userId) return { error: "Not connected yet" };
    setError(null);

    const metaSnap = await get(ref(db, `rooms/${code}/meta`));
    if (!metaSnap.exists()) {
      setError("Room not found");
      return { error: "Room not found" };
    }
    const meta = metaSnap.val();
    if (meta.status !== "lobby") {
      setError("Game already started");
      return { error: "Game already started" };
    }

    const playersSnap = await get(ref(db, `rooms/${code}/players`));
    const configSnap = await get(ref(db, `rooms/${code}/config`));
    const count = playersSnap.exists() ? Object.keys(playersSnap.val()).length : 0;
    const max = configSnap.exists() ? configSnap.val().maxPlayers : 20;
    if (count >= max) {
      setError("Room is full");
      return { error: "Room is full" };
    }

    await set(ref(db, `rooms/${code}/players/${userId}`), {
      name: playerName, isHost: false, isReady: false, joinedAt: Date.now()
    });

    onDisconnect(ref(db, `rooms/${code}/players/${userId}`)).remove();

    setRoomCode(code);
    setIsHost(meta.hostId === userId);
    subscribeToRoom(code);
    return { success: true };
  }, [userId, subscribeToRoom]);

  // Leave room
  const leaveRoom = useCallback(async () => {
    if (roomCode && userId) {
      await remove(ref(db, `rooms/${roomCode}/players/${userId}`));
      // If host leaves, delete room
      if (isHost) {
        await remove(ref(db, `rooms/${roomCode}`));
      }
    }
    unsubscribers.current.forEach(fn => fn());
    unsubscribers.current = [];
    setRoomCode(null);
    setIsHost(false);
    setPlayers([]);
    setGameData(null);
    setChatMessages([]);
  }, [roomCode, userId, isHost]);

  // Update config (host only)
  const updateConfig = useCallback(async (patch) => {
    if (!isHost || !roomCode) return;
    await update(ref(db, `rooms/${roomCode}/config`), patch);
  }, [isHost, roomCode]);

  // Start game (host only)
  const startGame = useCallback(async () => {
    if (!isHost || !roomCode) return;

    const configSnap = await get(ref(db, `rooms/${roomCode}/config`));
    const playersSnap = await get(ref(db, `rooms/${roomCode}/players`));
    const config = configSnap.val();
    const playerIds = Object.keys(playersSnap.val());

    // Build and shuffle role pool
    const pool = [];
    Object.entries(config.roles).forEach(([k, c]) => { for (let i = 0; i < c; i++) pool.push(k); });
    while (pool.length < playerIds.length) pool.push("villager");
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const assignments = {};
    playerIds.forEach((id, i) => { assignments[id] = { role: pool[i], alive: true }; });

    await update(ref(db, `rooms/${roomCode}`), {
      "meta/status": "playing",
      "game/phase": "night",
      "game/day": 1,
      "game/winner": null,
      "game/showRoleReveal": true,
      "game/assignments": assignments,
      "game/nightActions": null,
      "game/votes": null,
      "game/eliminatedPlayers": null,
    });
    await set(ref(db, `rooms/${roomCode}/game/gameLog`), {
      "0": { text: "Night falls on the village...", type: "system", timestamp: Date.now() }
    });
    await remove(ref(db, `rooms/${roomCode}/chat`));

    // Clear role reveal after delay
    setTimeout(() => {
      if (roomCodeRef.current) {
        set(ref(db, `rooms/${roomCodeRef.current}/game/showRoleReveal`), false);
      }
    }, 4500);
  }, [isHost, roomCode]);

  // Submit night action
  const submitNightAction = useCallback(async (targetId) => {
    if (!roomCode || !userId) return;
    await set(ref(db, `rooms/${roomCode}/game/nightActions/${userId}`), {
      target: targetId, timestamp: Date.now()
    });
  }, [roomCode, userId]);

  // Resolve night (host only)
  const resolveNight = useCallback(async () => {
    if (!isHost || !roomCode) return;

    const actionsSnap = await get(ref(db, `rooms/${roomCode}/game/nightActions`));
    const assignSnap = await get(ref(db, `rooms/${roomCode}/game/assignments`));
    const gamSnap = await get(ref(db, `rooms/${roomCode}/game`));
    const actions = actionsSnap.val() || {};
    const assignments = assignSnap.val() || {};
    const gam = gamSnap.val() || {};
    const dayNum = gam.day || 1;
    const playersSnap = await get(ref(db, `rooms/${roomCode}/players`));
    const playersVal = playersSnap.val() || {};

    // Find targets by role
    let mafiaTarget = null;
    let healerTarget = null;

    Object.entries(actions).forEach(([pid, action]) => {
      const role = assignments[pid]?.role;
      if (role === "mafioso" || role === "godfather") mafiaTarget = action.target;
      if (role === "healer") healerTarget = action.target;
    });

    let killed = null;
    if (mafiaTarget && mafiaTarget !== healerTarget && assignments[mafiaTarget]?.alive) {
      killed = mafiaTarget;
    }

    const updates = {};
    const existingLog = gam.gameLog ? Object.keys(gam.gameLog).length : 0;
    const existingElim = gam.eliminatedPlayers ? Object.keys(gam.eliminatedPlayers).length : 0;

    if (killed) {
      updates[`game/assignments/${killed}/alive`] = false;
      const killedName = playersVal[killed]?.name || "Unknown";
      const killedRole = assignments[killed]?.role;
      updates[`game/eliminatedPlayers/${existingElim}`] = {
        name: killedName, role: killedRole, phase: `Night ${dayNum}`, playerId: killed
      };
      updates[`game/gameLog/${existingLog}`] = {
        text: `Dawn breaks. ${killedName} was found dead.`, type: "death", timestamp: Date.now()
      };
    } else {
      updates[`game/gameLog/${existingLog}`] = {
        text: "Dawn breaks. Nobody died last night.", type: "system", timestamp: Date.now()
      };
    }

    updates["game/phase"] = "day";
    updates["game/nightActions"] = null;

    // Check win after night kill
    const updatedAssignments = { ...assignments };
    if (killed) updatedAssignments[killed] = { ...updatedAssignments[killed], alive: false };
    const aliveM = Object.values(updatedAssignments).filter(a => a.alive && ROLES[a.role]?.team === "mafia").length;
    const aliveV = Object.values(updatedAssignments).filter(a => a.alive && ROLES[a.role]?.team !== "mafia").length;

    if (aliveM === 0) {
      const logIdx = killed ? existingLog + 1 : existingLog + 1;
      updates["game/winner"] = "village";
      updates[`game/gameLog/${logIdx}`] = { text: "The Village wins!", type: "win", timestamp: Date.now() };
    } else if (aliveM >= aliveV) {
      const logIdx = killed ? existingLog + 1 : existingLog + 1;
      updates["game/winner"] = "mafia";
      updates[`game/gameLog/${logIdx}`] = { text: "The Mafia wins!", type: "win", timestamp: Date.now() };
    }

    await update(ref(db, `rooms/${roomCode}`), updates);
  }, [isHost, roomCode]);

  // Submit vote
  const submitVote = useCallback(async (targetId) => {
    if (!roomCode || !userId) return;
    await set(ref(db, `rooms/${roomCode}/game/votes/${userId}`), targetId);
  }, [roomCode, userId]);

  // Resolve day (host only)
  const resolveDay = useCallback(async () => {
    if (!isHost || !roomCode) return;

    const votesSnap = await get(ref(db, `rooms/${roomCode}/game/votes`));
    const assignSnap = await get(ref(db, `rooms/${roomCode}/game/assignments`));
    const gamSnap = await get(ref(db, `rooms/${roomCode}/game`));
    const votes = votesSnap.val() || {};
    const assignments = assignSnap.val() || {};
    const gam = gamSnap.val() || {};
    const dayNum = gam.day || 1;
    const playersSnap = await get(ref(db, `rooms/${roomCode}/players`));
    const playersVal = playersSnap.val() || {};

    // Tally votes
    const tally = {};
    Object.entries(votes).forEach(([voterId, targetId]) => {
      const voterRole = assignments[voterId]?.role;
      const weight = voterRole === "mayor" ? 2 : 1;
      tally[targetId] = (tally[targetId] || 0) + weight;
    });

    const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
    const eliminated = sorted.length > 0 ? sorted[0][0] : null;

    const updates = {};
    const existingLog = gam.gameLog ? Object.keys(gam.gameLog).length : 0;
    const existingElim = gam.eliminatedPlayers ? Object.keys(gam.eliminatedPlayers).length : 0;

    if (eliminated) {
      updates[`game/assignments/${eliminated}/alive`] = false;
      const elimName = playersVal[eliminated]?.name || "Unknown";
      const elimRole = assignments[eliminated]?.role;
      updates[`game/eliminatedPlayers/${existingElim}`] = {
        name: elimName, role: elimRole, phase: `Day ${dayNum}`, playerId: eliminated
      };
      updates[`game/gameLog/${existingLog}`] = {
        text: `${elimName} was eliminated by the village.`, type: "death", timestamp: Date.now()
      };

      // Check win
      const updatedAssignments = { ...assignments };
      updatedAssignments[eliminated] = { ...updatedAssignments[eliminated], alive: false };
      const aliveM = Object.values(updatedAssignments).filter(a => a.alive && ROLES[a.role]?.team === "mafia").length;
      const aliveV = Object.values(updatedAssignments).filter(a => a.alive && ROLES[a.role]?.team !== "mafia").length;

      if (aliveM === 0) {
        updates["game/winner"] = "village";
        updates[`game/gameLog/${existingLog + 1}`] = { text: "The Village wins!", type: "win", timestamp: Date.now() };
      } else if (aliveM >= aliveV) {
        updates["game/winner"] = "mafia";
        updates[`game/gameLog/${existingLog + 1}`] = { text: "The Mafia wins!", type: "win", timestamp: Date.now() };
      } else {
        updates["game/phase"] = "night";
        updates["game/day"] = dayNum + 1;
        updates[`game/gameLog/${existingLog + 1}`] = { text: `Night ${dayNum + 1} falls...`, type: "system", timestamp: Date.now() };
      }
    }

    updates["game/votes"] = null;
    await update(ref(db, `rooms/${roomCode}`), updates);
  }, [isHost, roomCode]);

  // Send chat
  const sendChat = useCallback(async (text, playerName) => {
    if (!roomCode || !text.trim()) return;
    await push(ref(db, `rooms/${roomCode}/chat`), {
      sender: playerName,
      senderId: userId,
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      timestamp: Date.now()
    });
  }, [roomCode, userId]);

  // Play again (host resets game back to lobby)
  const playAgain = useCallback(async () => {
    if (!roomCode) return;
    await update(ref(db, `rooms/${roomCode}`), {
      "meta/status": "lobby",
      "game": null,
    });
    await remove(ref(db, `rooms/${roomCode}/chat`));
  }, [roomCode]);

  // Derived values
  const myRole = gameData?.assignments?.[userId]?.role || null;
  const phase = gameData?.phase || null;
  const day = gameData?.day || 1;
  const winner = gameData?.winner || null;
  const showRoleReveal = gameData?.showRoleReveal || false;
  const assignments = gameData?.assignments || {};
  const nightActions = gameData?.nightActions || {};
  const votes = gameData?.votes || {};
  const eliminatedPlayers = gameData?.eliminatedPlayers ? Object.values(gameData.eliminatedPlayers) : [];
  const gameLog = gameData?.gameLog ? Object.values(gameData.gameLog).sort((a,b) => (a.timestamp||0)-(b.timestamp||0)) : [];
  const gameActive = phase !== null && !winner;

  return {
    userId, roomCode, isHost, players, roomConfig, error, loading,
    myRole, phase, day, winner, showRoleReveal, assignments, nightActions, votes,
    eliminatedPlayers, gameLog, chatMessages, gameActive,
    createRoom, joinRoom, leaveRoom, updateConfig, startGame,
    submitNightAction, resolveNight, submitVote, resolveDay,
    sendChat, playAgain
  };
}
