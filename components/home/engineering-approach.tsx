"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  Layers,
  Code2,
  Plug,
  FlaskConical,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    label: "Discover",
    description: "Understand the problem, users, and constraints before writing code.",
  },
  {
    icon: Layers,
    label: "Architect",
    description: "Design data models, system boundaries, and technology choices.",
  },
  {
    icon: Code2,
    label: "Build",
    description: "Implement with TypeScript, type safety, and clean component architecture.",
  },
  {
    icon: Plug,
    label: "Integrate",
    description: "Wire AI, authentication, databases, and third-party services.",
  },
  {
    icon: FlaskConical,
    label: "Test",
    description: "Validate security, performance, and edge cases before shipping.",
  },
  {
    icon: Rocket,
    label: "Deploy",
    description: "Ship to production with CI/CD, monitoring, and rollback readiness.",
  },
] as const;

export function EngineeringApproach() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Connection line */}
      <div className="absolute top-6 left-6 hidden h-[calc(100%-3rem)] w-px bg-border md:block" />

      <div className="grid gap-6 md:gap-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative flex items-start gap-4 md:gap-6"
            >
              {/* Node */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent-ink transition-all duration-300 group-hover:border-accent group-hover:shadow-soft">
                <Icon className="h-5 w-5" aria-hidden />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-display text-base font-semibold">
                  {step.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>

              {/* Step number */}
              <span
                className="hidden font-mono text-xs text-faint md:block"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
