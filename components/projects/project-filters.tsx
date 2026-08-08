"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/project";

type FilterOption = "all" | ProjectStatus;

const FILTERS: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All" },
  { value: "production", label: "Live" },
  { value: "in-development", label: "In Development" },
  { value: "for-deployment", label: "For Deployment" },
];

interface ProjectFiltersProps {
  onChange: (filter: FilterOption) => void;
  className?: string;
}

export function ProjectFilters({ onChange, className }: ProjectFiltersProps) {
  const [active, setActive] = useState<FilterOption>("all");

  const handleChange = (filter: FilterOption) => {
    setActive(filter);
    onChange(filter);
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleChange(filter.value)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
            "border border-border hover:border-border-strong hover:bg-surface-2",
            active === filter.value
              ? "border-accent bg-accent/10 text-accent-ink"
              : "text-muted",
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
