"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const FocusCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "rounded-2xl relative bg-glass-card border border-glass-border overflow-hidden transition-all duration-300 ease-out w-full h-full",
        hovered ? "scale-[1.02] shadow-2xl border-accent-primary/30" : "scale-100 shadow-xl",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 transition-opacity duration-300 pointer-events-none z-10",
          hovered ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
};
