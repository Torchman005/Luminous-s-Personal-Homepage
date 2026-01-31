"use client";

import React, { createContext, useContext, useState } from "react";

interface ActiveSectionContextType {
  activeSection: number;
  setActiveSection: (index: number) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error("useActiveSection must be used within a ActiveSectionProvider");
  }
  return context;
}
