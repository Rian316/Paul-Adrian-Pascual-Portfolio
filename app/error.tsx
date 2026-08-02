"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

/** Client error boundary fallback — lets the user retry after a failure. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-semibold tracking-widest text-accent-ink uppercase">
        Something went wrong
      </p>
      <h1 className="max-w-xl text-2xl font-bold text-balance sm:text-3xl">
        The page hit an unexpected error.
      </h1>
      <p className="max-w-md text-muted">
        It&apos;s not you, it&apos;s us. Try reloading — if it keeps happening,
        you can reach me directly through the contact page.
      </p>
      <Button onClick={reset} size="lg">
        Try again
      </Button>
    </div>
  );
}
