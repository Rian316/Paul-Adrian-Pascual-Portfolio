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
  role: "Full-Stack Developer",
  heroHeadline: "I build production-ready software with modern web technologies.",
  heroSub:
    "Full-Stack Developer specializing in cloud applications, SaaS platforms, and AI-powered solutions. Experienced in Next.js, React, TypeScript, Node.js, Prisma, PostgreSQL, Alibaba Cloud, and modern AI-assisted development workflows.",
  availability: "Open to remote roles & freelance",
  location: "Quezon City, Philippines",
  timezone: "GMT+8",
  company: "Phil Capital Trading Solution Inc.",
  heroBadge: {
    title: "Full-Stack Developer",
    focus: "Cloud · SaaS · AI",
    location: "Philippines (GMT+8)",
  },
  resumeUrl: "/Paul-Adrian-Pascual-Resume.pdf",
  url: siteUrl,
  seoTitle:
    "Paul Adrian Pascual — Full-Stack Developer · Next.js · TypeScript · Cloud",
  description:
    "Full-Stack Developer from the Philippines building SaaS platforms with Next.js, TypeScript, PostgreSQL, Alibaba Cloud, and AI integrations. Open to remote roles & freelance.",
  keywords: [
    "Full-Stack Developer Philippines",
    "Next.js Developer",
    "TypeScript Developer",
    "Cloud Engineer",
    "SaaS Developer",
    "React Developer",
    "Prisma ORM",
    "PostgreSQL",
    "Alibaba Cloud",
    "Vercel",
    "Paul Adrian Pascual",
    "remote developer",
    "healthcare SaaS",
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

export const stats = [
  {
    value: String(projects.length),
    label: "Projects built",
  },
  {
    value: "3+",
    label: "Years of development",
  },
  {
    value: "GMT+8",
    label: "Quezon City, PH",
  },
] as const;
