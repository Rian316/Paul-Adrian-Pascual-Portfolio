import { BrainCircuit, Rocket, ShieldCheck } from "lucide-react";

/** The three capabilities Paul leads with — shown on the home page. */
export const capabilities = [
  {
    icon: Rocket,
    title: "Full-stack product ownership",
    description:
      "From data model to deployment — booking, payments, auth, admin, and AI built end-to-end. Two production SaaS platforms shipped solo.",
  },
  {
    icon: ShieldCheck,
    title: "Security & reliability hardening",
    description:
      "RBAC, audit logging, rate limiting, transaction safety, and concurrency handling — including a 22-PR security audit across authentication and data flows.",
  },
  {
    icon: BrainCircuit,
    title: "AI integration",
    description:
      "LLM-powered features wired into production products — chatbots, triage, and conversational interfaces using Alibaba DashScope (Qwen-Plus).",
  },
] as const;
