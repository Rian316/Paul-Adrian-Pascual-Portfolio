"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageSquare, X, Mail, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { useState } from "react";
import { socialLinks } from "@/lib/data/social";

/** Floating contact FAB — chat icon with green "online" dot, expands to show contact options. */
export function ContactFab() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      href: socialLinks.find((l) => l.platform === "email")?.href ?? "#",
      external: true,
    },
    {
      icon: Phone,
      label: "Phone",
      href: socialLinks.find((l) => l.platform === "phone")?.href ?? "#",
      external: false,
    },
    {
      icon: SiGithub,
      label: "GitHub",
      href: socialLinks.find((l) => l.platform === "github")?.href ?? "#",
      external: true,
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      href: socialLinks.find((l) => l.platform === "linkedin")?.href ?? "#",
      external: true,
    },
  ];

  return (
    <div className="fixed right-5 bottom-20 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-2xl border border-border/60 p-4 shadow-lift"
          >
            <p className="mb-3 px-1 text-xs font-semibold tracking-widest text-muted uppercase">
              Get in touch
            </p>
            <ul className="space-y-1">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <li key={method.label}>
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      <Icon className="h-4 w-4 text-muted" aria-hidden />
                      {method.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 border-t border-border pt-3">
              <a
                href="/contact"
                className="flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-contrast transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Send a message
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        onClick={() => setOpen(!open)}
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-contrast shadow-lift transition-colors hover:bg-accent/90"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" aria-hidden />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="h-6 w-6" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
        {!open ? (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500" />
          </span>
        ) : null}
      </motion.button>
    </div>
  );
}
