import { Reveal } from "@/components/ui/reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/** Consistent intro block for interior pages (/work, /about, /contact). */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute inset-0"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          {eyebrow ? (
            <p className="text-sm font-semibold tracking-widest text-accent-ink uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}
