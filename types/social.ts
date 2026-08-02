import type { IconType } from "react-icons";

export type SocialPlatform = "github" | "linkedin" | "email" | "phone";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  icon: IconType;
  /** Short human-readable handle (username, email, or phone number). */
  handle: string;
}
