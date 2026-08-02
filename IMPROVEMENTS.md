# Improvements

This document records the deliberate **improvements** made during the rebuild
relative to the original portfolio, plus a **performance summary** and a
roadmap of further enhancements. Content was preserved; craft was not.

## Architecture

| Area          | Before                                    | After                                                                                                                      |
| ------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Rendering     | Mixed, components pasted ad hoc           | **All routes statically prerendered (SSG)**; `dynamicParams = false` for `[slug]`                                          |
| Components    | Flat, duplicated inline styles            | Feature-co-located folders (`layout/`, `ui/`, `home/`, `about/`, `projects/`, `contact/`) + shared shadcn-style primitives |
| Theming       | Single fixed colorway                     | **Light + dark + system** via CSS token variables in one file (`globals.css`)                                              |
| Design tokens | Scattered hex values                      | Named tokens (`bg`, `foreground`, `muted`, `border`, `ring`, `accent`) in `:root` / `.dark`                                |
| Motion        | CSS-only / none                           | Framer Motion, **reduced-motion aware**, no-JS-safe (`.js` gate)                                                           |
| Iconography   | `react-icons/lu` + `react-icons/si` mixed | `lucide-react` for UI, `react-icons` (simple-icons) only for brand marks                                                   |
| Content       | In data files, typed loosely              | Strictly typed (`types/`), single-source (`lib/data/`, `lib/site.ts`)                                                      |
| Utilities     | Inline `className` calls                  | `cn()` (`tailwind-merge` + `clsx`) + CVA variants                                                                          |
| Fonts         | System stack                              | Self-hosted `next/font` (Geist/Space Grotesk/Inter), `font-display: swap`                                                  |
| Metadata      | Basic                                     | Full typed `Metadata`, OG image, per-project metadata, manifest, themeColor                                                |
| Errors        | None                                      | `error.tsx`, `not-found.tsx`, route-level `loading.tsx` (skeletons)                                                        |

## Accessibility

- **Skip-to-content** link (first focusable element on every page).
- Semantic landmarks (`header`/`main`/`footer`), single `h1` per page, ordered headings.
- Nav: `aria-current="page"` on the active section, `aria-expanded`/`aria-controls` on the mobile menu, focus trap + scroll lock when open.
- Copy button: `aria-live="polite"` announcement + accessible labels.
- Focus-visible rings throughout; 3:1+ contrast for UI text in both themes (accent on dark is lightened for AA).
- All hover-only affordances have non-hover equivalents (e.g. arrows always visible in nav; `visited` styling).
- **`prefers-reduced-motion`**: the global CSS collapses all CSS animations/transitions, and every Framer Motion component branches to `animate={false}`.

## Performance summary

Baseline expectations for the production build (measured on the local machine):

- **First Load JS ~103 kB** (shared) — Framer Motion (~25 kB) + next-themes + simple-icons bundle make up most of it; acceptable for an SSG personal site, and the browser needs no API/data round-trips.
- **Per-page First Load JS** roughly **169 kB** (home) and **121–129 kB** (inner pages) — static, cacheable, no hydration-heavy third parties.
- **~100% static output**: 15 pages prerendered at build time (3 project detail pages from `generateStaticParams`).
- Images served as modern formats (`avif`/`webp` via `next/image`), with explicit `sizes`, lazy-loading below the fold, `priority` on the hero, and SVG covers where vector is natural.
- No external fonts (self-hosted `next/font`), no tracking scripts, no runtime content fetch.
- `sitemap.xml`, `robots.txt`, manifest, and `opengraph-image` are generated (no manual XML).

### What was measured on a smoke run

- All routes (/, /about, /contact, /work, /work/colabhealth) returned `200`; unknown slug `/work/does-not-exist` returned `404`.
- `sitemap.xml` and resume PDF served with correct content types.
- `npm audit`: **0 vulnerabilities** (with `postcss`/`sharp` overrides).

## Future enhancements (roadmap)

Smaller, _optional_ ideas in roughly increasing effort — none required:

1. **Real asset replacement**: swap `public/projects/colabhealth.png`, the two SVG covers, and `public/Paul-Adrian-Pascual-Resume.pdf` for real screenshots/résumé.
2. **Lightbox for project screenshots** on the `/work/[slug]` page once real images exist.
3. **Astro-metrics**: add [Vercel Analytics](https://vercel.com/analytics) or [Plausible](https://plausible.io) (self-hostable on the ECS box) — privacy-friendly, single script.
4. **`<dialog>` / focus trap hardening** — the mobile drawer and menu use a custom trap; a small `useFocusTrap` hook would formalize it.
5. **Preload critical route data** (`Link` with prefetch already on by default for App Router); consider `link rel="preload"` for the hero image.
6. **Internationalization** is unnecessary today but the data layer already separates content from chrome, so a future `[lang]` split would be low-friction.
7. **Unit tests** with Vitest + Testing Library for the copy button, scroll-spy, and CVA primitives if the project grows.
8. **`prefers-contrast` / `forced-colors`** media queries for high-contrast and print stylesheet for the résumé page.

## Known limitations

- Fonts used are open-source approximations of the original's visual intent (Geist/Space Grotesk for the display, Inter for body); if the original licensed a specific typeface, swap the `next/font` call.
- The site is entirely data-driven and SSG: any content edit requires a redeploy (by design — no CMS).
- `public/` placeholders (ColabHealth cover, résumé) are generated and must be replaced before public launch.
