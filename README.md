# Mafia

The party game, but on the web. No more "everyone close your eyes"
when half the room is on Zoom.

## What it is

A multiplayer Mafia (a.k.a. Werewolf) game room. One player creates a
room, shares the code, everyone joins on their phone. The game runs the
narrator script, hands out roles, and tracks day/night phases without
anyone needing to be the all-knowing GM.

## Stack

React + Vite for the UI · Firebase Realtime Database for the
"everyone-sees-the-same-state" magic.

That's it. No backend you have to host.

## Roles included

The classics — Mafia, Detective, Doctor, Civilian — plus optional
spice you can toggle when creating the room. Add more in
`MafiaGame.jsx` if you want; the role system is data-driven.

## Setup

```bash
git clone https://github.com/Muazz4502/Mafia-Website.git
cd Mafia-Website
npm install

# Plug in your own Firebase project's config in src/firebase.js
# (Realtime Database, security rules permissive enough to read/write
# under /rooms/<code>)

npm run dev
```

Deploy `npm run build` output anywhere static — Vercel, Netlify, GitHub
Pages — and you're hosting a Mafia game.

## Why

Hosting Mafia for friends, the human GM kept forgetting whose turn it
was. Computers don't forget.

## Things that could be better

- No spectator mode (yet).
- No reconnect handling — refresh the page and you're out of the round.
- Voice/text chat is "open another tab and use Discord".
