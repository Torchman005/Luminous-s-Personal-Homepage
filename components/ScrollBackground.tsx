"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import LightRays from "@/components/magicui/light-rays"
import Ripple from "@/components/magicui/ripple"
import { useActiveSection } from "@/context/ActiveSectionContext"

// 深色模式背景
const DARK_IMAGES = [
  {
    type: "gradient", // 首页占位，实际显示 LightRays
    value: "transparent", 
    src: ""
  },
  {
    type: "gradient", 
    value: "linear-gradient(to bottom right, #4c1d95, #831843)",
    src: "/backgrounds/dark-1.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #064e3b, #14532d)",
    src: "/backgrounds/dark-2.png"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #450a0a, #7f1d1d)",
    src: "/backgrounds/dark-3.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #172554, #1e3a8a)",
    src: "/backgrounds/dark-4.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #0f172a, #1e293b)",
    src: "/backgrounds/dark-5.jpeg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #1c1917, #334155)",
    src: "/backgrounds/dark-6.jpg"
  }
]

// 浅色模式背景
const LIGHT_IMAGES = [
  {
    type: "gradient", // 首页占位，实际显示 LightRays
    value: "transparent",
    src: ""
  },
  {
    type: "gradient", 
    value: "linear-gradient(to bottom right, #e0f2fe, #f0f9ff)", // Sky Blue
    src: "/backgrounds/light-1.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #f0fdf4, #dcfce7)", // Green/Mint
    src: "/backgrounds/light-2.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #f5f3ff, #ede9fe)", // Violet
    src: "/backgrounds/light-3.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #fdf4ff, #fae8ff)", // Pink/Fuchsia for Music
    src: "/backgrounds/light-4.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #eff6ff, #dbeafe)", // Blue
    src: "/backgrounds/light-5.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #fafafa, #f4f4f5)", // Gray
    src: "/backgrounds/light-6.jpg"
  }
]

export function ScrollBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { activeSection } = useActiveSection()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  
  const images = resolvedTheme === 'dark' ? DARK_IMAGES : LIGHT_IMAGES
  const currentBg = images[Math.min(activeSection, images.length - 1)]

  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none bg-background overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {activeSection === 0 ? (
            // 首页特殊处理
            <div className="absolute inset-0 w-full h-full">
              {resolvedTheme === 'dark' ? (
                <>
                 <LightRays 
                  opacity={0.3} 
                  duration={40}
                  className="opacity-50 dark:opacity-30"
                />
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-primary/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-secondary/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                </>
              ) : (
                <Ripple 
                  mainCircleSize={200}
                  mainCircleOpacity={0.4}
                  numCircles={8}
                />
              )}
            </div>
          ) : (
            // 普通页面背景图
            <>
              <div 
                className="absolute inset-0 w-full h-full" 
                style={{ background: currentBg?.value }} 
              />
              {currentBg?.src && (
                <img 
                  src={currentBg.src}
                  alt={`Background ${activeSection}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              )}
              <div className={`absolute inset-0 ${resolvedTheme === 'dark' ? 'bg-black/40' : 'bg-white/30'}`} />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
