"use client";

import { Star } from "lucide-react";
import { reviews } from "@/lib/data/reviews";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function ReviewsSection() {
  return (
    <Section id="reviews">
      <SectionHeading
        eyebrow="Testimonials"
        title="Client Reviews"
        description="What clients and collaborators say about working with me."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal key={review.name} delay={i * 0.08}>
            <div className="glass-card group flex h-full flex-col rounded-3xl border border-border/60 p-8 transition-all duration-500 hover:border-border/80">
              {review.rating ? (
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-accent-ink text-accent-ink"
                      aria-hidden
                    />
                  ))}
                </div>
              ) : null}
              <blockquote className="flex-1 text-base leading-relaxed text-muted">
                &ldquo;{review.content}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold">
                  {review.name}
                </p>
                <p className="mt-0.5 text-xs text-faint">{review.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
