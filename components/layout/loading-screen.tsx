"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

/**
 * Wendev-style branded loading screen.
 * Shows on first visit with logo animation + progress bar.
 * Disappears once loading is complete.
 */
export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Background blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
            <div className="bg-blobs absolute inset-0" />
          </div>

          {/* Logo + progress */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Animated logo/text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {siteConfig.shortName}
              </h1>
              <p className="mt-2 text-sm font-medium tracking-widest text-muted uppercase">
                {siteConfig.role}
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="relative h-1 w-64 overflow-hidden rounded-full bg-muted/30">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-accent via-accent-bright to-accent-ink shadow-[0_0_15px_rgba(15,118,110,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>

            {/* Subtle loading indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs tracking-widest text-muted/60"
            >
              Loading...
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
