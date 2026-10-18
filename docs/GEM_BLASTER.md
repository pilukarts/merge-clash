# Gem Blaster launcher prototype

[English](GEM_BLASTER.md) · [Español](GEM_BLASTER.es.md)

Open `dist/launcher.html`, also linked from camp. It is a separate experiment alongside `training.html`, not a replacement for campaign combat.

## Controls

Aim at one of five columns. Click/tap the board or a numbered column button to launch; the Fire button shoots into the aimed column. Drag upward from the current gem to aim and release. Keyboard: focus the board, use Left/Right to aim and Enter/Space to fire. Swap exchanges current and next ammo without rerolling.

## Rules

- Eight ceiling-anchored rows per column. A shot occupies the first available gap below a column's stack.
- When the arriving gem touches an equal number, they merge into twice the value. Numbers determine color, so equal numbers always share a color in this experiment.
- The active gem can keep merging with equal neighbors above, to either side or below. Neighbor priority is above, left, right, below.
- Removing a gem compacts its column toward the ceiling; moving pieces can create another match with the active gem.
- Three or more successive pair merges award a chain bonus. This is a numbered merge-chain mechanic, not the older manual match-3 line mechanic; that earlier experiment remains available.
- Values range from 2 to 65,536. Fusion damage/power charges the corresponding soldier. Charge bars are a demonstration; this page does not implement the final enemy battle or character skills.
- A full column can accept an equal-number shot directly into its bottom gem if the result is within the value cap.
- When neither current nor next ammo can enter any column, practice ends. Reset affects only this launcher.

A first shot in the middle column demonstrates 2 → 4 → 8 → 16. New ammo is selected from a bounded distribution that also favors visible frontier values. There is no timer or timed advancing row in this version.

Rendering includes a landing guide, shot travel, merging pulses, ceiling compaction, energy beams, combo labels and optional synthesized audio. Reduced-motion preference removes the motion. Spanish and English are supported.

Local save: `mc-gem-launcher-v1`. Existing campaign, camp and earlier training saves are not modified. An interrupted animation saves the final resolved shot state when leaving the page.

Check: `node checks/launcher-check.cjs`. Tests cover the starter combo, open gaps, lateral merges, full-column recovery, swap rescue, loss, cap, immutable inputs and 400 legal launches. Browser and mobile visual verification remain pending.
