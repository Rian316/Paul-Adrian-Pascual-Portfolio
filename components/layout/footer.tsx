import { siteConfig } from "@/lib/site";
import { socialLinks } from "@/lib/data/social";
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

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ platform, label, href, icon: Icon }) => (
              <li key={platform}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
                >
                  <Icon aria-hidden className="h-4.5 w-4.5" />
                </a>
              </li>
            ))}
          </ul>
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
