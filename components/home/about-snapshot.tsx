import { Download, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { education } from "@/lib/data/about";
import { Reveal } from "@/components/ui/reveal";

/** Quick-facts snapshot card (education, location, data-privacy awareness). */
export function AboutSnapshot() {
  const facts = [
    {
      icon: GraduationCap,
      label: education.degree,
      value: `${education.honor} · ${education.gwa} · ${education.school}`,
    },
    {
      icon: MapPin,
      label: "Based in",
      value: `${siteConfig.location} (${siteConfig.timezone})`,
    },
    {
      icon: ShieldCheck,
      label: "Compliance-aware",
      value: "Data-privacy law (RA 10173) where it matters",
    },
  ];

  return (
    <Reveal delay={0.1}>
      <aside className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-7">
        <ul className="divide-y divide-border">
          {facts.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                <Icon className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">
                  {value}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex items-center justify-center gap-2 rounded-lg border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
        >
          <Download
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden
          />
          Download résumé (PDF)
        </a>
      </aside>
    </Reveal>
  );
}
