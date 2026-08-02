import type { Project } from "@/types/project";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/projects/project-card";

/** Responsive project grid with staggered scroll reveals. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 3) * 0.08} className="h-full">
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
