import { useState, useEffect, useRef, useCallback } from "react";
import { db, auth, ref, set, get, push, onValue, onDisconnect, remove, update, signInAnonymously } from "./firebase";

const ROLES = {
  villager:       { team:"village" },
  healer:         { team:"village" },
  detective:      { team:"village" },
  vigilante:      { team:"village" },
  bodyguard:      { team:"village" },
  seer:           { team:"village" },
  mayor:          { team:"village" },
  godfather:      { team:"mafia" },
  mafioso:        { team:"mafia" },
  consigliere:    { team:"mafia" },
  bomber:         { team:"mafia" },
  silencer:       { team:"neutral" },
  serialKiller:   { team:"neutral" },
  survivor:       { team:"neutral" },
  suicideBomber:  { team:"neutral" },
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

  // Helper: pick most-voted target from a group of actions (collective decision)
  function collectiveTarget(actions, assignments, roleFilter) {
    const tally = {};
    Object.entries(actions).forEach(([pid, action]) => {
      const role = assignments[pid]?.role;
      if (roleFilter(role) && action.target) {
        tally[action.target] = (tally[action.target] || 0) + 1;
      }
    });
    const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
    return sorted.length > 0 ? sorted[0][0] : null;
  }

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

    // Collective decisions: each group votes on one target
    const mafiaTarget = collectiveTarget(actions, assignments, r => r === "mafioso" || r === "godfather");
    const healerTarget = collectiveTarget(actions, assignments, r => r === "healer");
    const detectiveTarget = collectiveTarget(actions, assignments, r => r === "detective");

    const updates = {};
    let logIdx = gam.gameLog ? Object.keys(gam.gameLog).length : 0;
    let elimIdx = gam.eliminatedPlayers ? Object.keys(gam.eliminatedPlayers).length : 0;
    const killed = [];

    // Mafia kill (blocked by healer)
    if (mafiaTarget && mafiaTarget !== healerTarget && assignments[mafiaTarget]?.alive) {
      killed.push(mafiaTarget);
    }

    // Bodyguard: if protected target was attacked, bodyguard dies instead
    Object.entries(actions).forEach(([pid, action]) => {
      if (assignments[pid]?.role === "bodyguard" && action.target === mafiaTarget && mafiaTarget && assignments[pid]?.alive) {
        // Bodyguard protected the mafia target — bodyguard dies, target lives
        if (!killed.includes(mafiaTarget)) return; // target was already saved by healer
        const idx = killed.indexOf(mafiaTarget);
        if (idx !== -1) killed.splice(idx, 1); // remove target from killed
        if (!killed.includes(pid)) killed.push(pid); // bodyguard dies
      }
    });

    // Vigilante kills
    Object.entries(actions).forEach(([pid, action]) => {
      if (assignments[pid]?.role === "vigilante" && action.target && assignments[action.target]?.alive) {
        if (action.target !== healerTarget && !killed.includes(action.target)) {
          killed.push(action.target);
        }
      }
    });

    // Serial killer kills
    Object.entries(actions).forEach(([pid, action]) => {
      if (assignments[pid]?.role === "serialKiller" && action.target && assignments[action.target]?.alive) {
        if (action.target !== healerTarget && !killed.includes(action.target)) {
          killed.push(action.target);
        }
      }
    });

    // Detective result — store for detectives to see (collective investigation)
    if (detectiveTarget && assignments[detectiveTarget]) {
      const targetTeam = ROLES[assignments[detectiveTarget].role]?.team;
      // Godfather appears innocent on first investigation
      const appearsAs = assignments[detectiveTarget].role === "godfather" && !assignments[detectiveTarget].investigated ? "village" : targetTeam;
      if (assignments[detectiveTarget].role === "godfather") {
        updates[`game/assignments/${detectiveTarget}/investigated`] = true;
      }
      const detName = playersVal[detectiveTarget]?.name || "?";
      updates[`game/detectiveResult`] = { target: detectiveTarget, name: detName, result: appearsAs };
    }

    // Apply kills
    if (killed.length > 0) {
      killed.forEach(pid => {
        updates[`game/assignments/${pid}/alive`] = false;
        const name = playersVal[pid]?.name || "Unknown";
        const role = assignments[pid]?.role;
        updates[`game/eliminatedPlayers/${elimIdx}`] = { name, role, phase: `Night ${dayNum}`, playerId: pid };
        updates[`game/gameLog/${logIdx}`] = { text: `Dawn breaks. ${name} was found dead.`, type: "death", timestamp: Date.now() };
        logIdx++;
        elimIdx++;
      });
    } else {
      updates[`game/gameLog/${logIdx}`] = { text: "Dawn breaks. Nobody died last night.", type: "system", timestamp: Date.now() };
      logIdx++;
    }

    updates["game/phase"] = "day";
    updates["game/nightActions"] = null;

    // Check win after night kills
    const updatedAssignments = { ...assignments };
    killed.forEach(pid => { updatedAssignments[pid] = { ...updatedAssignments[pid], alive: false }; });
    const aliveM = Object.values(updatedAssignments).filter(a => a.alive && ROLES[a.role]?.team === "mafia").length;
    const aliveV = Object.values(updatedAssignments).filter(a => a.alive && ROLES[a.role]?.team !== "mafia").length;

    if (aliveM === 0) {
      updates["game/winner"] = "village";
      updates[`game/gameLog/${logIdx}`] = { text: "The Village wins!", type: "win", timestamp: Date.now() };
    } else if (aliveM >= aliveV) {
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
    let logIdx = gam.gameLog ? Object.keys(gam.gameLog).length : 0;
    let elimIdx = gam.eliminatedPlayers ? Object.keys(gam.eliminatedPlayers).length : 0;

    // Clear detective result from previous night
    updates["game/detectiveResult"] = null;

    if (eliminated) {
      updates[`game/assignments/${eliminated}/alive`] = false;
      const elimName = playersVal[eliminated]?.name || "Unknown";
      const elimRole = assignments[eliminated]?.role;
      updates[`game/eliminatedPlayers/${elimIdx}`] = {
        name: elimName, role: elimRole, phase: `Day ${dayNum}`, playerId: eliminated
      };
      updates[`game/gameLog/${logIdx}`] = {
        text: `${elimName} was eliminated by the village.`, type: "death", timestamp: Date.now()
      };
      logIdx++;
      elimIdx++;

      // SUICIDE BOMBER: if voted out, they win solo!
      if (elimRole === "suicideBomber") {
        updates["game/winner"] = "suicideBomber";
        updates["game/winnerPlayerId"] = eliminated;
        updates[`game/gameLog/${logIdx}`] = {
          text: `💥 ${elimName} was the Suicide Bomber! They win!`, type: "win", timestamp: Date.now()
        };
      } else {
        // Normal win check
        const updatedAssignments = { ...assignments };
        updatedAssignments[eliminated] = { ...updatedAssignments[eliminated], alive: false };
        const aliveM = Object.values(updatedAssignments).filter(a => a.alive && ROLES[a.role]?.team === "mafia").length;
        const aliveV = Object.values(updatedAssignments).filter(a => a.alive && ROLES[a.role]?.team !== "mafia").length;

        if (aliveM === 0) {
          updates["game/winner"] = "village";
          updates[`game/gameLog/${logIdx}`] = { text: "The Village wins!", type: "win", timestamp: Date.now() };
        } else if (aliveM >= aliveV) {
          updates["game/winner"] = "mafia";
          updates[`game/gameLog/${logIdx}`] = { text: "The Mafia wins!", type: "win", timestamp: Date.now() };
        } else {
          updates["game/phase"] = "night";
          updates["game/day"] = dayNum + 1;
          updates[`game/gameLog/${logIdx}`] = { text: `Night ${dayNum + 1} falls...`, type: "system", timestamp: Date.now() };
        }
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
  const detectiveResult = gameData?.detectiveResult || null;

  return {
    userId, roomCode, isHost, players, roomConfig, error, loading,
    myRole, phase, day, winner, showRoleReveal, assignments, nightActions, votes,
    eliminatedPlayers, gameLog, chatMessages, gameActive, detectiveResult,
    createRoom, joinRoom, leaveRoom, updateConfig, startGame,
    submitNightAction, resolveNight, submitVote, resolveDay,
    sendChat, playAgain
  };
}
