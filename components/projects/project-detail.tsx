import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  UserRound,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCover } from "@/components/projects/project-cover";

const STATUS_LABEL: Record<
  Project["status"],
  { label: string; variant: "success" | "warning" | "info" }
> = {
  production: { label: "Live", variant: "success" },
  "in-development": { label: "In development", variant: "warning" },
  "for-deployment": { label: "For deployment", variant: "info" },
};

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium tracking-wider text-faint uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const status = STATUS_LABEL[project.status];

  return (
    <article>
      <Reveal>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={status.variant}>{status.label}</Badge>
            <span className="text-sm text-faint">{project.timeframe}</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {project.tagline}
          </p>
        </header>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-soft">
          <ProjectCover
            src={project.imageUrl}
            alt={`${project.title} preview`}
            accent={project.accent}
            className="aspect-[16/9] sm:aspect-[21/9]"
          />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        <div className="space-y-10">
          <Reveal>
            <section>
              <h2 className="font-display text-xl font-semibold">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted">
                {project.overview}
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section aria-label="Highlights">
              <h2 className="font-display text-xl font-semibold">Highlights</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <CheckCircle2
                      aria-hidden
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink"
                    />
                    <span className="text-sm leading-relaxed text-muted sm:text-base">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section aria-label="Tech stack">
              <h2 className="font-display text-xl font-semibold">Tech stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <aside className="rounded-2xl border border-border bg-surface p-6 shadow-soft lg:sticky lg:top-24">
            <dl className="space-y-5">
              <MetaItem label="Role" value={project.role} />
              <MetaItem label="Status" value={status.label} />
              <MetaItem label="Timeframe" value={project.timeframe} />
            </dl>

            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast transition-all hover:brightness-105"
                >
                  Visit live site
                  <ExternalLink
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent-ink"
                >
                  <SiGithub className="h-4 w-4" aria-hidden />
                  View source
                </a>
              ) : null}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-accent-ink"
              >
                Ask me about this project
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-border pt-6 text-sm text-muted">
              <CalendarDays className="h-4 w-4 text-faint" aria-hidden />
              <span>
                {project.timeframe} · {status.label}
              </span>
            </div>
          </aside>
        </Reveal>
      </div>

      <Reveal>
        <footer className="mt-16 flex flex-col items-center gap-6 border-t border-border py-12 text-center">
          <div className="inline-flex items-center gap-2 text-faint">
            <UserRound className="h-4 w-4" aria-hidden />
            <span>
              Built{" "}
              {project.status === "production"
                ? "and shipped"
                : "in development"}{" "}
              by Paul
            </span>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-all hover:brightness-105"
          >
            Have a similar project?
            <ArrowUpRight
              aria-hidden
              className={cn(
                "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              )}
            />
          </Link>
        </footer>
      </Reveal>
    </article>
  );
}
