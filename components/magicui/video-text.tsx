"use client";

import { cn } from "@/lib/utils";
import { useId } from "react";

interface VideoTextProps {
  text: string;
  src: string;
  className?: string;
}

export default function VideoText({ text, src, className }: VideoTextProps) {
  const maskId = useId();
  
  return (
    <div className={cn("relative w-full flex items-center justify-center", className)}>
      <svg
        className="w-full h-full pointer-events-none"
        viewBox="0 0 1200 250"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              className="font-bold tracking-tighter"
              style={{ fontSize: "180px", fontFamily: "inherit" }}
            >
              {text}
            </text>
          </mask>
        </defs>
        <foreignObject x="0" y="0" width="100%" height="100%" mask={`url(#${maskId})`}>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={src}
          />
        </foreignObject>
      </svg>
    </div>
  );
}
