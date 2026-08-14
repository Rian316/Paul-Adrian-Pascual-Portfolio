# Portfolio Documentation

## 1. Project Overview

This is a static personal portfolio and landing page for Paul Adrian O. Pascual — an AI-Driven Full-Stack Developer based in the Philippines. It is designed to communicate technical credibility to recruiters, engineering managers, and startup founders within 30–60 seconds.

**Purpose:** Showcase projects, skills, and experience in a premium, fast, accessible format.

**Target audience:** Technical recruiters, engineering managers, startup founders.

**Design philosophy:** Technical, editorial, precise, modern, human, subtle, premium. Not generic. Not flashy. Not a template.

---

## 2. Goals

- **Recruiter clarity:** Who is Paul? What does he build? What technologies? How to contact?
- **Technical credibility:** Real projects, real technologies, real architecture decisions.
- **Performance:** Static site, fast load, minimal client JavaScript.
- **Accessibility:** WCAG principles, keyboard navigation, reduced motion support.
- **SEO:** Metadata, OpenGraph, Twitter cards, sitemap, structured data.
- **Maintainability:** Data-driven content, typed data files, clear component structure.

---

## 3. Technology Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 |
| Theme | next-themes (class-based) |
| Icons | react-icons (Simple Icons) + Lucide React |
| Utilities | class-variance-authority (CVA), clsx, tailwind-merge |
| Deployment | Vercel |

---

## 4. Architecture

- **App Router:** File-based routing with `app/` directory.
- **Server Components:** Default for all pages (static generation).
- **Client Components:** Used only where interactivity is needed (navbar, hero animations, theme toggle).
- **Static Generation:** All pages are pre-rendered at build time.
- **Data Files:** Content is centralized in `lib/data/` TypeScript files.

---

## 5. Directory Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout (fonts, metadata, providers)
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   ├── work/               # Work listing and detail pages
│   │   ├── page.tsx        # Project listing
│   │   └── [slug]/page.tsx # Project detail
│   ├── globals.css         # Design tokens and utilities
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   └── opengraph-image.tsx # Programmatic OG image
├── components/
│   ├── home/               # Home page sections
│   │   ├── hero.tsx        # Hero section with technical graph
│   │   ├── technical-graph.tsx  # SVG dependency visualization
│   │   ├── capabilities.tsx     # Capability cards with tech reveal
│   │   ├── engineering-approach.tsx  # Engineering process timeline
│   │   ├── experience-snapshot.tsx   # Work experience cards
│   │   ├── professional-highlights.tsx # Credential cards
│   │   ├── bento-about.tsx      # About bento grid
│   │   ├── stats-band.tsx       # Numeric credibility strip
│   │   └── tech-stack.tsx       # Categorized tech stack
│   ├── layout/             # Shared layout components
│   │   ├── navbar.tsx      # Sticky navigation with scroll behavior
│   │   ├── footer.tsx      # Site footer
│   │   ├── section.tsx     # Section wrapper
│   │   └── container.tsx   # Page-width container
│   ├── projects/           # Project-related components
│   │   ├── project-card.tsx    # Project listing card
│   │   ├── project-detail.tsx  # Project case study page
│   │   └── project-grid.tsx    # Responsive project grid
│   ├── contact/            # Contact components
│   │   └── cta-band.tsx    # Closing CTA section
│   ├── ui/                 # Reusable UI primitives
│   │   ├── button.tsx      # Button variants
│   │   ├── badge.tsx       # Status badges
│   │   ├── card.tsx        # Card components
│   │   ├── section-heading.tsx # Section headers
│   │   └── reveal.tsx      # Scroll-triggered reveal
│   └── theme/
│       └── theme-toggle.tsx # Light/dark toggle
├── lib/
│   ├── data/               # All content data
│   │   ├── projects.ts     # Project data with case studies
│   │   ├── capabilities.ts # Capability definitions
│   │   ├── highlights.ts   # Professional highlights
│   │   ├── about.ts        # Bio, education, timeline, certifications
│   │   ├── social.ts       # Social links and contact info
│   │   └── tech-stack.ts   # Categorized technology list
│   ├── site.ts             # Site-wide config and SEO
│   └── utils.ts            # Utility functions
├── types/
│   ├── project.ts          # Project type definition
│   ├── about.ts            # Education, timeline, certification types
│   └── social.ts           # Social link types
├── public/
│   ├── projects/           # Project cover images
│   └── *.pdf               # Resume PDF
├── docs/
│   └── PORTFOLIO_DOCUMENTATION.md
└── README.md
```

---

## 6. Design System

### Typography

- **Display:** Space Grotesk (headings, section titles)
- **Body:** Inter (paragraphs, UI text)
- **Mono:** JetBrains Mono (code, technology labels, metadata)

### Color System

Light theme:
- Background: `#f7f8fa` (cool near-white)
- Surface: `#ffffff`
- Accent: `#0f766e` (teal-700)
- Foreground: `#0f1729` (slate-950)

