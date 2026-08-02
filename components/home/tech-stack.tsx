import { techStack } from "@/lib/data/tech-stack";
import { Reveal } from "@/components/ui/reveal";

/** The full tool stack, grouped by role. */
export function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {techStack.map((category, i) => (
        <Reveal key={category.category} delay={(i % 3) * 0.07}>
          <section
            aria-label={category.category}
            className="h-full rounded-2xl border border-border bg-surface p-6 shadow-soft"
          >
            <h3 className="font-display text-sm font-semibold tracking-widest text-accent-ink uppercase">
              {category.category}
            </h3>
            {category.caption ? (
              <p className="mt-1 text-xs text-faint">{category.caption}</p>
            ) : null}
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map(({ name, icon: Icon, note }) => (
                <li key={name}>
                  <span
                    className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/60"
                    title={note}
                  >
                    <Icon
                      aria-hidden
                      className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent-ink"
                    />
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      ))}
    </div>
  );
}
