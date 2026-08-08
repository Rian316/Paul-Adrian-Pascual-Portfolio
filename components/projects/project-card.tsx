import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ProjectCover } from "@/components/projects/project-cover";

const STATUS_LABEL: Record<
  Project["status"],
  { label: string; variant: "success" | "warning" | "info" }
> = {
  production: { label: "Live", variant: "success" },
  "in-development": { label: "In development", variant: "warning" },
  "for-deployment": { label: "For deployment", variant: "info" },
};

export function ProjectCard({ project }: { project: Project }) {
  const status = STATUS_LABEL[project.status];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft",
        "transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift",
      )}
    >
      <div className="relative">
        <ProjectCover
          src={project.imageUrl}
          alt={`${project.title} preview`}
          accent={project.accent}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <Badge
          variant={status.variant}
          className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm"
        >
          <span
            aria-hidden
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              project.status === "production"
                ? "bg-emerald-500"
                : project.status === "for-deployment"
                  ? "bg-sky-500"
                  : "bg-amber-500",
            )}
          />
          {status.label}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium tracking-wide text-accent-ink">
          {project.timeframe}
        </p>
        <h3 className="mt-1.5 flex items-center gap-2 font-display text-xl font-semibold">
          {project.title}
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-ink"
          />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>
        {project.purpose && (
          <p className="mt-1 text-xs leading-relaxed text-faint italic">
            {project.purpose}
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
          {project.techStack.length > 4 ? (
            <li className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-faint">
              +{project.techStack.length - 4}
            </li>
          ) : null}
        </ul>
      </div>
    </Link>
  );
}
