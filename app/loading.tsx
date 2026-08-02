import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

/** Shown while a route (re)loads — skeletons, not a spinner. */
export default function Loading() {
  return (
    <Container className="flex flex-col gap-8 py-16 sm:py-24">
      <div className="max-w-2xl space-y-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-5 w-1/2" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="space-y-4 rounded-2xl border border-border p-6"
          >
            <Skeleton className="aspect-[16/9] w-full" />
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        ))}
      </div>
    </Container>
  );
}
