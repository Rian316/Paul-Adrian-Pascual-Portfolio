"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { socialLinks } from "@/lib/data/social";
import { ButtonLink } from "@/components/ui/button-link";
import { TechnicalGraph } from "@/components/home/technical-graph";

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
      <div
        aria-hidden
        className="noise pointer-events-none absolute inset-0 opacity-30"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="js-gate relative mx-auto w-full max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
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
              className="mt-6 max-w-2xl text-3xl leading-[1.12] font-bold tracking-tight text-balance sm:text-5xl"
            >
              IT Professional & Full-Stack Developer building modern web
              applications and{" "}
              <span className="text-gradient">AI-powered digital systems.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              I design, build, and deploy production software — from cloud
              infrastructure and databases to AI integrations and secure
              authentication. Currently focused on SaaS platforms, automation,
              and developer tooling.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/work" size="lg">
                View selected work
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="outline">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Let&apos;s connect
              </ButtonLink>
            </motion.div>

            <motion.ul
              variants={item}
              aria-label="Social profiles"
              className="mt-8 flex items-center gap-3"
            >
              {socialLinks.map(({ platform, label, href, icon: Icon }) => (
                <li key={platform}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
                  >
                    <Icon aria-hidden className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={item}
            className="hidden lg:block"
          >
            <TechnicalGraph />
          </motion.div>
        </div>

        {/* Credibility strip */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 text-xs text-muted"
        >
          <span className="font-medium text-foreground">
            BS Information Technology · Cum Laude
          </span>
          <span aria-hidden>·</span>
          <span>Full-Stack Development</span>
          <span aria-hidden>·</span>
          <span>AI Integration</span>
          <span aria-hidden>·</span>
          <span>Cloud & Deployment</span>
          <span aria-hidden>·</span>
          <span>7 Certifications</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
