import { useState, useEffect, useRef } from "react";

/* ─── DATA ─── */
const ROLES = {
  villager:     { name:"Villager",      team:"village", icon:"🧑‍🌾", description:"A regular villager. Votes during the day to eliminate suspects.",                    balance:0 },
  healer:       { name:"Healer",        team:"village", icon:"🌿", description:"Each night, choose one player to protect from elimination.",                            balance:1.5 },
  detective:    { name:"Detective",     team:"village", icon:"🔍", description:"Each night, investigate one player to learn their alignment.",                          balance:1.5 },
  vigilante:    { name:"Vigilante",     team:"village", icon:"⚔️", description:"Can shoot one player at night. Use wisely — friendly fire is real.",                    balance:1 },
  bodyguard:    { name:"Bodyguard",     team:"village", icon:"🛡️", description:"Protect a player at night. If they're attacked, you die instead.",                     balance:1 },
  seer:         { name:"Seer",          team:"village", icon:"👁️", description:"Each night, see who a player visited (if anyone).",                                     balance:1 },
  mayor:        { name:"Mayor",         team:"village", icon:"🎩", description:"Your vote counts as 2 during day eliminations.",                                        balance:0.8 },
  godfather:    { name:"Godfather",     team:"mafia",   icon:"🎭", description:"Leads the mafia. Appears innocent to the Detective once — after that, shows as guilty.", balance:2 },
  mafioso:      { name:"Mafioso",       team:"mafia",   icon:"🔪", description:"Carries out the mafia's kill each night.",                                              balance:1.5 },
  consigliere:  { name:"Consigliere",   team:"mafia",   icon:"📋", description:"Investigates a player each night to learn their exact role.",                           balance:1.5 },
  bomber:       { name:"Bomber",        team:"mafia",   icon:"💣", description:"Once per game, can plant a bomb that kills a player the next day.",                     balance:1.2 },
  silencer:     { name:"Silencer",      team:"neutral", icon:"🤫", description:"Silences a player — they cannot speak or vote the next day. Wins if alive at the end.", balance:0 },
  serialKiller: { name:"Serial Killer", team:"neutral", icon:"🩸", description:"Kills independently each night. Must be last one standing.",                            balance:0 },
  survivor:     { name:"Survivor",      team:"neutral", icon:"🏃", description:"Just wants to survive. Wins with whichever team is left.",                              balance:0 },
};

const PRESETS = {
  classic:   { name:"Classic",   players:7,  roles:{ villager:3, healer:1, detective:1, godfather:1, mafioso:1 }},
  chaos:     { name:"Chaos",     players:10, roles:{ villager:2, healer:1, detective:1, vigilante:1, bodyguard:1, godfather:1, mafioso:1, bomber:1, serialKiller:1 }},
  deception: { name:"Deception", players:9,  roles:{ villager:2, detective:1, seer:1, mayor:1, godfather:1, consigliere:1, silencer:1, bomber:1 }},
  bigGame:   { name:"Big Game",  players:14, roles:{ villager:4, healer:1, detective:1, vigilante:1, bodyguard:1, seer:1, godfather:1, mafioso:2, consigliere:1, bomber:1 }},
};

const TC = {
  village: { p:"#6ee7b7", s:"#34d399", bg:"rgba(52,211,153,0.06)", bdr:"rgba(52,211,153,0.18)" },
  mafia:   { p:"#fda4af", s:"#fb7185", bg:"rgba(251,113,133,0.06)", bdr:"rgba(251,113,133,0.18)" },
  neutral: { p:"#c4b5fd", s:"#a78bfa", bg:"rgba(167,139,250,0.06)", bdr:"rgba(167,139,250,0.18)" }
};
const CODE_ADJ = ["DARK","COLD","GRIM","SLY","BOLD","WILD","RED","MAD","SLY","DEEP","PALE","LOUD"];
const CODE_NOUN = ["FOX","OWL","WOLF","FANG","MOON","CROW","DUSK","CLAW","BONE","RAGE","TOMB","FATE"];
const genId = () => {
  const adj = CODE_ADJ[Math.floor(Math.random()*CODE_ADJ.length)];
  const noun = CODE_NOUN[Math.floor(Math.random()*CODE_NOUN.length)];
  const num = Math.floor(Math.random()*90+10);
  return `${adj}-${noun}-${num}`;
};

