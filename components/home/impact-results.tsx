import { impactMetrics } from "@/lib/data/highlights";
import { Reveal } from "@/components/ui/reveal";

export function ImpactResults() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {impactMetrics.map((metric, i) => (
        <Reveal key={metric.label} delay={i * 0.06}>
          <div className="glass-card group rounded-3xl border border-border/60 p-6 text-center transition-all duration-500 hover:border-border/80">
            <p className="font-display text-4xl font-black tracking-tighter text-accent-ink sm:text-5xl">
              {metric.value}
            </p>
            <p className="mt-2 font-display text-sm font-semibold text-foreground">
              {metric.label}
            </p>
            <p className="mt-1 text-xs text-muted">{metric.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
