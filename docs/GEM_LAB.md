# Gem Lab · Match-3 + 2048 experiment

[English](GEM_LAB.md) · [Español](GEM_LAB.es.md)

Open `dist/training.html`, also linked from camp. This is a separate prototype; it does not replace the campaign combat and uses its own local save key, `mc-hybrid-training-v1`.

- Merge mode: select two adjacent gems of the same color AND value. The target doubles, up to 2048; the source gets a new value-2 gem.
- Match mode: swap adjacent gems to form a horizontal/vertical line of at least three of the same color. Different values may match.
- Lines formed by either action attack automatically, with gravity, refill and cascades. Damage equals summed gem values times 1/2/3/4 for matches of 3/4/5/6+.
- Matches charge the corresponding soldier. At 100 energy, offensive abilities add training power; the green medic heals squad health. The training simulator removes 6 health per valid move, never below 1, to let players test healing.
- Reshuffle preserves every gem's color and value. Hints apply to the selected mode. Progress, optional sound and Spanish/English UI are included.

This is inspired by 2048 value doubling; it does not use 2048's whole-board swipe controls. It is not the finished enemy battle or the final balance. No mission materials, campaign health or upgrades are changed by training.

Artwork: `dist/assets/galactic-gems.webp`, generated with the built-in image tool. Prompt: original galactic crystal gem sheet, precise 3×2 cells, red fire shield, green healing emerald, electric-blue lightning diamond, violet orbital amethyst and golden command-sun shield; sixth cell blank; faceted translucent crystal, titanium and gold bevels, rich refraction and readable distinct silhouettes; no text or numbers. Gem values and UI are rendered in HTML.

Checks: `node checks/hybrid-check.cjs`, plus the existing campaign/camp/intro checks. Browser and mobile visual review remain pending.

## Controls

Drag a gem toward an adjacent cell with mouse or touch, or click/tap two adjacent gems. Keyboard button activation also uses the click route. Only legal merge/match moves are committed; rule feedback is displayed above the board. Pointer cancellation and releasing outside the board do not move gems.
