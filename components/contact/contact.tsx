"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EMAIL, socialLinks } from "@/lib/data/social";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [announced, setAnnounced] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setAnnounced(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — nothing to do; the email is visible on screen.
    }
  };

  const primary = socialLinks.find((link) => link.platform === "email");
  const others = socialLinks.filter((link) => link.platform !== "email");

  return (
    <div className="space-y-6">
      {primary ? (
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-7">
            <p className="text-xs font-medium tracking-widest text-faint uppercase">
              Prefer email
            </p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                  <primary.icon aria-hidden className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold break-all">
                    {EMAIL}
                  </p>
                  <p className="text-sm text-muted">
                    I read every message — usually within a day.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button
                  variant="outline"
                  onClick={copyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-accent-ink" aria-hidden />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden />
                  )}
                  {copied ? "Copied" : "Copy"}
                </Button>
                <a
                  href={primary.href}
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-contrast transition-all hover:brightness-105"
                >
                  Send email
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
            <p aria-live="polite" className="sr-only">
              {announced && copied ? "Email address copied to clipboard." : ""}
            </p>
          </div>
        </Reveal>
      ) : null}

      <ul className="grid gap-4 sm:grid-cols-3">
        {others.map(({ platform, label, href, icon: Icon, handle }, i) => (
          <li key={platform}>
            <Reveal delay={i * 0.06}>
              <a
                href={href}
                target={platform === "phone" ? undefined : "_blank"}
                rel={platform === "phone" ? undefined : "noopener noreferrer"}
                className={cn(
                  "group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5 shadow-soft",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lift",
                )}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent-ink transition-transform duration-300 group-hover:scale-110">
                  <Icon aria-hidden className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="mt-0.5 block text-sm break-all text-muted">
                    {handle}
                  </span>
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
