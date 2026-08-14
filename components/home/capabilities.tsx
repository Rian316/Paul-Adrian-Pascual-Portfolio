"use client";

import { useState } from "react";
import { capabilities } from "@/lib/data/capabilities";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {capabilities.map((capability, i) => {
        const Icon = capability.icon;
        const isHovered = hoveredIndex === i;
        return (
          <Reveal key={capability.title} delay={i * 0.06}>
            <div
              className={cn(
                "group h-full rounded-2xl border bg-surface p-6 shadow-soft transition-all duration-300",
                isHovered
                  ? "border-accent -translate-y-1 shadow-lift"
                  : "border-border hover:-translate-y-1 hover:border-border-strong hover:shadow-lift",
              )}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {capability.description}
              </p>

              {/* Tech tags — reveal on hover */}
              <div
                className={cn(
                  "mt-3 flex flex-wrap gap-1.5 transition-all duration-300",
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1 pointer-events-none",
                )}
              >
                {capability.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
