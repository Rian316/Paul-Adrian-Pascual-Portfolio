"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view (scrollspy).
 * Returns `null` before any section is scrolled into view.
 */
export function useScrollSpy<T extends string>(
  ids: readonly T[],
  offset = 120,
): T | null {
  const [activeId, setActiveId] = useState<T | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id as T);
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
