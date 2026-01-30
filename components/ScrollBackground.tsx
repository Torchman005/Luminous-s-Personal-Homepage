"use client"

import { useScroll, useTransform, motion, MotionValue } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

// 默认背景配置
// 1. 将图片文件（如 .jpg, .png）放入 public/backgrounds 文件夹
// 2. 修改下方的 DARK_IMAGES 和 LIGHT_IMAGES 数组，将 src 改为 "/backgrounds/您的文件名.jpg"

// 深色模式背景
const DARK_IMAGES = [
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #1a1b4b, #312e81)", // 深靛蓝
    src: "/backgrounds/dark-1.jpg"
  },
  {
    type: "gradient", 
    value: "linear-gradient(to bottom right, #4c1d95, #831843)", // 深紫 -> 深红
    src: "/backgrounds/dark-2.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #064e3b, #14532d)", // 深绿
    src: "/backgrounds/dark-3.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #f3db7a, #f3db7a)", // 黄色
    src: "/backgrounds/dark-4.jpg"
  }
]

// 浅色模式背景
const LIGHT_IMAGES = [
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #e0e7ff, #cffafe)", // 浅蓝 -> 浅青
    src: "/backgrounds/light-1.jpg"
  },
  {
    type: "gradient", 
    value: "linear-gradient(to bottom right, #f3e8ff, #fce7f3)", // 浅紫 -> 浅粉
    src: "/backgrounds/light-2.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #d1fae5, #fef08a)", // 浅绿 -> 浅黄
    src: "/backgrounds/light-3.jpg"
  },
  {
    type: "gradient",
    value: "linear-gradient(to bottom right, #f3db7a, #f3db7a)", // 黄色
    src: "/backgrounds/light-4.jpg"
  }
]

// 独立的背景层组件
function BackgroundLayer({ 
  bg, 
  index, 
  total, 
  scrollYProgress, 
  theme 
}: { 
  bg: any, 
  index: number, 
  total: number, 
  scrollYProgress: MotionValue<number>, 
  theme: string | undefined 
}) {
  // 计算当前图的淡入区间
  const transitionCount = total - 1
  const segmentSize = 1 / transitionCount
  const fadeStart = (index - 1) * segmentSize
  const fadeEnd = index * segmentSize

  // 1. Hero 背景 (index === 0) 清晰不透明
  // 2. 后续背景 (index > 0) 模糊，类似毛玻璃
  // 3. 随着页面下拉，后续背景从底部逐渐浮现 (使用 y 轴变换 和 opacity)

  const opacity = useTransform(
    scrollYProgress,
    index === 0 ? [0, segmentSize] : [fadeStart, fadeEnd],
    index === 0 ? [1, 0] : [0, 1]
  );

  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [fadeStart, fadeEnd],
    index === 0 ? ["0%", "20%"] : ["0%", "0%"]
  );
  
  const blurValue = index === 0 ? "0px" : "8px";

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 w-full h-full transition-opacity duration-500"
    >
      {/* 渐变层 */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ background: bg.value }} 
      />
      
      {/* 图片层 */}
      <img 
         src={bg.src}
         alt={`Background ${index + 1}`}
         className="absolute inset-0 w-full h-full object-cover"
         style={{ filter: `blur(${blurValue})` }}
      />
      
      {/* 遮罩层 */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/10'}`} />
    </motion.div>
  )
}

export function ScrollBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll()
  
  // 避免服务端渲染不匹配
  if (!mounted) return null
  
  const images = theme === 'dark' ? DARK_IMAGES : LIGHT_IMAGES

  return (
    <div 
      className="fixed inset-0 z-[-1] w-full h-full pointer-events-none transition-colors duration-500"
    >
      {images.map((bg, index) => (
        <BackgroundLayer
          key={index}
          bg={bg}
          index={index}
          total={images.length}
          scrollYProgress={scrollYProgress}
          theme={theme}
        />
      ))}
    </div>
  )
}
