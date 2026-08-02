import { capabilities } from "@/lib/data/capabilities";
import { Reveal } from "@/components/ui/reveal";

/** Three capability cards — the pitch, before the tool list. */
export function Capabilities() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {capabilities.map((capability, i) => {
        const Icon = capability.icon;
        return (
          <Reveal key={capability.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {capability.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
