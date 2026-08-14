"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/lib/hooks/use-scroll-spy";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const HOME_SECTIONS = ["work", "stack", "about"] as const;

/** Map home sections to the nav item they belong under. */
const SECTION_TO_NAV: Record<(typeof HOME_SECTIONS)[number], string> = {
  work: "/work",
  stack: "/work",
  about: "/about",
};

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(pathname === "/" ? HOME_SECTIONS : []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const activeHref = (() => {
    if (pathname === "/" && activeSection) {
      return SECTION_TO_NAV[activeSection] ?? null;
    }
    return pathname;
  })();

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/60">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-sm font-bold text-accent-contrast transition-transform group-hover:scale-105">
            PP
          </span>
          <span className="hidden text-sm font-semibold sm:block">
            {siteConfig.shortName}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.navItems.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-accent-ink"
                      : "text-muted hover:bg-accent-soft hover:text-foreground",
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-accent-ink md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 z-[-1] bg-foreground/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass overflow-hidden border-t border-border/60 md:hidden"
            >
              <ul className="mx-auto max-w-6xl space-y-1 px-5 py-4 sm:px-8">
                {siteConfig.navItems.map((item) => {
                  const isActive = item.href === activeHref;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                          isActive
                            ? "bg-accent-soft text-accent-ink"
                            : "text-foreground hover:bg-surface-2",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
