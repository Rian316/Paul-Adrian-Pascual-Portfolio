/**
 * Shape of a portfolio project.
 *
 * Content lives in `lib/data/projects.ts`. This interface is the single source
 * of truth — the cards on `/work` and the detail pages at `/work/[slug]` are
 * both driven by it.
 */
export type ProjectStatus = "production" | "in-development";

export interface Project {
  /** URL segment, e.g. `colabhealth` → /work/colabhealth */
  slug: string;
  /** Display name. */
  title: string;
  /** One-line hook shown on the card. */
  tagline: string;
  /** 1–2 sentence summary shown on the card and in metadata. */
  description: string;
  /** Longer narrative shown only on the detail page. */
  overview: string;
  /** Bullet highlights shown on the detail page. */
  highlights: string[];
  /** What Paul did on the project. */
  role: string;
  /** Tech used — plain strings so data has no UI dependency. */
  techStack: string[];
  status: ProjectStatus;
  /** Public, live URL. Optional for unreleased work. */
  liveUrl?: string;
  /** Source repository. Optional — most client work stays private. */
  repoUrl?: string;
  /** Path to a cover image under /public (placeholder covers ship here). */
  imageUrl: string;
  /** Two hex stops used for the generated gradient accents per project. */
  accent: {
    from: string;
    to: string;
  };
  /** Display year / timeframe. */
  timeframe: string;
}
