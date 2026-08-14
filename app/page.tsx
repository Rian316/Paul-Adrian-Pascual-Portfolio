import { ArrowRight } from "lucide-react";
import { siteConfig, siteUrl } from "@/lib/site";
import { projects } from "@/lib/data/projects";
import { socialLinks } from "@/lib/data/social";
import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { Capabilities } from "@/components/home/capabilities";
import { TechStack } from "@/components/home/tech-stack";
import { TechPills } from "@/components/home/tech-pills";
import { BentoAbout } from "@/components/home/bento-about";
import { ProfessionalHighlights } from "@/components/home/professional-highlights";
import { ImpactResults } from "@/components/home/impact-results";
import { ExperienceSnapshot } from "@/components/home/experience-snapshot";
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
            description="Products I've built end-to-end — from data model to production deployment."
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

      <Section id="impact" className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="Impact & Results"
          title="By the numbers"
          description="Truthful metrics — no invented users, revenue, or percentages."
        />
        <div className="mt-12">
          <ImpactResults />
        </div>
      </Section>

      <Section id="stack">
        <SectionHeading
          eyebrow="How I work"
          title="What I bring to a build"
          description="Three capabilities I lead with — the tool list underneath is the evidence, not the pitch."
        />
        <div className="mt-12">
          <Capabilities />
        </div>
        <div className="mt-8">
          <TechStack />
        </div>
        <div className="mt-6">
          <TechPills />
        </div>
      </Section>

      <Section id="highlights" className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="Professional Highlights"
          title="Why work with me"
          description="Credentials, certifications, and engineering principles that define my work."
        />
        <div className="mt-12">
          <ProfessionalHighlights />
        </div>
      </Section>

      <Section id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Professional experience across freelancing and government systems."
        />
        <div className="mt-12 max-w-3xl">
          <ExperienceSnapshot />
        </div>
      </Section>

      <Section id="about">
        <SectionHeading
          eyebrow="About"
          title="One engineer, the whole product"
          description="From data model to production — product, security, and the AI — without a team."
        />
        <div className="mt-10">
          <BentoAbout />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
