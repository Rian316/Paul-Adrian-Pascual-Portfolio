import { BrainCircuit, Cloud, Code2, Rocket, ShieldCheck, Server } from "lucide-react";

/** The capabilities Paul leads with — shown on the home page. */
export const capabilities = [
  {
    icon: Rocket,
    title: "Full-stack product ownership",
    description:
      "From data model to deployment — booking, payments, auth, admin, and AI built end-to-end across multiple SaaS platforms.",
    techs: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    icon: BrainCircuit,
    title: "AI-powered applications",
    description:
      "LLM features wired into production products — chatbots, triage, code review, and conversational interfaces.",
    techs: ["Claude", "Alibaba DashScope", "OpenAI SDKs", "TypeScript"],
  },
  {
    icon: ShieldCheck,
    title: "Security & reliability",
    description:
      "RBAC, audit logging, rate limiting, transaction safety, and concurrency handling — hardened through systematic security audits.",
    techs: ["Auth.js", "RBAC", "Rate Limiting", "Audit Logging"],
  },
  {
    icon: Cloud,
    title: "Cloud & deployment",
    description:
      "Application deployment, infrastructure configuration, containerization, and modern hosting platforms.",
    techs: ["Alibaba Cloud", "Vercel", "Docker", "NGINX"],
  },
  {
    icon: Server,
    title: "Enterprise & business systems",
    description:
      "Operational workflows — recruitment, asset management, healthcare, clinic operations, and internal business processes.",
    techs: ["SAP Business One", "PayMongo", "Prisma", "PostgreSQL"],
  },
  {
    icon: Code2,
    title: "Developer tooling",
    description:
      "Code quality, CI/CD pipelines, automated testing frameworks, and development workflow optimization.",
    techs: ["ESLint", "Prettier", "Husky", "GitHub Actions", "Docker"],
  },
] as const;
