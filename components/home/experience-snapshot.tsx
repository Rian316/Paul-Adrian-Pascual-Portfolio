import { Briefcase, MapPin } from "lucide-react";
import { timeline } from "@/lib/data/about";
import { Reveal } from "@/components/ui/reveal";

export function ExperienceSnapshot() {
  return (
    <div className="space-y-4">
      {timeline.map((entry, i) => (
        <Reveal key={entry.org + entry.period} delay={i * 0.08}>
          <div className="glass-card group rounded-3xl border border-border/60 p-6 transition-all duration-500 hover:border-border/80">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                <Briefcase className="h-5 w-5" aria-hidden />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-semibold">
                    {entry.role}
                  </h3>
                  {entry.current && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Current
                    </span>
                  )}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                  <span>{entry.org}</span>
                  <span aria-hidden>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" aria-hidden />
                    {entry.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
