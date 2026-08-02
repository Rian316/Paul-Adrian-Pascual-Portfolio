import { stats } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

/** Numeric credibility band under the hero. */
export function StatsBand() {
  return (
    <div className="border-y border-border bg-surface/60">
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-border lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="px-5 py-8 text-center sm:px-8">
            <Reveal delay={i * 0.06}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1.5 text-xs text-muted sm:text-sm">
                {stat.label}
              </p>
            </Reveal>
          </div>
        ))}
      </dl>
    </div>
  );
}
