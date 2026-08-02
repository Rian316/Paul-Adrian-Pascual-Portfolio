"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { socialLinks } from "@/lib/data/social";
import { ButtonLink } from "@/components/ui/button-link";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute inset-0"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="js-gate relative mx-auto w-full max-w-6xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted shadow-soft"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {siteConfig.availability}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl"
        >
          I build production-ready software{" "}
          <span className="text-gradient">powered by AI.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {siteConfig.heroSub}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <ButtonLink href="/work" size="lg">
            View my work
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <ButtonLink
            href={siteConfig.resumeUrl}
            size="lg"
            variant="outline"
            external
          >
            <Download className="h-4 w-4" aria-hidden />
            Download résumé
          </ButtonLink>
        </motion.div>

        <motion.ul
          variants={item}
          aria-label="Social profiles"
          className="mt-10 flex items-center gap-3"
        >
          {socialLinks.map(({ platform, label, href, icon: Icon }) => (
            <li key={platform}>
              <a
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
              >
                <Icon aria-hidden className="h-5 w-5" />
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={item}
          className="mt-12 inline-flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-muted shadow-soft"
        >
          <Sparkles className="h-4 w-4 text-accent-ink" aria-hidden />
          <span className="font-medium text-foreground">
            {siteConfig.heroBadge.title}
          </span>
          <span aria-hidden>·</span>
          <span>{siteConfig.heroBadge.focus}</span>
          <span aria-hidden>·</span>
          <span>{siteConfig.heroBadge.location}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