Dark theme:
- Background: `#0b1120` (deep slate)
- Surface: `#111a2c`
- Accent: `#14b8a6` (teal-500)
- Foreground: `#e2e8f0` (slate-200)

### Spacing

Consistent spacing using Tailwind's default scale. Section padding: `py-20` to `py-28`. Component gaps: `gap-4` to `gap-6`.

### Buttons

CVA-based with 5 variants: default (accent fill), secondary, outline, ghost, link. 4 sizes: default, sm, lg, icon.

### Cards

Glass morphism cards with `backdrop-filter: blur(24px)`. Solid border cards for project listings.

---

## 7. Motion System

### Animation Principles

- Staggered entrance on page load (hero)
- Scroll-triggered reveals on sections
- Subtle hover interactions on cards and buttons
- Technical graph node/edge animation
- Respect `prefers-reduced-motion`

### Durations

- Hero entrance: 600ms with 0.09s stagger
- Scroll reveals: 400ms
- Hover transitions: 200-300ms
- Navigation transitions: 250ms

### Framer Motion Usage

- `motion.div` for animated containers
- `useReducedMotion()` for accessibility
- `whileInView` for scroll triggers
- `layoutId` for navigation active indicator

---

## 8. Page Structure (Home)

1. **Navigation** — Sticky glass header with scroll behavior
2. **Hero** — Title, description, CTAs, social links, technical graph, credibility strip
3. **Stats Band** — Numeric credibility (project count, AI-Driven, Full-Stack, GMT+8)
4. **Selected Work** — Project grid with case-study cards
5. **Capabilities** — 6 capability cards with tech reveal on hover
6. **Engineering Approach** — 6-step process timeline
7. **Experience** — Work history cards
8. **Technology Stack** — Categorized tech list with pills
9. **Highlights** — Credential and certification cards
10. **About** — Bento grid with bio, education, location, social
11. **Contact CTA** — Closing section with email, LinkedIn, GitHub

---

## 9. Project Data Model

Each project in `lib/data/projects.ts` includes:

| Field | Type | Description |
|-------|------|-------------|
| slug | string | URL segment |
| title | string | Display name |
| tagline | string | One-line hook |
| description | string | 1-2 sentence summary |
| overview | string | Longer narrative |
| highlights | string[] | Key features |
| role | string | What Paul did |
| techStack | string[] | Technologies used |
| status | "production" \| "in-development" \| "for-deployment" | Current state |
| liveUrl | string? | Live demo URL |
| repoUrl | string? | GitHub repository |
| imageUrl | string | Cover image path |
| accent | { from, to } | Gradient colors |
| timeframe | string | Year |
| purpose | string? | Quick purpose |
| problem | string? | Case study: problem |
| solution | string? | Case study: solution |
| architecture | string? | Case study: architecture |
| challenges | string? | Case study: challenges |
| security | string? | Case study: security |
| deployment | string? | Case study: deployment |
| outcome | string? | Case study: outcome |

---

## 10. Content Management

### Updating Projects

Edit `lib/data/projects.ts`. Add or modify project objects in the `projects` array. Each project follows the `Project` type from `types/project.ts`.

### Updating Experience

Edit `lib/data/about.ts`. Modify the `timeline` array for work experience, `education` for academic background, and `certifications` for credentials.

### Updating Skills

Edit `lib/data/tech-stack.ts` for the categorized tech stack. Edit `lib/data/capabilities.ts` for capability cards.

### Updating Social Links

Edit `lib/data/social.ts`. Modify the `socialLinks` array and exported constants (`EMAIL`, `PHONE_DISPLAY`, `PHONE_TEL`).

### Updating Site Config

Edit `lib/site.ts`. Contains site name, role, SEO metadata, navigation items, and stats.

---

## 11. SEO

- **Metadata API:** Used in `app/layout.tsx` for site-wide defaults
- **Title templates:** `%s · Paul Pascual` pattern
- **OpenGraph:** Full metadata with images
- **Twitter cards:** Summary large image
- **Sitemap:** Dynamic from `app/sitemap.ts`
- **Robots:** Allows all crawlers
- **Structured data:** Person JSON-LD on home page
- **Canonical URLs:** Set via `metadata.alternates`

---

## 12. Accessibility

