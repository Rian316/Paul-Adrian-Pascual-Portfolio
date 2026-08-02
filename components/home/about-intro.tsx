import { bio } from "@/lib/data/about";
import { Reveal } from "@/components/ui/reveal";

/** The bio paragraphs (shared home + about). */
export function AboutIntro() {
  return (
    <div className="space-y-5">
      {bio.map((paragraph, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {paragraph}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
