"use client";

import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { MusicProvider } from "@/context/MusicContext";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import MusicPlayer from "@/components/MusicPlayer";
import { ScrollBackground } from "@/components/ScrollBackground";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ActiveSectionProvider>
        <MusicProvider>
          <ScrollBackground />
          {children}
          <MusicPlayer />
        </MusicProvider>
      </ActiveSectionProvider>
    </ThemeProvider>
  );
}
