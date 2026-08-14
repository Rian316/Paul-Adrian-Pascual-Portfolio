import type { Project } from "@/types/project";

/* ===========================================================================
 *  Copy sourced from Paul's résumé. Facts (stack, role, audit details) follow
 *  the résumé. Status per Paul: ColabHealth is live in production; Sandbox
 *  Clinic Prime is deployed in production.
 *
 *  COVERS: ColabHealth uses a real screenshot of the live site
 *  (public/projects/colabhealth.png). Sandbox Clinic Prime uses a generated
 *  gradient cover because it isn't publicly reachable — drop a real
 *  screenshot at its imageUrl path to replace it.
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
    purpose: "Streamline healthcare bookings and HMO management for Philippine clinics.",
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
    status: "production",
    imageUrl: "/projects/sandbox-clinic.svg",
    accent: { from: "#818cf8", to: "#6366f1" },
    timeframe: "2026",
    purpose: "Centralize clinic operations — bookings, scheduling, HMO workflows, and payments.",
  },
  {
    slug: "ai-job-application-tracker",
    title: "AI Job Application Tracker",
    tagline: "Track and manage job applications with AI assistance",
    description:
      "A full-stack web application for tracking job applications with AI-powered features, built with Next.js, Prisma, and shadcn/ui. It includes authentication, database management, and a modern responsive interface.",
    overview:
      "AI Job Application Tracker is a Next.js application designed to help users manage their job search process. It features a Prisma ORM database layer, TypeScript strict mode, and a polished UI built with shadcn/ui components. The project includes Docker support for deployment, ESLint and Prettier for code quality, and Husky with commitlint for standardized commit practices.",
    highlights: [
      "Next.js 15 with TypeScript and App Router architecture.",
      "Prisma ORM for database management and type-safe queries.",
      "shadcn/ui component library for a modern, accessible interface.",
      "Docker support with Dockerfile and docker-compose.yml for easy deployment.",
      "ESLint, Prettier, Husky, and commitlint for code quality and consistency.",
    ],
    role: "Full-stack developer",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Prisma ORM",
      "shadcn/ui",
      "TailwindCSS",
      "PostgreSQL",
      "Docker",
      "ESLint",
      "Prettier",
    ],
    status: "for-deployment",
    imageUrl: "/projects/ai-job-application-tracker.svg",
    accent: { from: "#38bdf8", to: "#0ea5e9" },
    timeframe: "2026",
    purpose: "Track and manage job applications with AI-powered assistance.",
  },
  {
    slug: "company-asset-management",
    title: "Company Asset Management",
    tagline: "Track and manage company assets and inventory",
    description:
      "A full-stack web application for managing company assets and inventory, built with modern web technologies. Features include asset tracking, inventory management, and reporting capabilities.",
    overview:
      "Company Asset Management is a comprehensive system designed to help organizations track and manage their physical and digital assets. It provides features for asset registration, lifecycle management, assignment tracking, and reporting. The application is built with a focus on usability and reliability, ensuring organizations can maintain accurate asset records.",
    highlights: [
      "Asset registration and lifecycle management.",
      "Inventory tracking and reporting capabilities.",
      "User-friendly interface for easy asset management.",
      "Scalable architecture for growing organizations.",
      "Modern tech stack for performance and reliability.",
    ],
    role: "Full-stack developer",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "TailwindCSS",
      "shadcn/ui",
    ],
    status: "in-development",
    imageUrl: "/projects/company-asset-management.svg",
    accent: { from: "#f59e0b", to: "#d97706" },
    timeframe: "2026",
    purpose: "Streamline company asset tracking and inventory management.",
  },
];

/** Lookup by slug — used by the detail route and generateStaticParams. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectSlugs = projects.map((project) => project.slug);
