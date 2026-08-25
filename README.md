# kika fyzio · web

Static one-page site for Mgr. Kristína Plesková (physiotherapy, Prague). Built with Astro, no framework, no Tailwind: the design lives in `src/styles/global.css`, content in `src/data/`.

## Commands

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
npx astro check    # type check
```

## Where things live

- `src/data/site.ts` – phone, e-mail, addresses, IČO, section toggles (`showPricing`, `showTestimonials`), availability chip text.
- `src/data/content.ts` – places, focus areas (body map), process steps, bio, courses, prices, testimonials, FAQ.
- `src/components/*.astro` – one component per section, in page order (see `src/pages/index.astro`).
- `src/assets/photos/` – the photos actually used; Astro generates optimized WebP at build time.
- `src/styles/global.css` – tokens (colours, radii, fonts) and all section styles.
- `public/favicon.svg` – the terracotta "k" square.

## Before going live

- Replace every `[…]` placeholder in `src/data/` (addresses, prices, testimonials, IČO).
- Set `site` in `astro.config.mjs` to the final domain (enables canonical + OG URLs).
- Confirm the availability chip wording or set `availabilityChip` to `null`.
- Add an OG image (`public/og.jpg`, 1200×630) and reference it in `src/layouts/Base.astro`.
- Confirm photo consent for the client photos used on the page.

Source photos (all of them, unoptimized) are in `photos/`; only the ones in `src/assets/photos/` are used by the site.
