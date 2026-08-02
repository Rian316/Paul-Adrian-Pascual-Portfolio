"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Floating back-to-top button, appears after scrolling past the fold. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduceMotion ? "auto" : "smooth",
            })
          }
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full",
            "border border-border-strong bg-surface text-foreground shadow-lift",
            "transition-colors hover:border-accent hover:text-accent-ink",
          )}
        >
          <ArrowUp className="h-5 w-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
