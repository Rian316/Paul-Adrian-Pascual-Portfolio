import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

/** Closing call-to-action band (home + about). */
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
              Have a product to own — or an AI to wire in?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              I take products from data model to production, solo, end to end.
              Let&apos;s talk about what you&apos;re building.
            </p>
            <ButtonLink href="/contact" size="lg" className="mt-9">
              Get in touch
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
