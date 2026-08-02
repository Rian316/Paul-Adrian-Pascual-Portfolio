import { BrainCircuit, Rocket, ShieldCheck } from "lucide-react";

/** The three capabilities Paul leads with — shown on the home page. */
export const capabilities = [
  {
    icon: Rocket,
    title: "Full-stack product ownership",
    description:
      "From data model to deployment — booking, payments, auth, and admin built end-to-end, without a team.",
  },
  {
    icon: ShieldCheck,
    title: "Security & reliability hardening",
    description:
      "Concurrency, transaction safety, rate limiting, RBAC, and audit logging — including a 22-PR security audit.",
  },
  {
    icon: BrainCircuit,
    title: "AI integration",
    description:
      "LLM-powered flows wired into real products — conversational intake and chatbots on DashScope (Qwen-Plus).",
  },
] as const;
