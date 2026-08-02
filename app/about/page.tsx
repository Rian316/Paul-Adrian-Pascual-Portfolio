import type { Metadata } from "next";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { AboutIntro } from "@/components/home/about-intro";
import { CareerTimeline } from "@/components/about/career-timeline";
import { Certifications } from "@/components/about/certifications";
import { TechStack } from "@/components/home/tech-stack";

export const metadata: Metadata = {
  title: "About",
  description:
    "Paul Adrian O. Pascual — BS Information Technology (Cum Laude), from GIS-focused systems work at DPWH to solo full-stack and AI integration engineering at Phil Capital Trading Solution Inc.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Paul Pascual",
    description:
      "From GIS-focused systems work to solo full-stack and AI integration engineering.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="From GIS to AI-integrated platforms"
        description={`${siteConfig.role}, based in ${siteConfig.location}.`}
      />

      <Section size="sm">
        <AboutIntro />
        <Reveal>
          <ButtonLink
            href={siteConfig.resumeUrl}
            variant="outline"
            external
            className="mt-8"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download résumé (PDF)
          </ButtonLink>
        </Reveal>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="Career"
          title="The path so far"
          description="A short, factual timeline — most recent first."
        />
        <div className="mt-12 max-w-3xl">
          <CareerTimeline />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & training"
          description="Certifications spanning databases, cloud, cybersecurity, ERP, and process improvement."
        />
        <div className="mt-12">
          <Certifications />
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="Stack"
          title="What I work with"
          description="The tools I reach for across the full stack — frontend through infrastructure and AI."
        />
        <div className="mt-12">
          <TechStack />
        </div>
      </Section>

      <Section size="sm" className="border-t border-border">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading
            title="Let's work together"
            description="Open to freelance projects and collaboration. Tell me what you're building."
          />
          <ButtonLink href="/contact" className="shrink-0">
            Get in touch
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
