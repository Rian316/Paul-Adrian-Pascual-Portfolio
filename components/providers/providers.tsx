"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/** Global providers. next-themes applies `dark` class on <html> with no FOUC. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
