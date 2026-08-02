import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiZod,
  SiPostgresql,
  SiAlibabacloud,
  SiVercel,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiClaude,
} from "react-icons/si";
import {
  LuBot,
  LuServerCog,
  LuShieldCheck,
  LuBrainCircuit,
} from "react-icons/lu";
import type { TechCategory } from "@/types/tech";

/**
 * The stack, grouped by role. Exactly the tools Paul works with — nothing
 * fabricated. `icon` references are react-icons components (not JSX); some
 * tools (Server Actions, Auth.js, Model Studio) have no brand mark, so they
 * use neutral Lucide glyphs.
 */
export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    caption: "Typed, server-first interfaces.",
    items: [
      { name: "Next.js 15", icon: SiNextdotjs, note: "App Router, RSC, SSG" },
      { name: "React", icon: SiReact, note: "Server & Client Components" },
      { name: "TypeScript", icon: SiTypescript, note: "Strict mode" },
      { name: "TailwindCSS", icon: SiTailwindcss, note: "Design systems" },
    ],
  },
  {
    category: "Backend",
    caption: "Type-safe data and mutations.",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Prisma ORM", icon: SiPrisma, note: "Schema & migrations" },
      {
        name: "Server Actions",
        icon: LuServerCog,
        note: "Mutations w/o API routes",
      },
      { name: "Zod", icon: SiZod, note: "Runtime validation" },
    ],
  },
  {
    category: "Database & Auth",
    caption: "Durable storage and sessions.",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, note: "Hosted on Neon" },
      { name: "Auth.js v5", icon: LuShieldCheck, note: "Sessions & providers" },
    ],
  },
  {
    category: "AI / Integration",
    caption: "LLM features wired into real flows.",
    items: [
      { name: "Alibaba DashScope", icon: SiAlibabacloud, note: "qwen-plus" },
      {
        name: "OpenAI-compatible SDKs",
        icon: LuBot,
        note: "Unified clients",
      },
      {
        name: "Model Studio (Bailian)",
        icon: LuBrainCircuit,
        note: "Alibaba Cloud",
      },
    ],
  },
  {
    category: "Infrastructure",
    caption: "Where it runs and ships.",
    items: [
      {
        name: "Alibaba Cloud",
        icon: SiAlibabacloud,
        note: "ECS · RDS · OSS · CDN",
      },
      { name: "Vercel", icon: SiVercel, note: "Preview & edge" },
      { name: "Docker", icon: SiDocker },
      { name: "NGINX", icon: SiNginx, note: "Reverse proxy" },
      { name: "GitHub Actions", icon: SiGithubactions, note: "CI/CD" },
    ],
  },
  {
    category: "Tools",
    caption: "Daily drivers.",
    items: [
      { name: "Claude Code", icon: SiClaude, note: "AI pair programming" },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];
