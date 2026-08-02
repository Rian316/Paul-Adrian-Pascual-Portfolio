import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm font-semibold tracking-widest text-accent-ink uppercase">
        404
      </p>
      <h1 className="max-w-xl text-3xl font-bold text-balance sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="max-w-md text-muted">
        The link might be broken, or the page may have moved. Head back to the
        homepage to see what I&apos;ve been building.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/work" variant="outline">
          View my work
        </ButtonLink>
      </div>
    </div>
  );
}
