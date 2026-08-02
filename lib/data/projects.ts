import type { Project } from "@/types/project";

/* ===========================================================================
 *  Copy sourced from Paul's résumé. Facts (stack, role, audit details) follow
 *  the résumé. Status per Paul: ColabHealth is live in production; Sandbox
 *  Clinic Prime and Drip & Thrive are in development.
 *
 *  COVERS: ColabHealth uses a real screenshot of the live site
 *  (public/projects/colabhealth.png). Sandbox Clinic Prime and Drip & Thrive
 *  use generated gradient covers because they aren't publicly reachable —
 *  drop real screenshots at their imageUrl paths to replace them.
 * ======================================================================== */

export const projects: Project[] = [
  {
    slug: "colabhealth",
    title: "ColabHealth",
    tagline: "Healthcare booking & HMO SaaS for the Philippines",
    description:
      "A production healthcare SaaS for the Philippine market — single and group medical bookings, HMO provider management, and HMO-as-a-payment-method, with an AI chatbot powered by Alibaba DashScope (Qwen-Plus). I built it solo end-to-end and hardened it through a 22-PR security and reliability audit, then shipped it on Vercel with Neon PostgreSQL.",
    overview:
      "ColabHealth is a full-stack SaaS platform for medical-service bookings and HMO management, built for the Philippine healthcare market. I designed and built it solo: single and group booking flows, HMO provider management, HMO-as-a-payment-method, and an AI chatbot powered by Alibaba DashScope (Qwen-Plus) via an OpenAI-compatible SDK. I also ran a 22-PR, multi-wave security and reliability audit covering concurrency, transaction safety, rate limiting, login circuit breakers, and role-based access control. It's deployed on Vercel with Neon PostgreSQL (AWS Singapore), with a planned migration to Alibaba ApsaraDB RDS for production compliance.",
    highlights: [
      "Single and group booking flows with HMO provider management and HMO-as-a-payment-method.",
      "AI chatbot powered by Alibaba DashScope (Qwen-Plus) via an OpenAI-compatible SDK.",
      "22-PR security & reliability audit: concurrency, transaction safety, rate limiting, login circuit breakers, and RBAC hardening.",
      "Deployed on Vercel with Neon PostgreSQL (AWS Singapore); planned migration to Alibaba ApsaraDB RDS.",
      "TypeScript strict mode, zero ESLint violations, and Lighthouse 90+ scores throughout.",
    ],
    role: "Solo full-stack developer & AI integration engineer",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL (Neon)",
      "Auth.js v5",
      "TailwindCSS",
      "Zod",
      "Alibaba DashScope",
      "Vercel",
    ],
    status: "production",
    liveUrl: "https://colabhealth.ph",
    imageUrl: "/projects/colabhealth.png",
    accent: { from: "#2dd4bf", to: "#0ea5e9" },
    timeframe: "2026",
  },
  {
    slug: "sandbox-clinic",
    title: "Sandbox Clinic Prime",
    tagline: "Clinic operations platform — bookings, scheduling & payments",
    description:
      "A complete clinic-operations system for Sapphire Clinic Prime, Inc. spanning two branches, pairing a mobile-first marketing site with a full admin panel. It handles appointment booking, doctor management, shift/decking scheduling, an HMO application workflow, and a payment tracker with CSV export — all secured with Auth.js v5 RBAC, audit logging, and hardened server actions.",
    overview:
      "Sandbox Clinic Prime is a complete clinic-management system built for Sapphire Clinic Prime, Inc., covering two branches in the Philippines. It pairs a mobile-first, brand-matched, Lighthouse-optimized marketing landing page with a full admin operations panel: appointment booking management, doctor management, shift/decking scheduling, an HMO application workflow (Approve / Disapprove / Pending), and a payment tracker with CSV export. Under the hood it uses Auth.js v5 RBAC, audit logging, soft-delete guards, and hardened server actions, with a Prisma data model and deployment manifests for Vercel and Alibaba Cloud.",
    highlights: [
      "Public marketing landing page — mobile-first, brand-matched, and Lighthouse-optimized.",
      "Admin operations panel: booking management, doctor management, and shift/decking scheduling.",
      "HMO application workflow (Approve / Disapprove / Pending) and a payment tracker with CSV export.",
      "Auth.js v5 RBAC, audit logging, soft-delete guards, and hardened server actions.",
      "Prisma data model with deployment manifests for Vercel and Alibaba Cloud.",
    ],
    role: "Solo developer",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js v5",
      "TailwindCSS",
      "shadcn/ui",
      "Zod",
      "Vercel",
      "Alibaba Cloud",
    ],
    status: "in-development",
    imageUrl: "/projects/sandbox-clinic.svg",
    accent: { from: "#818cf8", to: "#6366f1" },
    timeframe: "2026",
  },
  {
    slug: "drip-and-thrive",
    title: "Drip & Thrive",
    tagline: "Embeddable assessment widget for wellness clinics",
    description:
      "A portable, embeddable widget for wellness clinics. A conversational quiz engine runs a multi-step medical-safety assessment, flags risks, recommends a personalized protocol, and captures the lead — shipped as a zero-dependency, drop-in artifact that can be rapidly reskinned for different clinic brands.",
    overview:
      "Drip & Thrive is a portable, embeddable frontend widget for wellness clinics. It runs a conversational quiz engine with medical-safety screening and protocol-routing logic: a multi-step assessment detects medical flags, recommends a personalized protocol, and captures the lead. It's built as a zero-dependency, drop-in artifact with a documented generation prompt, so it can be rapidly reskinned for different clinic brands.",
    highlights: [
      "Conversational quiz engine with multi-step medical-safety screening.",
      "Flow: assessment → medical-flag detection → personalized protocol → lead capture.",
      "Zero-dependency, drop-in widget that embeds into any site.",
      "Documented generation prompt enables rapid reskinning across clinic brands.",
    ],
    role: "Solo developer",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Embeddable Widget Architecture",
    ],
    status: "in-development",
    imageUrl: "/projects/drip-and-thrive.svg",
    accent: { from: "#10b981", to: "#22d3ee" },
    timeframe: "2026",
  },
];

/** Lookup by slug — used by the detail route and generateStaticParams. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectSlugs = projects.map((project) => project.slug);
