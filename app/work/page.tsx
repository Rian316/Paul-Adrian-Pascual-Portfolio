import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Paul Adrian O. Pascual — healthcare booking and clinic-operations platforms built with Next.js, TypeScript, Prisma, and AI integrations.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work · Paul Pascual",
    description:
      "Healthcare and operations platforms built end-to-end with Next.js, TypeScript, and AI integrations.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Things I've built"
        description="Production and in-progress platforms — each one taken from data model to deployment. Click through for the details."
      />
      <Container className="py-16 sm:py-20">
        <ProjectGrid projects={projects} />
      </Container>
    </>
  );
}
