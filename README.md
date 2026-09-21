# Vecube Website

Bold, editorial paid-media site built with **Astro + TypeScript + Tailwind CSS v4 + React**.
White-dominant magazine layout with square frames, pill buttons and one blue accent moment.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start dev server at `localhost:4321`     |
| `npm run build`   | Build production site to `./dist/`       |
| `npm run preview` | Preview the production build locally     |

## Structure

```
src/
├── components/   Navbar, Hero, ServiceVideo, CTA, Clients,
│                 Services (React island), Work, LeadMagnet, Footer
│                 + MobileNav (React island)
├── layouts/      Layout.astro  (head, fonts, nav + footer shell)
├── pages/        index · about · services · contact
├── data/         content.ts    (all copy + case studies in one file)
└── styles/       global.css    (design tokens via Tailwind @theme)
public/
├── images/  videos/  fonts/    (drop banner image + service video here)
```

## Homepage sections

1. **Hero / Banner** — giant headline + media placeholder
2. **Service Video** — dark 16:9 frame (drop your `<video>` in)
3. **CTA** — the single bold blue moment
4. **Clients** — auto-scrolling logo marquee
5. **Services** — interactive React list with live preview panel
6. **Work** — square case-study cards with stat overlays
7. **Lead Magnet** — deck download + founder note
8. **Bottom tile** — giant sign-off, lives in `Footer.astro`

## Customise

- **Brand colours & fonts** → `src/styles/global.css` (`@theme` block). Swap
  `--color-blue` and `--color-accent` for the official Vecube hex values.
- **Copy, services, case studies** → `src/data/content.ts`.
- **Banner image / video** → add files to `public/images` and `public/videos`,
  then uncomment the `<img>` / add a `<video>` in `Hero.astro` / `ServiceVideo.astro`.
- **Contact form** → wire `src/pages/contact.astro` to your form backend.

## Interactive React islands

Only two components ship JavaScript (everything else is static HTML for speed):

- `Services.tsx` — hover/click to switch the live service preview (`client:visible`)
- `MobileNav.tsx` — mobile menu toggle (`client:load`)
