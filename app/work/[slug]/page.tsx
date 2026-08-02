import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectSlugs } from "@/lib/data/projects";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { ProjectDetail } from "@/components/projects/project-detail";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * The project list is fixed and fully known at build time — any slug outside
 * of it should be a real 404, not a dynamic render.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} · ${siteConfig.shortName}`,
      description: project.description,
      url: `/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <Container className="py-14 sm:py-20">
      <ProjectDetail project={project} />
    </Container>
  );
}
