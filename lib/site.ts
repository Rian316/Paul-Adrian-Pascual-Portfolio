/**
 * Single source of truth for site-wide identity and SEO.
 *
 * Canonical/OG/sitemap use `siteUrl`. It's pinned to the live Vercel URL so
 * those tags resolve correctly; override with `NEXT_PUBLIC_SITE_URL` if a
 * custom domain is added later.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://paul-adrian-pascual-portfolio.vercel.app"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Paul Adrian O. Pascual",
  shortName: "Paul Pascual",
  role: "Full-Stack Developer & AI Integration Engineer",
  /** Hero headline — leads with value, keyword-rich for SEO + hiring. */
  heroHeadline: "I build AI-integrated SaaS and ship it to production.",
  /** Hero subheadline — the specifics that back the headline. */
  heroSub:
    "Solo, end to end — production platforms in healthcare & clinic operations: booking, HMO management, payments, and LLM-powered intake. Next.js · TypeScript · Prisma.",
  availability: "Open to senior roles & freelance",
  location: "Quezon City, Philippines",
  timezone: "GMT+8",
  company: "Phil Capital Trading Solution Inc.",
  companyRole: "AI Associate",
  /** Résumé PDF served from /public. */
  resumeUrl: "/Paul-Adrian-Pascual-Resume.pdf",
  url: siteUrl,
  /** SEO title — front-loads discovery keywords, name second. */
  seoTitle:
    "Full-Stack & AI Integration Engineer · Next.js & Healthcare SaaS — Paul Adrian Pascual",
  /** Reused as the default meta description. */
  description:
    "Full-stack developer & AI integration engineer (Philippines, GMT+8) building production Next.js SaaS — healthcare booking, HMO, payments, and LLM integrations. Open to senior remote roles & freelance.",
  keywords: [
    "Full-Stack Developer Philippines",
    "AI Integration Engineer",
    "Next.js Developer",
    "Healthcare SaaS Developer",
    "TypeScript",
    "LLM integration",
    "Paul Adrian Pascual",
    "remote developer",
  ],
  navItems: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Stats surfaced in the hero stats band. */
export const stats = [
  {
    value: "2",
    label: "Platforms built end-to-end",
  },
  {
    value: "22",
    label: "PR security & reliability audit",
  },
  {
    value: "1.50",
    label: "College GWA — Cum Laude",
  },
  {
    value: "GMT+8",
    label: "Based in Quezon City, PH",
  },
] as const;
