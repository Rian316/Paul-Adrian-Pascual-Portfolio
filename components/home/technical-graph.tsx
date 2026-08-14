"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { id: "ai", label: "AI", x: 300, y: 40 },
  { id: "nextjs", label: "Next.js", x: 160, y: 130 },
  { id: "cloud", label: "Cloud", x: 440, y: 130 },
  { id: "prisma", label: "Prisma", x: 100, y: 230 },
  { id: "typescript", label: "TypeScript", x: 240, y: 230 },
  { id: "docker", label: "Docker", x: 380, y: 230 },
  { id: "postgres", label: "PostgreSQL", x: 500, y: 230 },
] as const;

const EDGES: [string, string][] = [
  ["ai", "nextjs"],
  ["ai", "cloud"],
  ["nextjs", "prisma"],
  ["nextjs", "typescript"],
  ["cloud", "docker"],
  ["cloud", "postgres"],
  ["prisma", "postgres"],
  ["typescript", "nextjs"],
  ["docker", "postgres"],
];

function getNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function TechnicalGraph() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-[300px] w-full max-w-[600px]">
      <svg
        viewBox="0 0 600 280"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* Edges */}
        {EDGES.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className="stroke-border-strong"
              strokeWidth="1.5"
              initial={reduceMotion ? { opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
              animate={reduceMotion ? { opacity: 0.4 } : { pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeOut" }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <motion.g
            key={node.id}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="28"
              className="fill-surface stroke-border-strong"
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-foreground text-[11px] font-medium"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
