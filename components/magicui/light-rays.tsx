"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  opacity?: number;
  duration?: number;
}

export default function LightRays({
  className,
  opacity = 1,
  duration = 40,
  ...props
}: LightRaysProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden",
        className
      )}
      style={{ opacity }}
      {...props}
    >
      {/* Primary Ray Layer */}
      <div
        className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_linear_infinite]"
        style={{
          animationDuration: `${duration}s`,
          background: `conic-gradient(from 0deg, transparent 0 340deg, var(--accent-primary) 360deg)`,
          filter: "blur(60px)",
        }}
      />
      
      {/* Secondary Ray Layer (Reverse & Slower) */}
      <div
        className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_linear_infinite_reverse]"
        style={{
          animationDuration: `${duration * 1.5}s`,
          background: `conic-gradient(from 0deg, transparent 0 340deg, var(--accent-secondary) 360deg)`,
          filter: "blur(80px)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
