import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes without conflicts (shadcn/ui convention). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a phone display number into an E.164 tel: href. */
export function toTelHref(display: string): string {
  return `tel:${display.replace(/\s/g, "")}`;
}
