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
      "Designed and developed a healthcare SaaS platform supporting appointment booking, HMO management, and patient services. Implemented authentication, role-based access control, rate limiting, login protection, transaction safety, concurrency handling, and security hardening.",
    overview:
      "ColabHealth is a cloud-based healthcare SaaS platform supporting appointment booking, HMO management, and patient services. I designed and developed it end-to-end: authentication, role-based access control, rate limiting, login protection, transaction safety, concurrency handling, and security hardening. I configured PostgreSQL infrastructure and deployed the application using Vercel, working with Alibaba Cloud technologies. I also integrated an AI-powered chatbot using Alibaba DashScope (Qwen-Plus), and maintained TypeScript strict mode, zero ESLint violations, and Lighthouse 90+ performance scores throughout.",
    highlights: [
      "Healthcare SaaS platform supporting appointment booking, HMO management, and patient services.",
      "Authentication, RBAC, rate limiting, login protection, transaction safety, and concurrency handling.",
      "AI-powered chatbot integrated using Alibaba DashScope (Qwen-Plus).",
      "PostgreSQL infrastructure configured and deployed on Vercel with Alibaba Cloud technologies.",
      "TypeScript strict mode, zero ESLint violations, and Lighthouse 90+ performance scores.",
    ],
    role: "Solo full-stack developer",
    techStack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Auth.js v5",
      "Tailwind CSS",
      "Zod",
      "Vercel",
      "Alibaba DashScope",
    ],
    status: "production",
    liveUrl: "https://colabhealth.ph",
    imageUrl: "/projects/colabhealth.png",
    accent: { from: "#2dd4bf", to: "#0ea5e9" },
    timeframe: "2026",
    purpose: "Healthcare booking & HMO SaaS for the Philippines.",
  },
  {
    slug: "sandbox-clinic",
    title: "Sandbox Clinic Prime",
    tagline: "Clinic operations platform — bookings, scheduling & payments",
    description:
      "Built a clinic management system supporting appointments, doctor management, scheduling, HMO workflows, and payment tracking. Developed a public marketing website and administrative operations panel.",
    overview:
      "Sandbox Clinic Prime is a clinic management system supporting appointments, doctor management, scheduling, HMO workflows, and payment tracking. I developed a public marketing website and administrative operations panel, implementing Auth.js v5 RBAC, audit logging, soft-delete guards, and secure server actions. I designed Prisma database models and deployment configurations for Vercel and Alibaba Cloud.",
    highlights: [
      "Clinic management system supporting appointments, doctor management, scheduling, HMO workflows, and payment tracking.",
      "Public marketing website and administrative operations panel.",
      "Auth.js v5 RBAC, audit logging, soft-delete guards, and secure server actions.",
      "Prisma database models and deployment configurations for Vercel and Alibaba Cloud.",
    ],
    role: "Solo developer",
    techStack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Auth.js v5",
      "Tailwind CSS",
      "Shadcn/UI",
      "Zod",
      "Vercel",
      "Alibaba Cloud",
    ],
    status: "production",
    imageUrl: "/projects/sandbox-clinic.svg",
    accent: { from: "#818cf8", to: "#6366f1" },
    timeframe: "2026",
    purpose: "Clinic operations platform — bookings, scheduling & payments.",
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
    repoUrl: "https://github.com/Rian316/ai-job-application-tracker",
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
    repoUrl: "https://github.com/Rian316/company-asset-management",
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
