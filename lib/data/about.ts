import type { Certification, Education, TimelineEntry } from "@/types/about";

/**
 * Bio + career facts, sourced from Paul's résumé.
 */

export const bio: string[] = [
  "Most teams need three people to do what I do alone: model the data, build the product — booking, payments, auth, admin — harden it for security, and integrate the AI. I've done exactly that three times, in healthcare and clinic operations, where HMO rules, access control, and data-privacy law (RA 10173) actually matter.",
  "I graduated BS Information Technology, Cum Laude, and moved from GIS systems work at the DPWH into shipping production SaaS. If you're a founder who needs one person to own a product end to end — or a team that needs a specialist to wire AI into what you've already built — that's the work I do best.",
];

export const education: Education = {
  degree: "BS Information Technology",
  honor: "Cum Laude",
  gwa: "GWA 1.50",
  school: "STI College – Sta. Mesa",
  years: "2021 – 2025",
} as const;

export const timeline: TimelineEntry[] = [
  {
    role: "AI Associate · Solo Full-Stack Developer",
    org: "Phil Capital Trading Solution Inc.",
    period: "May 2026 — Present",
    description:
      "Apply AI and information-systems expertise to support trading operations and data workflows, and build and maintain internal tools and automation that improve operational efficiency.",
    current: true,
  },
  {
    role: "Information Systems Researcher I",
    org: "Department of Public Works & Highways",
    period: "Oct 2025 — May 2026",
    description:
      "Researched and analysed GIS systems used in government infrastructure project management, and supported documentation, data management, and reporting across departmental GIS initiatives.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    name: "Microsoft SQL Server Database Administration",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "Lean Six Sigma — White & Yellow Belt",
    issuer: "Council for Six Sigma Certification",
    year: "2025",
  },
  {
    name: "Cloud Computing — Development & Basic Concepts",
    issuer: "Huawei Academy",
    year: "2024",
  },
  {
    name: "SAP Business One (Basic & Advanced)",
    issuer: "FIT Academy",
    year: "2024",
  },
  {
    name: "System Administration",
    issuer: "Linux Professional Institute",
    year: "2022",
  },
  {
    name: "Java Foundations",
    issuer: "Oracle Academy",
    year: "2022",
  },
];
