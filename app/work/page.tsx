"use client";

import { useState } from "react";
import { projects } from "@/lib/data/projects";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ProjectFilters } from "@/components/projects/project-filters";
import type { ProjectStatus } from "@/types/project";

type FilterOption = "all" | ProjectStatus;

export default function WorkPage() {
  const [filter, setFilter] = useState<FilterOption>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Things I've built"
        description="Production and in-progress platforms — each one taken from data model to deployment. Click through for the details."
        action={
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-surface-2 px-3 py-1 text-sm font-medium text-muted">
              {projects.length} projects
            </span>
          </div>
        }
      />
      <Container className="py-16 sm:py-20">
        <ProjectFilters onChange={setFilter} className="mb-10" />
        <ProjectGrid projects={filteredProjects} />
      </Container>
    </>
  );
}
