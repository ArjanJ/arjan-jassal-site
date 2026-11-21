# Arjan Jassal

My personal website: two sentences on an empty page, in black and white mono type.

## How it works
- `index.pug` is the only page. `includes/head.pug` holds the meta tags and an inline script that sets the theme (`<html data-theme>`) before first paint, so there's no flash.
- `styles/index.scss` is the whole look. The theme toggle is isolated in `includes/theme-toggle.pug` and `styles/theme-toggle.scss`.
- `scripts/decode.js` runs the load "decode" sweep and the hover/focus caption that decodes each link's destination. `scripts/theme.js` wires the light/dark toggle (system default, remembered choice).
- Everything respects `prefers-reduced-motion`.

## Build
Parcel 1 compiles Pug, SCSS and JS with no config: `npm install`, then `npm run dev` or `npm run build` (output in `dist/`).

## Hosting
Netlify.
