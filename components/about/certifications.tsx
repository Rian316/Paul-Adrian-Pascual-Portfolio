import { Award } from "lucide-react";
import { certifications } from "@/lib/data/about";
import { Reveal } from "@/components/ui/reveal";

/** Certification list — credential, issuer, and year. */
export function Certifications() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {certifications.map((cert, i) => (
        <li key={`${cert.name}-${cert.year}`}>
          <Reveal delay={(i % 2) * 0.06}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                <Award className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div>
                <h3 className="leading-snug font-medium">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer}
                  <span aria-hidden className="mx-1.5 text-faint">
                    ·
                  </span>
                  <span className="font-mono text-xs text-faint">
                    {cert.year}
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
