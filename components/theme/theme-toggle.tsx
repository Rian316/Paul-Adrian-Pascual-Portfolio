"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/hooks/use-mounted";

/** Light/dark/system theme switcher. Rendered after mount to avoid hydration mismatch. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-accent-ink focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? (isDark ? "moon" : "sun") : "sun"}
          initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
          transition={{ duration: 0.18 }}
          className="inline-flex"
        >
          {mounted && isDark ? (
            <Moon className="h-5 w-5" aria-hidden />
          ) : (
            <Sun className="h-5 w-5" aria-hidden />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
