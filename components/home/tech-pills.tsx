import { techStack } from "@/lib/data/tech-stack";
import { Reveal } from "@/components/ui/reveal";

/** Flat pill-style tech stack — all items in a single flowing list. */
export function TechPills() {
  const allItems = techStack.flatMap((cat) => cat.items);

  return (
    <Reveal>
      <div className="flex flex-wrap gap-2">
        {allItems.map(({ name, icon: Icon, note }) => (
          <span
            key={name}
            title={note}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-muted transition-colors hover:border-accent/60 hover:text-foreground"
          >
            <Icon
              aria-hidden
              className="h-3.5 w-3.5 text-faint transition-colors group-hover:text-accent-ink"
            />
            {name}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
