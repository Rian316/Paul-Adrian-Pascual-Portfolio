import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold">
              {siteConfig.shortName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {siteConfig.role} · {siteConfig.location} ({siteConfig.timezone})
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/Rian316"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
              >
                <SiGithub className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/in/paul-adrian-pascual-a87866368/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
              >
                <FaLinkedinIn className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="mailto:paulpascual316@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
              >
                <LuMail className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-accent-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent-ink"
            >
              Resume
            </a>
            <Link
              href="/work"
              className="text-sm text-muted transition-colors hover:text-accent-ink"
            >
              All Projects
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-faint sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
