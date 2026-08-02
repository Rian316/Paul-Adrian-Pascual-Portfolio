import * as React from "react";
import Link from "next/link";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Anchor-styled link. External/internal targets are handled by `href`. */
function ButtonLink({
  className,
  variant,
  size,
  href,
  external = false,
  ...props
}: React.ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    /** Render a plain <a> with rel for off-site links. */
    external?: boolean;
  }) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (external || /^https?:|^mailto:|^tel:/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  }

  return <Link href={href} className={classes} {...props} />;
}

export { ButtonLink };
