# Changelog

All notable changes to the Paul Adrian O. Pascual portfolio. This project
follows [Semantic Versioning](https://semver.org/).

## [1.0.0] — 2026-08-02

### Highlights

- **Complete ground-up rebuild** of the portfolio with an improved architecture, preserving **all original content** (projects, tech stack, bio, education, certifications, social links, resume, SEO copy).
- Tech stack evolved: added **Framer Motion**, **Lucide**, **next-themes**, and **shadcn/ui conventions** on top of Next.js 15 / React 19 / TypeScript / Tailwind v4.
- Upgraded `next` from `15.5.19` → `15.5.22` (security patches) and pinned patched `postcss` + `sharp` via npm `overrides` — **0 known vulnerabilities** (`npm audit` clean).

### Added

- **Dark / light / system theme** with `next-themes`, tokenized in `globals.css`, no-FOUC.
- **Framer Motion** animations: hero staggered entrance, scroll-reveal wrapper (`Reveal`), per-navigation page fade (`template.tsx`), animated mobile menu, theme-toggle icon morph.
- **Scroll progress bar** + **back-to-top** button.
- **Active-section highlighting** in the nav via `useScrollSpy` + `aria-current` (home sections map to nav items).
- **Skeleton loaders** on route load (`app/loading.tsx`) and on project cover images.
- **Error boundary** (`app/error.tsx`) and **404 page** (`app/not-found.tsx`); unknown project slugs now return a real static `404` (`dynamicParams = false`).
- **Web app manifest** (`app/manifest.ts`), **favicon** (`app/icon.svg`), **apple touch icon**.
- **Copy-to-clipboard** button on the contact page with `aria-live` feedback.
- **Capabilities section** (`lib/data/capabilities.ts`) — 3 cards matching the original pitch.
- **Stats band** derived from résumé facts (3 platforms, 22-PR audit, GWA 1.50, GMT+8).
- Better **project cards**: status badges, per-project gradient accent, tech chips, hover lift + arrow.
- Rebuilt **project detail pages** with sticky meta card, live/source CTAs, highlights, tech stack.
- New **project cover assets**: gradient SVG covers for Sandbox Clinic Prime and Drip & Thrive, a generated placeholder PNG for ColabHealth, plus a valid placeholder **resume PDF** (`public/Paul-Adrian-Pascual-Resume.pdf`) to drop a real one in place of.

### Changed

- **Design system**: single tokenized teal theme → dual light/dark token system; systematic typography (display/sans/mono via `next/font`); consistent spacing scale via `Container`/`Section`.
- **UI primitives** now follow shadcn conventions: `Button`/`ButtonLink` (CVA variants), `Badge`, `Card`, `Skeleton`, `SectionHeading` — no duplicated inline styles.
- **Icons**: `lucide-react` for UI glyphs; `react-icons` (simple-icons) kept for tech/social brand marks (Lucide has no brand set); removed `SiOpenai` (dropped from react-icons) in favor of a neutral Lucide glyph.
- **Layout**: navbar became a glass sticky header with animated underline, mobile drawer with scroll lock + `aria-expanded`/`aria-controls`, and a resume button on all viewports.
- **SEO**: kept sitemap/robots/OG-image; added per-project metadata, canonical URLs, and richer `themeColor` + `color-scheme` viewport handling.
- **Accessibility**: skip link retained; every Framer Motion animation respects `prefers-reduced-motion`; **no-JS safety restored** — animations are gated behind a `.js` class set before paint (content is never blanked for crawlers/no-JS visitors).

### Fixed

- Unknown `/work/[slug]` returned HTTP 200 → now returns a genuine static **404**.
- Original `react-icons/lu`/`react-icons/si` icon-name issues (`LuBot`, no `SiOpenai`).
- Triple-slash reference lint error on generated `next-env.d.ts` (ignored in ESLint).

### Security

- Bumped `next` to a patched minor; forced `postcss >= 8.5.18` and `sharp >= 0.35` via `overrides`; `npm audit` reports **0 vulnerabilities**.
- `vercel.json` security headers (nosniff, frame-deny, referrer policy, permissions policy, sandboxed CSP for `/projects/*`).

### Notes

- Git is not installed in the build environment, so this release is delivered as one logical changeset rather than commit-by-commit; the change set above mirrors the logical commit grouping.
- The ColabHealth cover is a generated **placeholder** — replace `public/projects/colabhealth.png` with the real screenshot.
- The resume is a **placeholder PDF** — replace `public/Paul-Adrian-Pascual-Resume.pdf` with the real résumé.
