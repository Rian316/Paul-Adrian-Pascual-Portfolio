import type { IconType } from "react-icons";

export interface TechStackItem {
  name: string;
  /** react-icons (simple-icons brand mark) or a Lucide glyph for un-branded tools. */
  icon: IconType;
  /** Optional one-line note shown in a tooltip / caption. */
  note?: string;
}

export interface TechCategory {
  category: string;
  caption?: string;
  items: TechStackItem[];
}
