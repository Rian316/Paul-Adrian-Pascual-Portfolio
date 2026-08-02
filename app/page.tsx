import { ArrowRight } from "lucide-react";
import { siteConfig, siteUrl } from "@/lib/site";
import { projects } from "@/lib/data/projects";
import { socialLinks } from "@/lib/data/social";
import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { Capabilities } from "@/components/home/capabilities";
import { TechStack } from "@/components/home/tech-stack";
import { AboutIntro } from "@/components/home/about-intro";
import { AboutSnapshot } from "@/components/home/about-snapshot";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";
import { CtaBand } from "@/components/contact/cta-band";
import { ButtonLink } from "@/components/ui/button-link";

// Person structured data for richer search results.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  jobTitle: siteConfig.role,
  url: siteUrl,
  worksFor: { "@type": "Organization", name: siteConfig.company },
  address: { "@type": "PostalAddress", addressCountry: "PH" },
  sameAs: socialLinks
    .filter((link) => link.platform !== "email")
    .map((link) => link.href),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Hero />
      <StatsBand />

      <Section id="work">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Work"
            title="Platforms I've shipped"
            description="A few products I've built end-to-end — from data model to production deployment."
          />
          <ButtonLink href="/work" variant="ghost" className="px-0">
            All projects
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <ProjectGrid projects={projects} />
        </div>
      </Section>

      <Section id="stack" className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="How I work"
          title="What I bring to a build"
          description="Three capabilities I lead with — the tool list underneath is the evidence, not the pitch."
        />
        <div className="mt-12">
          <Capabilities />
        </div>
        <div className="mt-6">
          <TechStack />
        </div>
      </Section>

      <Section id="about">
        <SectionHeading
          eyebrow="About"
          title="One engineer, the whole product"
          description="From data model to production — product, security, and the AI — without a team."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <AboutIntro />
            <ButtonLink
              href="/about"
              variant="ghost"
              className="self-start px-0"
            >
              Read more about me
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </ButtonLink>
          </div>
          <AboutSnapshot />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
