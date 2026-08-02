"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectCoverProps {
  src: string;
  alt: string;
  accent: { from: string; to: string };
  className?: string;
}

/** Optimized cover image with a gradient placeholder + skeleton until loaded. */
export function ProjectCover({
  src,
  alt,
  accent,
  className,
}: ProjectCoverProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-[16/9] overflow-hidden bg-surface-2",
        className,
      )}
    >
      {/* Static gradient fallback (also acts as the SVG backdrop). */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, ${accent.from}22, ${accent.to}33)`,
        }}
      />
      {!loaded ? <Skeleton className="absolute inset-0 rounded-none" /> : null}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={false}
        className={cn(
          "object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