/* ─── GLOBAL CSS ─── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#06060b;--sf:rgba(255,255,255,0.018);--s:rgba(255,255,255,0.03);
  --sh:rgba(255,255,255,0.05);--b:rgba(255,255,255,0.055);--bh:rgba(255,255,255,0.12);
  --t:#ede9df;--ts:#c5c0b2;--td:#847e70;--tm:#4a463d;
  --red:#fb7185;--redbg:rgba(251,113,133,0.08);
  --fd:'DM Serif Display',Georgia,serif;--fm:'IBM Plex Mono','Courier New',monospace;
}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes scaleUp{from{opacity:0;transform:scale(0.88)}to{opacity:1;transform:scale(1)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes roleFlip{0%{transform:perspective(800px) rotateY(100deg) scale(0.7);opacity:0}50%{transform:perspective(800px) rotateY(-5deg) scale(1.06);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1)}}
@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes breathe{0%,100%{opacity:0.3}50%{opacity:0.7}}
@keyframes grain{0%,100%{transform:translate(0,0)}25%{transform:translate(-2%,-3%)}50%{transform:translate(3%,1%)}75%{transform:translate(-1%,2%)}}
@keyframes orbFloat1{0%{transform:translate(0,0) scale(1)}33%{transform:translate(30%,20%) scale(1.2)}66%{transform:translate(-20%,10%) scale(0.9)}100%{transform:translate(0,0) scale(1)}}
@keyframes orbFloat2{0%{transform:translate(0,0) scale(1)}33%{transform:translate(-25%,15%) scale(0.8)}66%{transform:translate(15%,-20%) scale(1.15)}100%{transform:translate(0,0) scale(1)}}
input:focus,textarea:focus{outline:none;border-color:var(--bh) !important}
button{cursor:pointer;border:none;background:none;font-family:var(--fm);transition:all 0.25s cubic-bezier(0.22,1,0.36,1)}
button:hover{transform:translateY(-1px)}button:active{transform:translateY(0) scale(0.97)}
html,body,#root{overflow-x:hidden;width:100%;max-width:100vw;position:relative}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.07);border-radius:3px}
.wrap{position:relative;z-index:1;max-width:940px;margin:0 auto;padding:28px 28px 80px;width:100%;box-sizing:border-box}
.lobby-grid{display:grid;grid-template-columns:320px 1fr;gap:32px}
.game-grid{display:grid;grid-template-columns:1fr 280px;gap:22px}
.home-title{font-family:var(--fd);font-size:72px;font-weight:400;color:var(--t);letter-spacing:2px;line-height:1}
.home-icon{font-size:80px;margin-bottom:16px}
.home-sub{font-family:var(--fm);font-size:10px;color:var(--td);letter-spacing:6px;text-transform:uppercase;margin-top:14px}
.room-code{font-family:var(--fd);font-size:40px;color:var(--red);letter-spacing:5px;word-break:break-all}
.lobby-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:36px;gap:12px;flex-wrap:wrap}
.role-reveal-icon{font-size:110px;margin-bottom:24px}
.role-reveal-name{font-family:var(--fd);font-size:56px;margin-bottom:12px}
.role-reveal-wrap{padding:20px}
.phase-bar{padding:18px 26px;margin-bottom:26px;display:flex;justify-content:space-between;align-items:center;gap:12px}
.phase-title{font-family:var(--fd);font-size:26px;margin-top:4px}
.winner-icon{font-size:120px;margin-bottom:28px}
.winner-title{font-family:var(--fd);font-size:60px;margin-bottom:16px;line-height:1}
.target-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(108px,1fr));gap:8px}
.action-panel{padding:26px}
.action-title{font-family:var(--fd);font-size:22px;color:var(--t);margin-bottom:4px}
.player-count-num{font-family:var(--fd);font-size:56px;color:var(--t);line-height:1}
.preset-row{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.role-card{overflow:hidden}
.role-card-top{display:flex;align-items:center;gap:10px}
.role-card-desc{font-family:var(--fm);font-size:9px;color:var(--td);line-height:1.4;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.role-card-controls{display:flex;align-items:center;gap:3px;flex-shrink:0}
.glass-pad{padding:22px 28px}
@media(max-width:768px){
  .role-card-top{flex-wrap:wrap;gap:8px}
  .role-card-desc{white-space:normal;font-size:8px;line-height:1.5;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical}
  .role-card-controls{margin-left:auto}
  .glass-pad{padding:16px 14px}
  .wrap{padding:16px 12px 40px}
  .lobby-grid{grid-template-columns:1fr !important;gap:20px}
  .game-grid{grid-template-columns:1fr !important;gap:16px}
  .home-title{font-size:42px;letter-spacing:1px}
  .home-icon{font-size:52px;margin-bottom:10px}
  .home-sub{font-size:8px;letter-spacing:4px}
  .room-code{font-size:22px;letter-spacing:2px}
  .lobby-header{margin-bottom:20px}
  .role-reveal-icon{font-size:64px;margin-bottom:14px}
  .role-reveal-name{font-size:32px;margin-bottom:8px}
  .role-reveal-wrap{padding:16px}
  .phase-bar{padding:14px 16px;margin-bottom:16px;flex-direction:column;align-items:flex-start;gap:8px}
  .phase-title{font-size:16px}
  .winner-icon{font-size:64px;margin-bottom:16px}
  .winner-title{font-size:34px}
  .target-grid{grid-template-columns:repeat(auto-fill,minmax(80px,1fr)) !important;gap:6px}
  .action-panel{padding:16px}
  .action-title{font-size:18px}
  .player-count-num{font-size:40px}
  .preset-row{gap:4px}
  .preset-row button{font-size:9px !important;padding:8px 6px !important}
}
`;

/* ─── SHARED COMPONENTS ─── */
function Grain(){
  return <div style={{position:"fixed",inset:0,zIndex:999,pointerEvents:"none",opacity:0.02,mixBlendMode:"overlay",
    background:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    animation:"grain 0.5s steps(1) infinite"}}/>;
}

