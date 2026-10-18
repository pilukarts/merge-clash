# Merge Clash · MC

[English](README.md) · [Español](README.es.md)

A Pilukarts galactic strategy and match-3 game. Place five colored soldiers strategically, then activate their movement, attacks and abilities with matches of the corresponding color.

## Crash-site camp

The home screen now includes an illustrated three-scene prologue, five-soldier squad, three-mission route, one-time salvage rewards, a buildable shelter/workshop, and analyzer/communications repairs. Missions connect to the existing match prototype at `dist/battle.html`. The match engine is unchanged. The planned 500-level season is not implemented.

## Current status

This repository contains the first playable prototype as a technical starting point: a 7×7 board, five colors, AI counterattacks, cascades, soldier energy, three match rounds, a final card boss battle, helmet promotion animation, evolution points and local progress. The previous merge lab is available at `dist/merge.html`.

**The strategic arena is not implemented yet.** The current prototype uses panels and turn-based combat; its final card battle does not yet support troop placement or path movement. The design documents record the updated direction rather than claiming those features already exist.

## Game direction

- A galactic 2.5D arena with fortresses, two sides, paths and bridges over energy.
- Five MC soldiers: red cadet, green soldier, blue officer, violet general and gold commander. Intermediate rank names are provisional.
- Strategic squad placement; matches activate movement, attacks and abilities during the battle.
- Match 3: normal; match 4: super; match 5: epic; match 6+: maximum attack (working name: supernova).
- Four rounds per level, a final boss, evolution points and next-level unlocks. Cards will be integrated with the arena and match system.
- Animated helmet evolution after missions.
- Five character stories that teach the game through short tutorial missions.
- Artillery, cannon soldiers and tanks at higher levels.
- Potential NFTs only after validating that players enjoy the game. No wallet, mint or smart contracts are implemented.

Read the [game design](docs/GAME_DESIGN.md) and [roadmap](docs/ROADMAP.md).

## Run locally

No JavaScript dependencies or installation required:

```bash
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. Use **ES / EN** to change language. Progress and language are saved in this browser, not synchronized between devices.

## Check the game logic

Requires Node.js:

```bash
node checks/game-check.cjs
node checks/camp-check.cjs
node --check dist/game.js
node --check dist/engine.js
node --check dist/i18n.js
```

Checks cover playable boards, matches of 3–7, swaps, cascades, a complete campaign, cards, rewards, upgrades, persistence and retries. Mobile layout and animation still need visual review.

## Files

- `dist/index.html`, `camp.css`, `camp.js`, `camp-state.js`: camp and survival progression.
- `dist/battle.html`, `style.css`: preserved battle prototype.
- `dist/engine.js`: match rules.
- `dist/game.js`: campaign, energy and combat.
- `dist/i18n.js`: English/Spanish selector and interface translations.
- `dist/assets/`: generated MC concept artwork, optimized as WebP.
- `dist/merge.html`: previous merge lab.
- `checks/game-check.cjs`: game logic checks.
- `docs/`: bilingual design and next steps.

Independent from `pilukarts/genesis-forge`. This work does not modify that repository. The license file already selected by the repository owner is retained.

## Gem experiment

[Try the separate Match-3 + 2048 lab](docs/GEM_LAB.md). Open `dist/training.html` or use the camp link. The current campaign combat is preserved.

## Upward gem launcher

[Gem Blaster](docs/GEM_BLASTER.md): open `dist/launcher.html` or the camp link to aim upward and merge equal numbers automatically. The earlier board and campaign remain available.
