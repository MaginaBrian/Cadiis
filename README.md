# CADIIS Website

A Vite + React site for CADIIS (Climate, Actuarial, Data, Inclusion), built from the
company profile and brand guidelines (Forest Ink / Pine / Sage / Brass / Parchment
palette, serif display type, calm wave-curve layout language).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  data/content.js        <- ALL site copy lives here (headings, body text, lists)
  components/            <- one component per section (Hero, WhoWeAre, ServiceSection, ...)
  index.css               <- brand colors, type, and shared styles (CSS variables at :root)
public/
  images/                 <- every image the site uses, referenced as /images/<file>
```

## Editing content

Open `src/data/content.js` — every headline, paragraph, checklist item and card
comes from this one file, so copy changes rarely require touching a component.

## Swapping images

Every image lives in `public/images/` and is referenced by a plain path
(e.g. `/images/hero-topo.png`), so you can replace any file without touching code.

**Section/background images** (larger, one per service):

- `logo.png` — the CADIIS logo (provided asset).
- `hero-topo.png` — hero / contact background (topographic line + dot texture).
- `chart-resilience.png` — actuarial section mini chart card.
- `chart-climate.png` — product architecture section mini chart card.
- `satellite-grid.png` — GIS & Earth observation section card.

**Card icons** (`public/images/icons/`, 48×48 shown above each card title, one per
topic — evidence-first, built-for-use, africa-grounded, end-to-end, agriculture,
livestock, climate-finance, market-diagnosis, business-model, customer-value,
payout-readiness, index-formulation, calibration, documentation,
calculating-agent, feasibility, crop-livestock-index, market-strengthening,
geospatial-analytics, capacity, climate-finance-strategy, insurers, governments,
donors, agribusiness, tech-partners, supervisors). Each is referenced via an
`icon:` field on the matching entry in `src/data/content.js`.

**Scene banners** (`public/images/scenes/`, full-width top-of-card images used
on the GIS & Earth Observation section's Agriculture / Livestock / Climate
finance cards): `agriculture-scene.png`, `livestock-scene.png`,
`climate-finance-scene.png`, referenced via the `image:` field on those cards.

**Note on the current images:** this sandbox environment could not reach external
image hosts (Unsplash, Pexels, etc.) to download free stock photography, so
every image above was custom-built in-brand (Forest Ink/Pine/Sage/Brass,
matching the "Icon and data style" guideline), then rasterized to PNG. To use
real photography instead:

1. Source free-license images (Unsplash, Pexels, Pixabay) of climate maps,
   agriculture, livestock, satellite/fieldwork imagery, per the brand guidelines'
   "Photography and imagery" section.
2. Drop the files into `public/images/` (or `public/images/icons/` for a card
   icon) — keep or update the filename.
3. Update the matching path: the `image` field on a service in `content.js` for
   section images, or the `icon` field on a card object for card icons. Card
   `<img>` tags are rendered at 48×48, so a square crop works best.

Any image can be added, removed, or swapped this way with no other code changes.
If an item has no `icon`/`image` field, its card falls back to the plain gold
rule line.

## Brand tokens (src/index.css)

| Token | Hex |
|---|---|
| Forest Ink | `#102A2A` |
| Pine | `#1F4B43` |
| Sage | `#8FA89A` |
| Brass | `#B08D3C` (accent only) |
| Parchment | `#F3EFE4` |

Typefaces: Playfair Display (headlines), Inter (body), IBM Plex Mono (eyebrows/labels).
# CADIIS

## Look & feel (lively old-money theme)

Same five master colours, plus tints derived from them in `src/index.css`:
`--emerald` (lively pine highlight), `--gold-light` / `--gold-deep` (foil gradient
`--gold-foil`) and `--ivory`. Motion lives in `src/components/Hero.css`,
`Navbar.css`, `src/hooks/useReveal.js` (scroll reveal) and `.foil-text` / `.card`
rules in `index.css`. All motion switches off for `prefers-reduced-motion`.
The hero collage photos are set in `content.js` → `hero.collage`.
`public/images/logo-trim.png` is `logo.png` with its empty margins cropped (used in the nav and footer).
# CAdiis