function Orbs({variant}){
  const configs = {
    home:   [{c:"rgba(180,40,80,0.12)",sz:500,x:"15%",y:"20%",a:"orbFloat1 20s ease infinite"},{c:"rgba(40,40,160,0.09)",sz:400,x:"75%",y:"70%",a:"orbFloat2 25s ease infinite"}],
    lobby:  [{c:"rgba(160,60,60,0.08)",sz:450,x:"80%",y:"20%",a:"orbFloat2 22s ease infinite"},{c:"rgba(50,100,50,0.07)",sz:350,x:"20%",y:"75%",a:"orbFloat1 28s ease infinite"}],
    night:  [{c:"rgba(30,30,140,0.15)",sz:600,x:"30%",y:"25%",a:"orbFloat1 18s ease infinite"},{c:"rgba(80,20,120,0.1)",sz:400,x:"70%",y:"70%",a:"orbFloat2 22s ease infinite"}],
    day:    [{c:"rgba(140,120,20,0.1)",sz:500,x:"60%",y:"20%",a:"orbFloat2 20s ease infinite"},{c:"rgba(120,80,10,0.07)",sz:350,x:"25%",y:"65%",a:"orbFloat1 26s ease infinite"}],
  };
  return <div style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden",width:"100vw",height:"100vh"}}>
    {(configs[variant]||configs.home).map((o,i)=><div key={i} style={{position:"absolute",width:`min(${o.sz}px, 80vw)`,height:`min(${o.sz}px, 80vw)`,borderRadius:"50%",background:`radial-gradient(circle,${o.c},transparent 70%)`,left:o.x,top:o.y,animation:o.a,filter:"blur(60px)"}}/>)}
  </div>;
}

function Glass({children,style,glow,onClick,className}){
  return <div className={className} onClick={onClick} style={{background:"rgba(255,255,255,0.02)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid var(--b)",borderRadius:18,
    boxShadow:glow?`0 0 40px ${glow}0d,inset 0 1px 0 rgba(255,255,255,0.05)`:"inset 0 1px 0 rgba(255,255,255,0.04),0 4px 24px rgba(0,0,0,0.15)",
    transition:"all 0.3s ease",...style}}>{children}</div>;
}

function Avatar({name,size=40,glow}){
  const h=(name||"").split("").reduce((a,c)=>a+c.charCodeAt(0),0)%360;
  return <div style={{width:size,height:size,borderRadius:"50%",flexShrink:0,
    background:`conic-gradient(from ${h}deg,hsl(${h},35%,26%),hsl(${h+40},30%,20%),hsl(${h},35%,26%))`,
    display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fm)",fontSize:size*0.36,color:"rgba(255,255,255,0.85)",fontWeight:600,
    boxShadow:glow?`0 0 24px ${glow}30`:"0 2px 8px rgba(0,0,0,0.3)",border:glow?`2px solid ${glow}50`:"2px solid rgba(255,255,255,0.05)",transition:"all 0.3s"}}>
    {(name||"?")[0].toUpperCase()}</div>;
}

function Divider(){return <div style={{height:1,background:"linear-gradient(90deg,transparent,var(--bh),transparent)",margin:"14px 0"}}/>;}

