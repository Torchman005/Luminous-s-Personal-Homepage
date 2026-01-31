"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useActiveSection } from "@/context/ActiveSectionContext";

interface SectionWatcherProps {
  id: number;
  children: React.ReactNode;
  threshold?: number;
}

export default function SectionWatcher({ id, children, threshold = 0.3 }: SectionWatcherProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-30% 0px -30% 0px", // Focus on the center 40% of the screen
    amount: threshold 
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <div ref={ref} className="relative w-full">
      {children}
    </div>
  );
}
