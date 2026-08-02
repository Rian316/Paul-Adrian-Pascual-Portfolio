import { BadgeCheck, Briefcase } from "lucide-react";
import { timeline } from "@/lib/data/about";
import { Reveal } from "@/components/ui/reveal";

/** Vertical career timeline — most recent first, with a current-role marker. */
export function CareerTimeline() {
  return (
    <ol className="relative space-y-10 border-l border-border-strong pl-8">
      {timeline.map((entry, i) => (
        <li key={`${entry.org}-${entry.period}`} className="relative">
          <Reveal delay={i * 0.08}>
            <span
              aria-hidden
              className="absolute top-1 -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-4 border-background bg-accent"
            />
            {entry.current ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-ink">
                <Briefcase className="h-3 w-3" aria-hidden />
                Current
              </span>
            ) : null}
            <h3 className="mt-2 font-display text-lg font-semibold">
              {entry.role}
            </h3>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-muted">
              <BadgeCheck className="h-4 w-4 text-accent-ink" aria-hidden />
              {entry.org}
              <span aria-hidden className="text-faint">
                ·
              </span>
              <span className="font-mono text-xs text-faint">
                {entry.period}
              </span>
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {entry.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
