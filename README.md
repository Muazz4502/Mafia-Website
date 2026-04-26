# 🕵️ Mafia

> The party game, but on the web. No more *"everyone close your eyes"*
> when half the room is on Zoom.

```
                              ╭───────────╮
                              │  ROOM:    │
                              │  ABRZL    │
                              ╰───────────╯
                                    │
              ╭─────────────────────┼─────────────────────╮
              │                     │                     │
       ┌──────────┐         ┌──────────────┐       ┌────────────┐
       │  👤 you  │         │ 👤 your friend│       │  👤 me     │
       │  Mafia 🥷 │         │  Detective 🔍 │       │  Doctor 🩺 │
       └──────────┘         └──────────────┘       └────────────┘
                                    │
                              ╭──────────╮
                              │  Night 1  │
                              │  Vote… ☠️ │
                              ╰──────────╯
```

## The pitch

You've been there. Eight friends, half in the same living room, half
on a Zoom. The GM keeps forgetting whose turn it is. The Mafia kills
the wrong person. The Detective forgets they're the Detective. The
Doctor saves themselves twice in a row.

This fixes that.

## How a round goes

1. **Host** clicks "Create room" → gets a 5-letter code.
2. **Everyone** joins on their phone with the code.
3. Tap **Ready**.
4. The app deals roles privately — your screen turns to a card flip,
   no one else sees yours.
5. **Night** — Mafia picks, Detective investigates, Doctor saves.
   Your screen actually dims when it's not your turn. *No more
   peeking through your fingers.*
6. **Day** — discussion timer ticks down, vote, banishment.
7. Repeat until town wins or Mafia wins.

No human GM. No paper. No "wait, did the Detective go yet?"

## Stack

- ⚛️ **React + Vite** for the UI
- 🔥 **Firebase Realtime Database** for the
  *"everyone-sees-the-same-state"* magic — every device watches
  `/rooms/<code>`, state changes broadcast in <100ms
- That's it. **No backend you have to host. No server bill.**

## Roles in the box

| Role | Power | Win condition |
|---|---|---|
| 🥷 Mafia | Eliminate one player per night | Mafia ≥ Town |
| 🔍 Detective | Investigate one player → "innocent" or "Mafia" | Town wins |
| 🩺 Doctor | Save one player per night (self-save configurable) | Town wins |
| 👤 Civilian | Figure it out with the other 80% | Town wins |

Want more roles (Jester, Vigilante, Bodyguard)? They're data-driven.
Add a row in `MafiaGame.jsx`, they appear in the role selector.

## Get it running

```bash
git clone https://github.com/Muazz4502/Mafia-Website.git
cd Mafia-Website
npm install

# Plug in your own Firebase config in src/firebase.js
# (Realtime Database, security rules permissive enough to read/write
#  under /rooms/<code>)

npm run dev
```

`npm run build` outputs static files — drop on Vercel/Netlify/GitHub
Pages. You're hosting a Mafia game in 5 minutes.

## Bugs I know about

- 🔄 **Reconnect.** Refresh the page mid-game and you're a ghost.
  Need to rehydrate state from Firebase + reclaim the player slot.
- 👀 **No spectator mode.** If you weren't in when roles were
  dealt, you can't watch.
- 🎤 **No in-app voice.** Open Discord in another tab works fine,
  but built-in WebRTC would be smoother.
- 📜 **No replay log.** *"Wait, the Detective said WHAT on night 2?"*
  is the kind of question this should answer.

## Why

I host Mafia for friends every couple of months. I kept losing track
of state.

Computers don't lose track of state.
