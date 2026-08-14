import { Award, Briefcase, Cloud, Code2, GraduationCap, Shield } from "lucide-react";

export const highlights = [
  {
    icon: GraduationCap,
    title: "Cum Laude Graduate",
    description: "BS Information Technology, STI College — Sta. Mesa (GWA 1.50)",
  },
  {
    icon: Cloud,
    title: "Cloud & SaaS Development",
    description: "Alibaba Cloud, Vercel, Docker, NGINX — deployed production systems end-to-end.",
  },
  {
    icon: Code2,
    title: "AI-Powered Applications",
    description: "Integrated LLM chatbots and AI workflows using Alibaba DashScope (Qwen-Plus).",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description: "RBAC, audit logging, rate limiting, transaction safety — hardened through a 22-PR security audit.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Systems",
    description: "SAP Business One, PayMongo, AltPayNet — experience with production business tools.",
  },
  {
    icon: Award,
    title: "7 Professional Certifications",
    description: "Cisco, Microsoft SQL Server, Lean Six Sigma, Huawei Cloud, SAP, Linux, Java.",
  },
] as const;

export const impactMetrics = [
  {
    value: "4",
    label: "Full-stack platforms built",
    detail: "From data model to production deployment",
  },
  {
    value: "2",
    label: "Production SaaS systems",
    detail: "Live in production with real users",
  },
  {
    value: "22",
    label: "Security PRs in one audit",
    detail: "Concurrency, RBAC, rate limiting, audit logging",
  },
  {
    value: "7",
    label: "Professional certifications",
    detail: "Databases, cloud, cybersecurity, ERP, process improvement",
  },
] as const;
