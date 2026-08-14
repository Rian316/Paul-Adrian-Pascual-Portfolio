import type { Certification, Education, TimelineEntry } from "@/types/about";

/**
 * Bio + career facts, sourced from Paul's résumé.
 */

export const bio: string[] = [
  "IT Professional and Full-Stack Developer with a Bachelor of Science in Information Technology (Cum Laude) and hands-on experience supporting, developing, deploying, and troubleshooting business applications and cloud-based systems.",
  "Experienced across application support, databases, cloud infrastructure, system administration, authentication, security, and software development. Strong background with Alibaba Cloud, Vercel, PostgreSQL, Microsoft SQL Server, Linux, Windows administration, and modern web applications.",
];

export const education: Education = {
  degree: "BS Information Technology",
  honor: "Cum Laude",
  gwa: "GWA 1.50",
  school: "STI College – Sta. Mesa",
  years: "2021 – 2025",
  highSchool: {
    strand: "STEM Strand",
    school: "National University – Nazareth School",
    years: "2019 – 2021",
  },
} as const;

export const timeline: TimelineEntry[] = [
  {
    role: "Freelance | Independent Contractor",
    org: "Self-Employed",
    period: "May 2026 — Present",
    description:
      "Managed end-to-end technology projects including requirements gathering, system design, development, deployment, troubleshooting, and client communication. Architected and deployed internal SaaS and business applications using Next.js, TypeScript, PostgreSQL, and Alibaba Cloud. Configured application environments and implemented authentication, authorization, RBAC, validation, rate limiting, and audit logging.",
    current: true,
  },
  {
    role: "Information Systems Researcher I",
    org: "Department of Public Works & Highways",
    period: "Oct 2025 — May 2026",
    description:
      "Conducted research and analysis on GIS systems used in government infrastructure project management. Supported documentation, data management, and reporting workflows across departmental GIS initiatives. Worked with information systems and GIS technologies supporting operational requirements.",
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
