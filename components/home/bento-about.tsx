"use client";

import {
  Download,
  Briefcase,
  GraduationCap,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { bio, education } from "@/lib/data/about";
import { socialLinks } from "@/lib/data/social";
import { Reveal } from "@/components/ui/reveal";

export function BentoAbout() {
  return (
    <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
      {/* Hero card — spans 2 cols, 2 rows */}
      <Reveal className="md:col-span-2 md:row-span-2">
        <div className="glass-card group flex h-full flex-col justify-between rounded-3xl border border-border/60 p-8 transition-all duration-500 hover:border-border/80">
          <div>
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-colors group-hover:bg-muted/80">
              <Briefcase className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mb-4 font-display text-3xl font-bold tracking-tight">
              {siteConfig.role}
            </h3>
            {bio.map((paragraph, i) => (
              <p
                key={i}
                className="mb-4 text-base leading-relaxed text-muted lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-border pt-8">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full border border-border-strong bg-muted px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
            >
              <Download
                className="h-4 w-4 transition-transform group-hover/btn:translate-y-0.5"
                aria-hidden
              />
              Download résumé
            </a>
          </div>
        </div>
      </Reveal>

      {/* Education card */}
      <Reveal delay={0.06} className="md:col-span-2">
        <div className="glass-card group h-full rounded-3xl border border-border/60 p-8 transition-all duration-500 hover:border-border/80">
          <div className="flex justify-between items-start mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-colors group-hover:bg-muted/80">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </div>
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight">
            Education
          </h3>
          <div className="mt-4 space-y-2">
            <p className="font-medium">{education.degree}</p>
            <p className="text-sm text-muted">
              {education.honor} · {education.gwa}
            </p>
            <p className="text-sm text-muted">{education.school}</p>
            <p className="font-mono text-xs text-faint">{education.years}</p>
            {education.highSchool && (
              <>
                <div className="my-2 border-t border-border" />
                <p className="font-medium">{education.highSchool.strand}</p>
                <p className="text-sm text-muted">{education.highSchool.school}</p>
                <p className="font-mono text-xs text-faint">{education.highSchool.years}</p>
              </>
            )}
          </div>
        </div>
      </Reveal>

      {/* Location + compliance card */}
      <Reveal delay={0.12} className="md:col-span-1">
        <div className="glass-card group flex h-full flex-col justify-between rounded-3xl border border-border/60 p-8 transition-all duration-500 hover:border-border/80">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-colors group-hover:bg-muted/80">
              <MapPin className="h-5 w-5" aria-hidden />
            </div>
            <p className="font-display text-5xl font-black tracking-tighter">
              GMT+8
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-muted">
              {siteConfig.location}
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
            <ShieldCheck
              className="h-4 w-4 text-accent-ink"
              aria-hidden
            />
            <span className="text-xs text-muted">
              Data-privacy aware (RA 10173)
            </span>
          </div>
        </div>
      </Reveal>

      {/* Social links card */}
      <Reveal delay={0.18} className="md:col-span-1">
        <div className="glass-card group h-full rounded-3xl border border-border/60 p-8 transition-all duration-500 hover:border-border/80">
          <div className="space-y-6">
            {socialLinks
              .filter((link) => link.platform !== "phone")
              .map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-muted transition-colors hover:text-foreground"
                  >
                    <span className="flex items-center gap-3 font-semibold tracking-wide">
                      <Icon className="h-4 w-4" aria-hidden />
                      {link.label}
                    </span>
                    <span className="text-xs text-faint transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                );
              })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
