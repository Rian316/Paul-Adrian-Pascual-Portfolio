# Paul Adrian O. Pascual — Portfolio

Personal portfolio for **Paul Adrian O. Pascual**, an AI-Driven Full-Stack Developer based in the Philippines. A fast, static (SSG) landing page — no database, no CMS, no auth. All content lives in typed data files under [`lib/data/`](lib/data).

**Live:** [paul-adrian-pascual-portfolio.vercel.app](https://paul-adrian-pascual-portfolio.vercel.app)

## Features

- Premium, recruiter-friendly landing page design
- Technical visualization (dependency graph) in hero
- Project case studies with problem/solution/architecture
- Capability cards with technology reveal on hover
- Engineering approach process timeline
- Light/dark/system theme
- Fully responsive (mobile → desktop)
- Accessible (WCAG principles, reduced motion)
- SEO optimized (metadata, OG, Twitter, sitemap, structured data)
- Static generation for maximum performance

## Tech Stack

- **Next.js 15** (App Router, React Server Components, SSG)
- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first config, custom design tokens)
- **Framer Motion** — scroll reveals, hero entrance, page transitions
- **Lucide + react-icons** — UI glyphs and brand marks
- **next-themes** — light/dark/system theme
- **ESLint + Prettier**

## Getting Started

Requires **Node.js 18.18+**.

```bash
npm install
npm run dev          # http://localhost:3000
```

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript type check |
| `npm run format` | Format with Prettier |

## Project Structure

```
app/                    App Router routes
  page.tsx              Home page
  work/                 Project listing + detail
  about/                About page
  contact/              Contact page
components/             Feature-based components
  home/                 Hero, capabilities, tech stack, engineering approach
  layout/               Navbar, footer, containers
  projects/             Project cards, detail, grid
  ui/                   Reusable primitives (button, badge, card, reveal)
lib/
  data/                 Content data (projects, capabilities, about, social)
  site.ts               Site config and SEO
types/                  TypeScript interfaces
public/projects/        Project cover images
docs/                   Documentation
```

## Content Management

All content is data-driven. Edit files in `lib/data/`:

- **Projects:** `projects.ts` — add/edit project case studies
- **Capabilities:** `capabilities.ts` — skill categories
- **Experience:** `about.ts` — timeline, education, certifications
- **Social:** `social.ts` — contact links
- **Site config:** `site.ts` — name, role, SEO, navigation

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel dashboard](https://vercel.com/new)
3. Add `NEXT_PUBLIC_SITE_URL` environment variable
4. Deploy

### Self-Hosted

```bash
npm ci && npm run build
npm start
```

## Documentation

See [`docs/PORTFOLIO_DOCUMENTATION.md`](docs/PORTFOLIO_DOCUMENTATION.md) for complete documentation including design system, accessibility checklist, and SEO audit.

## License

© Paul Adrian O. Pascual. All rights reserved.
