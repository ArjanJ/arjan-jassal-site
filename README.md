# Arjan Jassal

My personal website: two sentences on an empty page, in black and white.

## How it works
- `index.pug` is the only page. `includes/head.pug` holds the meta tags and an inline script that sets the theme (`<html data-theme>`) before first paint, so there's no flash.
- `styles/index.scss` is the whole look. The theme toggle is isolated in `includes/theme-toggle.pug` and `styles/theme-toggle.scss`.
- Type is Geist (sentences) and Geist Mono (caption), self-hosted from `fonts/` (SIL Open Font License, `fonts/OFL.txt`) and defined in `styles/fonts.scss`.
- The sentences fade in on load. `scripts/decode.js` runs the hover/focus caption that decodes each link's destination. `scripts/theme.js` wires the light/dark toggle (system default, remembered choice).
- Everything respects `prefers-reduced-motion`.

## Build
Parcel 1 compiles Pug, SCSS and JS with no config: `npm install`, then `npm run dev` or `npm run build` (output in `dist/`).

## Hosting
Netlify.
