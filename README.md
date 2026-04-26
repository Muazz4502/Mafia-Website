# Mafia

> The party game, but on the web. No more "everyone close your eyes"
> when half the room is on Zoom.

You've been there. Eight friends, half in the same living room, half
on a video call, somebody is the GM and they keep forgetting whose turn
it is. The Mafia kills the wrong person. The Detective forgets they're
the Detective. The Doctor saves themselves twice in a row.

This is what fixes that.

## How a round goes

```
1. Host clicks "Create room" →  gets a 5-letter code
2. Everyone joins on their phone with the code
3. Tap "Ready"
4. The app deals roles privately
5. Night phase → Mafia picks, Detective investigates, Doctor saves
   (the app handles "close your eyes" — your screen actually dims
   when it's not your turn)
6. Day phase → discussion timer, vote, banishment
7. Repeat until town wins or Mafia wins
```

No GM. No paper. No "wait, did the Detective go yet?"

## Stack

- **React + Vite** for the UI
- **Firebase Realtime Database** for the "everyone-sees-the-same-state"
  magic — every device watches the same `/rooms/<code>` node, state
  changes broadcast in <100ms
- That's it. No backend you have to host. No server bill.

## Roles in the box

| Role | Power |
|---|---|
| Mafia | Picks one player to eliminate each night. Wins when Mafia ≥ Town. |
| Detective | Investigates one player per night → "innocent" or "Mafia." |
| Doctor | Saves one player per night. Yes, can self-save (configurable). |
| Civilian | The 80% that has to figure it out. |

Want more roles (Jester, Vigilante, Bodyguard)? They're data-driven.
Add a row in `MafiaGame.jsx` and they show up in the role selector.

## Spinning it up locally

```bash
git clone https://github.com/Muazz4502/Mafia-Website.git
cd Mafia-Website
npm install

# Drop your own Firebase project's config in src/firebase.js
# (Realtime Database, security rules permissive enough to read/write
# under /rooms/<code>)

npm run dev
```

`npm run build` outputs static files — drop on Vercel/Netlify/GitHub
Pages. You're hosting a Mafia game.

## Things I'd do differently

- **Reconnect.** Refresh the page mid-game and you're a ghost. Need to
  rehydrate state from Firebase + reclaim the player slot.
- **Spectator mode.** Right now if you weren't in when roles were
  dealt, you can't watch.
- **Voice in-app.** Open Discord in another tab works fine, but built-in
  WebRTC would be nicer.
- **Replay log.** "Wait, the Detective said WHAT on night 2?" — should
  be queryable after the game ends.

## Why it exists

I host Mafia for friends every couple of months. I kept losing track
of state. Computers don't lose track of state.
