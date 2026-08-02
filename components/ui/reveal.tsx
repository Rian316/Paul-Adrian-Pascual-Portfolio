"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Animated reveal wrapper (Framer Motion). Respects `prefers-reduced-motion`
 * via `useReducedMotion`. No-JS visitors see fully-visible content because
 * the initial hidden state is only applied on the client.
 */

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the reveal starts. */
  delay?: number;
  /** Vertical travel distance in px (0 = pure fade). */
  y?: number;
  /** Whether to animate once (default) or every time it re-enters. */
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("js-gate will-change-transform", className)}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