- Semantic HTML throughout
- Keyboard navigation with visible focus states
- `aria-label` on interactive elements
- `aria-hidden` on decorative icons
- `prefers-reduced-motion` support
- Skip-to-content link
- Sufficient color contrast (WCAG AA)
- Meaningful alt text on images
- Screen reader friendly navigation

---

## 13. Performance

- **Static generation:** All pages pre-rendered at build time
- **Server Components:** Default rendering strategy
- **Client Components:** Only for interactive elements (navbar, hero, theme toggle)
- **Image optimization:** Next.js Image with responsive sizing
- **Font optimization:** Google Fonts with `display: swap`
- **Minimal JS:** Only Framer Motion and necessary client code
- **Lazy loading:** Below-fold content loads on demand

---

## 14. Responsive Design

| Breakpoint | Behavior |
|-----------|----------|
| 320px-414px | Mobile: stacked layout, hamburger menu, full-width cards |
| 768px | Tablet: 2-column grids, side-by-side layouts |
| 1024px | Desktop: full navigation, 3-column grids |
| 1280px+ | Large desktop: max-width container, technical graph visible |

---

## 15. Deployment

### Local Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Vercel Deployment

Push to `main` branch. Vercel auto-deploys with zero configuration.

### Environment Variables

- `NEXT_PUBLIC_SITE_URL` — Override canonical URL (optional)

---

## 16. Development Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix lint issues
npm run typecheck    # TypeScript type checking
npm run format       # Format with Prettier
npm run format:check # Check formatting
```

---

## 17. Adding a Project

1. Add cover image to `public/projects/` (SVG or PNG, 1600x900 recommended)
2. Add project object to `lib/data/projects.ts`
3. Include case study fields (problem, solution, architecture, etc.)
4. Set `status` appropriately
5. Add `liveUrl` and/or `repoUrl` if available
6. Run `npm run build` to verify

---

## 18. Updating Experience

Edit `lib/data/about.ts`:

```typescript
export const timeline: TimelineEntry[] = [
  {
    role: "Your Role",
    org: "Company Name",
    period: "Start — End",
    description: "What you did.",
    current: true, // if currently working there
  },
];
```

---

## 19. Updating Skills

Edit `lib/data/tech-stack.ts` for the categorized list. Each category has:

```typescript
{
  category: "Category Name",
  caption: "Description",
  items: [
    { name: "Technology", icon: IconComponent, note: "Optional note" },
  ],
}
```

---

## 20. Updating Resume

1. Replace `public/Paul-Adrian-Pascual-Resume.pdf` with new PDF
2. The link is configured in `lib/site.ts` as `resumeUrl: "/Paul-Adrian-Pascual-Resume.pdf"`

---

## 21. Adding Images

- **Location:** `public/projects/`
- **Naming:** `project-name.svg` or `project-name.png`
- **Recommended dimensions:** 1600x900 (16:9)
- **Format:** SVG preferred, PNG/JPEG acceptable
- **Alt text:** Set in the `ProjectCover` component

---

## 22. Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] aria-labels on interactive elements
- [ ] Reduced motion respected
- [ ] Color contrast AA compliant
- [ ] Alt text on all images
- [ ] Skip-to-content link present
- [ ] Screen reader tested

---

## 23. SEO Checklist

- [ ] Title tag unique and descriptive
- [ ] Meta description present
- [ ] Canonical URL set
- [ ] OpenGraph tags complete
- [ ] Twitter cards working
- [ ] Sitemap generated
- [ ] Robots.txt allows crawling
- [ ] Structured data valid
- [ ] Favicon present
- [ ] Theme color set

---

## 24. Pre-Deployment Checklist

- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] All links work (internal + external)
- [ ] Resume PDF downloads correctly
- [ ] Dark mode works
- [ ] Light mode works
- [ ] Mobile navigation works
- [ ] 404 page works
- [ ] No console errors

---

## 25. Known Limitations

This is intentionally a **static portfolio**. It does NOT support:

- CMS integration
- Authentication
- Database
- Admin dashboard
- Dynamic content management
- Blog (without code changes)
- Analytics (without third-party integration)

Content updates require editing TypeScript data files and redeploying.

---

## 26. Future Improvements

- Real project screenshots (replace SVG placeholders)
- Custom domain
- Analytics integration (Vercel Analytics, Plausible)
- Blog section for engineering posts
- More detailed case studies
- Interactive project demos
- Multi-language support

---

## 27. Repository Quality

- Clean directory structure
- Typed data files
- Consistent component patterns
- No secrets or environment leaks
- Professional README
- Comprehensive documentation
- No unnecessary dependencies
- No dead UI elements
