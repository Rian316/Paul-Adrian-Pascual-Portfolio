import { projects } from "@/lib/data/projects";

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
  role: "AI-Driven Full-Stack Developer",
  /** Hero headline — leads with value, keyword-rich for SEO + hiring. */
  heroHeadline: "I build production-ready software powered by AI.",
  /** Hero subheadline — the specifics that back the headline. */
  heroSub:
    "AI-Driven Full-Stack Developer specializing in cloud applications, SaaS platforms, and AI-powered solutions. Experienced in Next.js, React, TypeScript, Node.js, Prisma, PostgreSQL, Alibaba Cloud, and modern AI-assisted development workflows.",
  availability: "Open to senior roles & freelance",
  location: "Quezon City, Philippines",
  timezone: "GMT+8",
  company: "Phil Capital Trading Solution Inc.",
  /** Hero professional-identity badge (title · focus · location). */
  heroBadge: {
    title: "Full-Stack Developer",
    focus: "Cloud · SaaS · AI",
    location: "Philippines (GMT+8)",
  },
  /** Résumé PDF served from /public. */
  resumeUrl: "/Paul-Adrian-Pascual-Resume.pdf",
  url: siteUrl,
  /** SEO title — front-loads discovery keywords, name second. */
  seoTitle:
    "Paul Adrian Pascual — Full-Stack Developer · AI Engineer · Cloud & SaaS",
  /** Reused as the default meta description. */
  description:
    "AI-Driven Full-Stack Developer from the Philippines building production SaaS platforms with Next.js, TypeScript, PostgreSQL, Alibaba Cloud, and AI integrations. Open to senior remote roles & freelance.",
  keywords: [
    "Full-Stack Developer Philippines",
    "AI Integration Engineer",
    "Next.js Developer",
    "Cloud Engineer",
    "SaaS Developer",
    "TypeScript",
    "LLM integration",
    "Alibaba Cloud",
    "Vercel",
    "PostgreSQL",
    "Prisma ORM",
    "Paul Adrian Pascual",
    "remote developer",
    "healthcare SaaS",
    "AI-powered applications",
  ],
  navItems: [
    { href: "/", label: "Home" },
    { href: "/#work", label: "Work" },
    { href: "/#capabilities", label: "Capabilities" },
    { href: "/#experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Stats surfaced in the hero stats band. */
export const stats = [
  {
    value: String(projects.length),
    label: "Platforms built end-to-end",
  },
  {
    value: "AI-Driven",
    label: "Software Development",
  },
  {
    value: "Full-Stack",
    label: "End-to-End Solutions",
  },
  {
    value: "GMT+8",
    label: "Based in Quezon City, PH",
  },
] as const;
