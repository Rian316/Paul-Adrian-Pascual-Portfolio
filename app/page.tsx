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
import { ExperienceSnapshot } from "@/components/home/experience-snapshot";
import { EngineeringApproach } from "@/components/home/engineering-approach";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";
import { CtaBand } from "@/components/contact/cta-band";
import { ButtonLink } from "@/components/ui/button-link";

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

      {/* Selected Work */}
      <Section id="work">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="What I've built"
            description="Production and in-progress platforms — each one taken from data model to deployment."
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

      {/* Capabilities */}
      <Section id="capabilities" className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="What I Build"
          title="Capabilities"
          description="The categories of work I take on — each backed by real project experience."
        />
        <div className="mt-12">
          <Capabilities />
        </div>
      </Section>

      {/* Engineering Approach */}
      <Section id="approach">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="How I Work"
            title="Engineering approach"
            description="I think about software as a system — not just individual screens. Here's how I move from problem to production."
          />
          <EngineeringApproach />
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Professional experience across freelancing and government systems."
        />
        <div className="mt-12 max-w-3xl">
          <ExperienceSnapshot />
        </div>
      </Section>

      {/* Tech Stack */}
      <Section id="stack">
        <SectionHeading
          eyebrow="Technology"
          title="What I work with"
          description="The tools and technologies I use across the full stack."
        />
        <div className="mt-10">
          <TechStack />
        </div>
        <div className="mt-6">
          <TechPills />
        </div>
      </Section>

      {/* Highlights */}
      <Section id="highlights" className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="Highlights"
          title="Credentials & certifications"
          description="Education, certifications, and engineering principles."
        />
        <div className="mt-12">
          <ProfessionalHighlights />
        </div>
      </Section>

      {/* About */}
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