function BalanceMeter({roles}){
  let vP=0,mP=0,vC=0,mC=0;
  Object.entries(roles).forEach(([k,c])=>{if(c<=0)return;const r=ROLES[k];if(!r)return;if(r.team==="village"){vP+=r.balance*c;vC+=c;}else if(r.team==="mafia"){mP+=r.balance*c;mC+=c;}});
  const tot=Object.values(roles).reduce((a,b)=>a+b,0);
  const ratio=tot>0?mC/tot:0;
  const s1=1-Math.abs(ratio-0.28)/0.28;
  const s2=1-Math.min(Math.abs((vP>0?mP/vP:0)-0.55)/0.55,1);
  const ov=Math.max(0,Math.min(100,(s1*0.5+s2*0.5)*100));
  const color=ov>70?"#34d399":ov>45?"#fbbf24":"#fb7185";
  const label=ov>70?"Balanced":ov>45?"Tilted":"Unbalanced";
  return <Glass style={{padding:"18px 22px",marginBottom:14}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
      <span style={{fontFamily:"var(--fd)",fontSize:15,color:"var(--t)"}}>Game Balance</span>
      <span style={{fontFamily:"var(--fm)",fontSize:10,color,fontWeight:600,padding:"3px 12px",background:`${color}12`,borderRadius:20,border:`1px solid ${color}25`}}>{label}</span>
    </div>
    <div style={{height:5,background:"rgba(255,255,255,0.04)",borderRadius:10,overflow:"hidden",marginBottom:14}}>
      <div style={{height:"100%",width:`${ov}%`,background:`linear-gradient(90deg,${color},${color}88)`,borderRadius:10,transition:"width 0.6s cubic-bezier(0.22,1,0.36,1)"}}/>
    </div>
    <div style={{display:"flex",justifyContent:"space-between",fontFamily:"var(--fm)",fontSize:9,color:"var(--td)"}}>
      <span style={{color:TC.village.s}}>Village {vC} · {vP.toFixed(1)}p</span>
      <span>{(ratio*100).toFixed(0)}% mafia</span>
      <span style={{color:TC.mafia.s}}>Mafia {mC} · {mP.toFixed(1)}p</span>
    </div>
  </Glass>;
}

function RoleCard({role,count,onChange}){
  const tc=TC[role.team];
  return <Glass className="role-card" style={{padding:"13px 16px",opacity:count>0?1:0.4,borderColor:count>0?tc.bdr:"var(--b)"}} glow={count>0?tc.s:null}>
    <div className="role-card-top">
      <div style={{width:36,height:36,borderRadius:10,background:count>0?tc.bg:"var(--sf)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,transition:"all 0.3s",flexShrink:0}}>{role.icon}</div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
          <span style={{fontFamily:"var(--fd)",fontSize:13,color:"var(--t)"}}>{role.name}</span>
          <span style={{fontFamily:"var(--fm)",fontSize:7,color:tc.s,letterSpacing:2,textTransform:"uppercase"}}>{role.team}</span>
        </div>
        <div className="role-card-desc">{role.description}</div>
      </div>
      <div className="role-card-controls">
        <button onClick={()=>onChange(Math.max(0,count-1))} style={{width:28,height:28,borderRadius:8,border:"1px solid var(--b)",background:"var(--sf)",color:"var(--ts)",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
        <span style={{fontFamily:"var(--fm)",fontSize:15,color:"var(--t)",width:24,textAlign:"center",fontWeight:600}}>{count}</span>
        <button onClick={()=>onChange(count+1)} style={{width:28,height:28,borderRadius:8,border:`1px solid ${tc.bdr}`,background:tc.bg,color:tc.s,fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
      </div>
    </div>
  </Glass>;
}

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
export default function MafiaGame(){
  const [screen,setScreen]=useState("home");
  const [playerName,setPlayerName]=useState("");
  const [roomCode,setRoomCode]=useState("");
  const [joinCode,setJoinCode]=useState("");
  const [maxPlayers,setMaxPlayers]=useState(7);
  const [roles,setRoles]=useState({villager:3,healer:1,detective:1,godfather:1,mafioso:1});
  const [players,setPlayers]=useState([]);
  const [isHost,setIsHost]=useState(false);
  const [gameState,setGameState]=useState(null);
  const [myRole,setMyRole]=useState(null);
  const [phase,setPhase]=useState("night");
  const [day,setDay]=useState(1);
  const [selectedTarget,setSelectedTarget]=useState(null);
  const [chatMessages,setChatMessages]=useState([]);
  const [chatInput,setChatInput]=useState("");
  const [showRoleReveal,setShowRoleReveal]=useState(true);
  const [eliminatedPlayers,setEliminatedPlayers]=useState([]);
  const [gameLog,setGameLog]=useState([]);
  const [winner,setWinner]=useState(null);
  const [roleTab,setRoleTab]=useState("village");
  const chatEndRef=useRef(null);

  const assignedRoles=Object.values(roles).reduce((a,b)=>a+b,0);
  const remainingSlots=Math.max(0,maxPlayers-assignedRoles);

  const updateMaxPlayers=(n)=>{const c=Math.max(4,Math.min(20,n));setMaxPlayers(c);const cur=Object.values(roles).reduce((a,b)=>a+b,0);if(cur>c)setRoles(prev=>({...prev,villager:Math.max(0,(prev.villager||0)-(cur-c))}));};
  const updateRole=(key,value)=>{const other=Object.entries(roles).filter(([k])=>k!==key).reduce((a,[,v])=>a+v,0);setRoles(prev=>({...prev,[key]:Math.max(0,Math.min(maxPlayers-other,value))}));};
  const createRoom=()=>{if(!playerName.trim())return;setRoomCode(genId());setIsHost(true);setPlayers([{name:playerName,isHost:true,isReady:false,id:"host"}]);setScreen("lobby");};
  const joinRoom=()=>{if(!playerName.trim()||!joinCode.trim())return;setRoomCode(joinCode.toUpperCase());setIsHost(false);setPlayers(prev=>[...prev,{name:playerName,isHost:false,isReady:false,id:genId()}]);setScreen("lobby");};
  const simulateJoin=()=>{const names=["Raven","Ghost","Cipher","Nova","Blaze","Storm","Echo","Viper","Phoenix","Shade","Frost","Dusk","Wraith","Hex","Ember","Luna","Onyx","Ash","Nyx","Rune"];const avail=names.filter(n=>!players.some(p=>p.name===n));if(avail.length>0&&players.length<maxPlayers)setPlayers(prev=>[...prev,{name:avail[Math.floor(Math.random()*avail.length)],isHost:false,isReady:true,id:genId()}]);};

  const startGame=()=>{
    const pool=[];Object.entries(roles).forEach(([k,c])=>{for(let i=0;i<c;i++)pool.push(k);});
    while(pool.length<players.length)pool.push("villager");
    for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
    const assigned=players.map((p,i)=>({...p,role:pool[i]||"villager",alive:true}));
    setGameState(assigned);setMyRole(assigned[0].role);setPhase("night");setDay(1);setShowRoleReveal(true);
    setEliminatedPlayers([]);setGameLog([{text:"Night falls on the village...",type:"system"}]);setChatMessages([]);setWinner(null);setScreen("game");
    setTimeout(()=>setShowRoleReveal(false),4500);
  };

  const nightAction=()=>{if(!selectedTarget)return;setGameLog(prev=>[...prev,{text:`You targeted ${selectedTarget}.`,type:"action"}]);
    setTimeout(()=>{const alive=gameState.filter(p=>p.alive);const mt=alive.find(p=>ROLES[p.role]?.team!=="mafia")?.name;const ht=alive.find(p=>ROLES[p.role]?.team==="village"&&p.name!==playerName)?.name;let killed=null;if(mt&&mt!==ht)killed=mt;
      if(killed){setGameState(prev=>prev.map(p=>p.name===killed?{...p,alive:false}:p));setEliminatedPlayers(prev=>[...prev,{name:killed,role:gameState.find(p=>p.name===killed)?.role,phase:`Night ${day}`}]);setGameLog(prev=>[...prev,{text:`Dawn breaks. ${killed} was found dead.`,type:"death"}]);}
      else setGameLog(prev=>[...prev,{text:"Dawn breaks. Nobody died last night.",type:"system"}]);
      setPhase("day");setSelectedTarget(null);},2000);};

  const vote=(target)=>{setGameLog(prev=>[...prev,{text:`You voted to eliminate ${target}.`,type:"action"}]);
    setTimeout(()=>{setGameState(prev=>prev.map(p=>p.name===target?{...p,alive:false}:p));setEliminatedPlayers(prev=>[...prev,{name:target,role:gameState.find(p=>p.name===target)?.role,phase:`Day ${day}`}]);setGameLog(prev=>[...prev,{text:`${target} was eliminated by the village.`,type:"death"}]);
      const upd=gameState.map(p=>p.name===target?{...p,alive:false}:p);const am=upd.filter(p=>p.alive&&ROLES[p.role]?.team==="mafia").length;const av=upd.filter(p=>p.alive&&ROLES[p.role]?.team!=="mafia").length;
      if(am===0){setWinner("village");setGameLog(prev=>[...prev,{text:"The Village wins!",type:"win"}]);}
      else if(am>=av){setWinner("mafia");setGameLog(prev=>[...prev,{text:"The Mafia wins!",type:"win"}]);}
      else{setPhase("night");setDay(d=>d+1);setSelectedTarget(null);setGameLog(prev=>[...prev,{text:`Night ${day+1} falls...`,type:"system"}]);}
    },2000);};

  const sendChat=()=>{if(!chatInput.trim())return;setChatMessages(prev=>[...prev,{sender:playerName,text:chatInput,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]);setChatInput("");};

  const page={minHeight:"100vh",background:"var(--bg)",color:"var(--t)",fontFamily:"var(--fm)",position:"relative",overflowX:"hidden",width:"100%"};
  const inp={width:"100%",padding:"15px 20px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--b)",borderRadius:14,color:"var(--t)",fontFamily:"var(--fm)",fontSize:13,transition:"border 0.3s"};
  const bigBtn={padding:"18px",background:"linear-gradient(135deg,#be123c,#9f1239)",borderRadius:14,color:"#fff",fontFamily:"var(--fd)",fontSize:20,boxShadow:"0 12px 40px rgba(190,18,60,0.25),inset 0 1px 0 rgba(255,255,255,0.1)",width:"100%"};

  /* ═══ HOME ═══ */
  if(screen==="home") return <div style={page}><style>{CSS}</style><Grain/><Orbs variant="home"/>
    <div className="wrap" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh"}}>
      <div style={{textAlign:"center",marginBottom:60,animation:"fadeUp 1s ease"}}>
        <div className="home-icon" style={{animation:"float 5s ease infinite",filter:"drop-shadow(0 0 50px rgba(251,113,133,0.2))"}}>🎭</div>
        <h1 className="home-title">Mafia</h1>
        <p className="home-sub">Deception · Strategy · Survival</p>
      </div>
      <div style={{width:"100%",maxWidth:380,animation:"fadeUp 1s ease 0.15s both"}}>
        <input type="text" placeholder="Enter your name" value={playerName} onChange={e=>setPlayerName(e.target.value)} style={{...inp,marginBottom:18,textAlign:"center",fontSize:15}}/>
        <button onClick={createRoom} style={bigBtn}>Create Room</button>
        <div style={{display:"flex",alignItems:"center",gap:16,margin:"22px 0"}}>
          <div style={{flex:1,height:1,background:"linear-gradient(90deg,transparent,var(--b),transparent)"}}/>
          <span style={{fontSize:9,color:"var(--tm)",letterSpacing:4}}>OR JOIN</span>
          <div style={{flex:1,height:1,background:"linear-gradient(90deg,transparent,var(--b),transparent)"}}/>
        </div>
        <div style={{display:"flex",gap:8}}>
          <input type="text" placeholder="DARK-WOLF-42" value={joinCode} onChange={e=>setJoinCode(e.target.value.toUpperCase())} maxLength={15} style={{...inp,textAlign:"center",letterSpacing:2,fontSize:14,fontWeight:600}}/>
          <button onClick={joinRoom} style={{padding:"15px 28px",background:"var(--s)",border:"1px solid var(--bh)",borderRadius:14,color:"var(--t)",fontSize:12,fontWeight:500}}>Join</button>
        </div>
      </div>
    </div>
  </div>;

  /* ═══ LOBBY ═══ */
  if(screen==="lobby") return <div style={page}><style>{CSS}</style><Grain/><Orbs variant="lobby"/>
    <div className="wrap">
      <div className="lobby-header" style={{animation:"fadeUp 0.5s ease"}}>
        <div>
          <div style={{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:5,marginBottom:6}}>ROOM CODE</div>
          <div className="room-code">{roomCode}</div>
        </div>
        <button onClick={()=>setScreen("home")} style={{padding:"10px 22px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:10,color:"var(--td)",fontSize:11,flexShrink:0}}>← Leave</button>
      </div>

      <div className="lobby-grid">
        {/* Players */}
        <div>
          <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:18}}>
            <span style={{fontFamily:"var(--fd)",fontSize:22,color:"var(--t)"}}>Players</span>
            <span style={{fontFamily:"var(--fm)",fontSize:12,color:"var(--td)"}}>{players.length}<span style={{color:"var(--tm)"}}>/{maxPlayers}</span></span>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:16}}>
            {players.map((p,i)=><Glass key={p.id} style={{padding:"12px 16px",display:"flex",alignItems:"center",gap:12,animation:`fadeUp 0.3s ease ${i*0.05}s both`}}>
              <Avatar name={p.name} size={34}/>
              <span style={{flex:1,fontFamily:"var(--fd)",fontSize:14,color:"var(--t)"}}>{p.name}</span>
              {p.isHost&&<span style={{fontFamily:"var(--fm)",fontSize:7,color:"#fbbf24",background:"rgba(251,191,36,0.1)",padding:"3px 10px",borderRadius:20,letterSpacing:2}}>HOST</span>}
              <span style={{width:7,height:7,borderRadius:"50%",background:p.isReady?"#34d399":"rgba(255,255,255,0.08)"}}/>
            </Glass>)}
            {Array.from({length:Math.max(0,maxPlayers-players.length)}).map((_,i)=>
              <div key={`e${i}`} style={{padding:"14px 16px",borderRadius:18,border:"1px dashed rgba(255,255,255,0.04)",textAlign:"center",fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)"}}>waiting for player...</div>
            )}
          </div>
          {isHost&&<button onClick={simulateJoin} style={{width:"100%",padding:"12px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:12,color:"var(--td)",fontSize:10,marginBottom:14,letterSpacing:0.5}}>+ Simulate Player</button>}
          {isHost&&players.length>=4&&<button onClick={startGame} style={bigBtn}>Start Game</button>}
          {isHost&&players.length<4&&<Glass style={{padding:14,textAlign:"center"}}><span style={{fontFamily:"var(--fm)",fontSize:10,color:"#fbbf24"}}>Need at least 4 players to start</span></Glass>}
        </div>

        {/* Setup */}
        <div>
          {/* Player Count */}
          <Glass className="glass-pad" style={{marginBottom:18}}>
            <div style={{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:16}}>PLAYER COUNT</div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:24,marginBottom:16}}>
              <button onClick={()=>updateMaxPlayers(maxPlayers-1)} style={{width:44,height:44,borderRadius:13,border:"1px solid var(--b)",background:"var(--sf)",color:"var(--ts)",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
              <div style={{textAlign:"center",minWidth:70}}>
                <div className="player-count-num">{maxPlayers}</div>
              </div>
              <button onClick={()=>updateMaxPlayers(maxPlayers+1)} style={{width:44,height:44,borderRadius:13,border:"1px solid rgba(251,113,133,0.2)",background:"var(--redbg)",color:"var(--red)",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
            </div>
            <div style={{display:"flex",gap:5,justifyContent:"center",marginBottom:16,flexWrap:"wrap"}}>
              {[5,6,7,8,10,12,15].map(n=><button key={n} onClick={()=>updateMaxPlayers(n)} style={{padding:"6px 10px",borderRadius:8,fontSize:10,fontWeight:maxPlayers===n?600:400,background:maxPlayers===n?"var(--redbg)":"var(--sf)",border:`1px solid ${maxPlayers===n?"rgba(251,113,133,0.2)":"var(--b)"}`,color:maxPlayers===n?"var(--red)":"var(--tm)"}}>{n}</button>)}
            </div>
            <Divider/>
            <div style={{display:"flex",justifyContent:"space-between",fontFamily:"var(--fm)",fontSize:9,flexWrap:"wrap",gap:4}}>
              <span style={{color:"var(--td)"}}>Roles: <span style={{color:assignedRoles>maxPlayers?"#fb7185":"#34d399",fontWeight:600}}>{assignedRoles}</span>/{maxPlayers}</span>
              {remainingSlots>0&&<span style={{color:"#fbbf24"}}>+{remainingSlots} villager{remainingSlots!==1?"s":""}</span>}
            </div>
          </Glass>

          {/* Presets */}
          <div className="preset-row">
            {Object.entries(PRESETS).map(([k,p])=>{const t=Object.values(p.roles).reduce((a,b)=>a+b,0);return <button key={k} onClick={()=>{setRoles({...Object.fromEntries(Object.keys(ROLES).map(k=>[k,0])),...p.roles});setMaxPlayers(t);}}
              style={{flex:1,padding:"11px 8px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:12,color:"var(--ts)",fontSize:10,fontWeight:500}}>{p.name}</button>;})}
          </div>

          <BalanceMeter roles={{...roles,villager:(roles.villager||0)+remainingSlots}}/>

          {/* Tabs */}
          <div style={{display:"flex",gap:3,marginBottom:12}}>
            {["village","mafia","neutral"].map(tab=>{const tc=TC[tab];return <button key={tab} onClick={()=>setRoleTab(tab)}
              style={{flex:1,padding:"10px",background:roleTab===tab?tc.bg:"transparent",border:`1px solid ${roleTab===tab?tc.bdr:"var(--b)"}`,borderRadius:11,color:roleTab===tab?tc.p:"var(--tm)",fontSize:9,letterSpacing:2,textTransform:"uppercase",fontWeight:roleTab===tab?600:400}}>{tab}</button>;})}
          </div>

          {/* Roles */}
          <div style={{display:"flex",flexDirection:"column",gap:6,maxHeight:320,overflowY:"auto",paddingRight:4}}>
            {Object.entries(ROLES).filter(([,r])=>r.team===roleTab).map(([k,r])=><RoleCard key={k} role={r} count={roles[k]||0} onChange={v=>updateRole(k,v)}/>)}
          </div>
        </div>
      </div>
    </div>
  </div>;

  /* ═══ GAME ═══ */
  if(screen==="game"){
    const alive=gameState?.filter(p=>p.alive)||[];
    const rd=ROLES[myRole];const mtc=TC[rd?.team||"village"];

    return <div style={page}><style>{CSS}</style><Grain/><Orbs variant={phase}/>

      {showRoleReveal&&rd&&<div style={{position:"fixed",inset:0,zIndex:100,background:"rgba(4,4,8,0.97)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",animation:"fadeIn 0.5s ease"}}>
        <div className="role-reveal-wrap" style={{animation:"roleFlip 1.2s cubic-bezier(0.22,1,0.36,1)",textAlign:"center"}}>
          <div className="role-reveal-icon" style={{filter:`drop-shadow(0 0 70px ${mtc.s}40)`}}>{rd.icon}</div>
          <div className="role-reveal-name" style={{color:mtc.p}}>{rd.name}</div>
          <div style={{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",maxWidth:360,lineHeight:1.8,margin:"0 auto",padding:"0 16px"}}>{rd.description}</div>
          <div style={{fontFamily:"var(--fm)",fontSize:8,color:mtc.s,letterSpacing:5,marginTop:28,textTransform:"uppercase"}}>Team {rd.team}</div>
        </div>
      </div>}

      <div className="wrap">
        <Glass className="phase-bar" glow={phase==="night"?"#6366f1":"#eab308"}>
          <div>
            <div style={{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:5}}>{phase==="night"?"🌙 NIGHT":"☀️ DAY"} {day}</div>
            <div className="phase-title" style={{color:phase==="night"?"#a5b4fc":"#fde68a"}}>{phase==="night"?"The village sleeps...":"The village awakens"}</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",display:"flex",alignItems:"center",gap:8,justifyContent:"flex-end"}}><span style={{fontSize:22}}>{rd?.icon}</span>{rd?.name}</div>
            <div style={{fontFamily:"var(--fm)",fontSize:9,color:mtc.s,marginTop:4}}>{alive.length} alive</div>
          </div>
        </Glass>

        {winner?(
          <div style={{textAlign:"center",padding:"60px 20px",animation:"fadeUp 0.8s ease"}}>
            <div className="winner-icon" style={{filter:`drop-shadow(0 0 80px ${winner==="village"?"rgba(52,211,153,0.35)":"rgba(251,113,133,0.35)"})`}}>{winner==="village"?"🧑‍🌾":"🎭"}</div>
            <h2 className="winner-title" style={{color:winner==="village"?"#6ee7b7":"#fda4af"}}>{winner==="village"?"Village Wins":"Mafia Wins"}</h2>
            <p style={{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",maxWidth:400,margin:"0 auto 48px",lineHeight:1.7}}>{winner==="village"?"Justice prevails. Every last mafioso has been found.":"The mafia has seized control. The village falls silent."}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginBottom:52}}>
              {gameState.map((p,i)=>{const tc=TC[ROLES[p.role]?.team||"village"];return <Glass key={i} style={{padding:"10px 16px",display:"flex",alignItems:"center",gap:10,opacity:p.alive?1:0.25}} glow={p.alive?tc.s:null}>
                <span style={{fontSize:18}}>{ROLES[p.role]?.icon}</span>
                <span style={{fontFamily:"var(--fd)",fontSize:12,color:"var(--t)"}}>{p.name}</span>
                <span style={{fontFamily:"var(--fm)",fontSize:8,color:tc.p}}>{ROLES[p.role]?.name}</span>
              </Glass>;})}
            </div>
            <button onClick={()=>{setScreen("lobby");setGameState(null);setWinner(null);}} style={{...bigBtn,width:"auto",padding:"18px 56px",display:"inline-block"}}>Play Again</button>
          </div>
        ):(
          <div className="game-grid">
            <div>
              <Glass className="action-panel" style={{marginBottom:18}}>
                <div className="action-title">{phase==="night"?"Choose your target":"Vote to eliminate"}</div>
                <div style={{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",marginBottom:24}}>{phase==="night"?"Select a player to use your ability on":"The village must decide who to send away"}</div>
                <div className="target-grid">
                  {alive.filter(p=>p.name!==playerName).map((p,i)=>{const sel=selectedTarget===p.name;
                    return <button key={p.id||i} onClick={()=>phase==="night"?setSelectedTarget(p.name):vote(p.name)}
                      style={{padding:"18px 8px",background:sel?"var(--redbg)":"var(--sf)",border:`1px solid ${sel?"rgba(251,113,133,0.25)":"var(--b)"}`,borderRadius:16,color:"var(--t)",textAlign:"center",animation:`scaleUp 0.3s ease ${i*0.04}s both`}}>
                      <div style={{display:"flex",justifyContent:"center",marginBottom:10}}><Avatar name={p.name} size={46} glow={sel?"var(--red)":null}/></div>
                      <div style={{fontFamily:"var(--fd)",fontSize:12}}>{p.name}</div>
                    </button>;})}
                </div>
                {phase==="night"&&selectedTarget&&<button onClick={nightAction} style={{marginTop:20,width:"100%",padding:"15px",background:"linear-gradient(135deg,#1e40af,#2563eb)",borderRadius:13,color:"#fff",fontFamily:"var(--fm)",fontSize:11,fontWeight:600,letterSpacing:0.5,boxShadow:"0 10px 32px rgba(37,99,235,0.25),inset 0 1px 0 rgba(255,255,255,0.1)"}}>Confirm · {selectedTarget}</button>}
              </Glass>

              <Glass style={{padding:20,maxHeight:210,overflowY:"auto"}}>
                <div style={{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12}}>GAME LOG</div>
                {gameLog.map((e,i)=><div key={i} style={{padding:"7px 0",fontFamily:"var(--fm)",fontSize:10,borderBottom:"1px solid rgba(255,255,255,0.02)",lineHeight:1.6,
                  color:e.type==="death"?"#fb7185":e.type==="win"?"#fde68a":e.type==="action"?"#93c5fd":"var(--td)"}}>{e.text}</div>)}
              </Glass>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {eliminatedPlayers.length>0&&<Glass style={{padding:18}}>
                <div style={{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12}}>ELIMINATED</div>
                {eliminatedPlayers.map((p,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,0.02)"}}>
                  <span style={{fontFamily:"var(--fm)",fontSize:10,color:"var(--td)"}}>{ROLES[p.role]?.icon} {p.name}</span>
                  <span style={{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)"}}>{p.phase}</span>
                </div>)}
              </Glass>}

              <Glass style={{flex:1,padding:18,display:"flex",flexDirection:"column",minHeight:250}}>
                <div style={{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12}}>{phase==="night"&&rd?.team==="mafia"?"🔪 MAFIA CHAT":"💬 VILLAGE CHAT"}</div>
                <div style={{flex:1,overflowY:"auto",marginBottom:10}}>
                  {chatMessages.length===0&&<div style={{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",textAlign:"center",marginTop:44,opacity:0.35}}>No messages yet</div>}
                  {chatMessages.map((m,i)=><div key={i} style={{marginBottom:12}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontFamily:"var(--fm)",fontSize:9,fontWeight:600,color:m.sender===playerName?"#93c5fd":"var(--td)"}}>{m.sender}</span><span style={{fontFamily:"var(--fm)",fontSize:7,color:"var(--tm)"}}>{m.time}</span></div>
                    <div style={{fontFamily:"var(--fd)",fontSize:13,color:"var(--t)",marginTop:3,lineHeight:1.5}}>{m.text}</div>
                  </div>)}
                  <div ref={chatEndRef}/>
                </div>
                <div style={{display:"flex",gap:6}}>
                  <input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="Type..." disabled={phase==="night"&&rd?.team!=="mafia"}
                    style={{flex:1,padding:"11px 14px",background:"rgba(255,255,255,0.025)",border:"1px solid var(--b)",borderRadius:11,color:"var(--t)",fontFamily:"var(--fm)",fontSize:10}}/>
                  <button onClick={sendChat} style={{padding:"11px 16px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:11,color:"var(--t)",fontSize:13}}>↵</button>
                </div>
              </Glass>
            </div>
          </div>
        )}
      </div>
    </div>;
  }
  return null;
}
