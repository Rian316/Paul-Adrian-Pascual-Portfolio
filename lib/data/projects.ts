import type { Project } from "@/types/project";

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
    problem:
      "Philippine clinics need a unified platform for appointment booking, HMO provider management, and patient services — existing solutions are fragmented, expensive, or don't support local HMO workflows.",
    solution:
      "Built a full-stack SaaS from scratch: appointment booking with real-time availability, HMO-as-a-payment-method, provider management, and an AI chatbot for patient triage — all in a single, cohesive platform.",
    architecture:
      "Next.js 15 App Router with React Server Components for performance. Prisma ORM with PostgreSQL (Neon) for type-safe data access. Auth.js v5 for session management with RBAC. Server Actions for mutations without API route boilerplate. Alibaba DashScope (Qwen-Plus) via OpenAI-compatible SDK for the AI chatbot.",
    challenges:
      "HMO rules are complex — each provider has different coverage, approval workflows, and claim processes. Modelling this into a flexible data schema while keeping the booking flow simple required careful domain modelling. Concurrency handling for simultaneous bookings was critical to prevent double-booking.",
    security:
      "22-PR security and reliability audit covering: rate limiting on auth endpoints, login circuit breakers, transaction safety for booking mutations, concurrency locks on availability checks, RBAC for all admin operations, and audit logging on sensitive actions.",
    deployment:
      "Deployed on Vercel with Neon PostgreSQL (AWS Singapore). Environment-based configuration for staging and production. Planned migration to Alibaba ApsaraDB RDS for production compliance.",
    outcome:
      "Production SaaS platform live in the Philippine healthcare market. TypeScript strict mode, zero ESLint violations, and Lighthouse 90+ performance scores throughout development.",
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
    problem:
      "Sapphire Clinic Prime operates across two branches with no centralized system for managing appointments, doctor schedules, HMO applications, and payment tracking — leading to manual coordination and data silos.",
    solution:
      "Built a dual-interface platform: a public marketing site for patient acquisition and a full admin panel for operations — appointment booking, doctor management, shift scheduling, HMO application workflows, and payment tracking with CSV export.",
    architecture:
      "Next.js 15 App Router with a mobile-first marketing site and a full admin panel. Prisma ORM with PostgreSQL for relational data modelling across branches. Auth.js v5 for role-based access. Server Actions with validation guards. Shadcn/UI for the admin interface.",
    challenges:
      "Two-branch operations required a data model that supports location-based scheduling while allowing cross-branch visibility. HMO application workflows (Approve/Disapprove/Pending) needed a state machine approach. Payment tracking with CSV export required careful data formatting for accounting integration.",
    security:
      "Auth.js v5 RBAC with role-based access control. Audit logging on all administrative actions. Soft-delete guards to prevent accidental data loss. Secure server actions with input validation via Zod.",
    deployment:
      "Deployed on Vercel with PostgreSQL. Deployment configurations prepared for Alibaba Cloud for production compliance. Prisma migrations for schema management.",
    outcome:
      "Complete clinic operations platform covering two branches — from patient-facing marketing to internal operations management in a single codebase.",
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
    problem:
      "Job seekers manage applications across multiple platforms (LinkedIn, Indeed, email) with no centralized tracking — leading to missed follow-ups, lost notes, and poor visibility into their pipeline.",
    solution:
      "Built a centralized dashboard for tracking applications across companies and roles, with AI-assisted features for generating cover letters and tracking status updates throughout the hiring pipeline.",
    architecture:
      "Next.js 15 App Router with TypeScript strict mode. Prisma ORM for type-safe database queries. shadcn/UI component library for a polished, accessible interface. Docker configuration for containerized deployment.",
    challenges:
      "Designing a flexible data model that supports different application statuses, company structures, and AI-generated content. Ensuring the UI remains responsive and intuitive even with large amounts of application data.",
    security:
      "Authentication for user-specific data isolation. Input validation on all forms. Secure API design patterns.",
    deployment:
      "Docker support with Dockerfile and docker-compose.yml for easy local development and deployment. ESLint, Prettier, Husky, and commitlint for code quality consistency.",
    outcome:
      "Full-stack application demonstrating modern development practices — from database design to containerized deployment with comprehensive tooling.",
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
    problem:
      "Organizations struggle to track physical and digital assets across departments — leading to lost equipment, unclear ownership, and inefficient procurement cycles.",
    solution:
      "Building a centralized asset management system with registration, lifecycle tracking, assignment management, and reporting — designed for scalability across growing organizations.",
    architecture:
      "Next.js with TypeScript for type safety. Prisma ORM with PostgreSQL for relational asset data. shadcn/UI for a clean, functional interface. Modular component architecture for extensibility.",
    challenges:
      "Designing a flexible asset data model that supports different asset types, locations, and assignment histories. Building reporting features that provide actionable insights without complexity.",
    security:
      "Role-based access control for asset management operations. Input validation and audit logging for compliance.",
    deployment:
      "GitHub repository with CI/CD pipeline. Designed for Vercel deployment with PostgreSQL.",
    outcome:
      "In-development project demonstrating enterprise-grade architecture patterns for asset lifecycle management.",
  },
];

/** Lookup by slug — used by the detail route and generateStaticParams. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectSlugs = projects.map((project) => project.slug);
