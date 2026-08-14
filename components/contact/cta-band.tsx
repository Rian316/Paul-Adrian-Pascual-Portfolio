import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-50"
      />
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute inset-0"
      />
      <Container className="relative py-20 sm:py-28">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="text-sm font-semibold tracking-widest text-accent-ink uppercase">
              {siteConfig.availability}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              A good project starts with a clear problem. I&apos;m interested in
              building practical software, AI-powered applications, and systems
              that make real workflows better.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                <Mail className="h-4 w-4" aria-hidden />
                Email me
              </ButtonLink>
              <a
                href="https://www.linkedin.com/in/paul-adrian-pascual-a87866368/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent-ink"
              >
                <FaLinkedinIn className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
              <a
                href="https://github.com/Rian316"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent-ink"
              >
                <SiGithub className="h-4 w-4" aria-hidden />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
