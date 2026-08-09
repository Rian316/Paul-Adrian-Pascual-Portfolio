export interface Review {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export const reviews: Review[] = [
  {
    name: "Sarah Chen",
    role: "Founder, HealthBridge Clinic",
    content:
      "Paul built our entire patient booking system solo — from the database schema to the AI triage feature. What would've taken our team months was done in weeks. The system handles HMO rules perfectly and our patients love the seamless experience.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO, MedFlow Systems",
    content:
      "We brought Paul in to integrate LLM-powered diagnostics into our existing platform. He understood the compliance requirements immediately and delivered a solution that passed our security audit on the first try. Rare to find someone this technically strong and this reliable.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Operations Director, clinic360",
    content:
      "Paul doesn't just write code — he thinks about the product. He redesigned our internal dashboard workflow and cut our admin time by 60%. His understanding of both the technical and business side is exceptional.",
    rating: 5,
  },
];
