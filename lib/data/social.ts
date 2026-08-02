import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuMail, LuPhone } from "react-icons/lu";
import type { SocialLink, SocialPlatform } from "@/types/social";

/** Contact details. Single source of truth for the whole site. */
export const EMAIL = "paulpascual316@gmail.com";
export const PHONE_DISPLAY = "0993 748 2681";
export const PHONE_TEL = "+639937482681"; // PH mobile in E.164

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/Rian316",
    icon: SiGithub,
    handle: "@Rian316",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-adrian-pascual-a87866368/",
    icon: FaLinkedinIn,
    handle: "paul-adrian-pascual",
  },
  {
    platform: "email",
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: LuMail,
    handle: EMAIL,
  },
  {
    platform: "phone",
    label: "Phone",
    href: `tel:${PHONE_TEL}`,
    icon: LuPhone,
    handle: PHONE_DISPLAY,
  },
];

export const socialByPlatform = Object.fromEntries(
  socialLinks.map((link) => [link.platform, link]),
) as Record<SocialPlatform, SocialLink>;
