import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { Contact } from "@/components/contact/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Paul Adrian O. Pascual — full-stack developer and AI integration engineer in the Philippines.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Paul Pascual",
    description:
      "Get in touch — full-stack development and AI integration work.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Have a project, a role, or an idea to discuss? The fastest way to reach me is email — I read every message."
      />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <Contact />
        </div>
      </Container>
    </>
  );
}
