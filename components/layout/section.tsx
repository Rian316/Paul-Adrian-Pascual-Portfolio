import * as React from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  /** Adds id anchor (used by nav scrollspy). */
  id?: string;
  /** Applies to the outer <section>. */
  className?: string;
  /** Spacing scale for the vertical rhythm. */
  size?: "sm" | "default" | "lg";
  /** Set false to render without the padded Container. */
  contained?: boolean;
}

export function Section({
  id,
  className,
  size = "default",
  contained = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        size === "sm" && "py-12 sm:py-16",
        size === "default" && "py-16 sm:py-24",
        size === "lg" && "py-20 sm:py-32",
        className,
      )}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
