"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "dark" ? "light" : "dark"
    
    // 如果浏览器不支持 View Transitions API，直接切换
    if (!document.startViewTransition) {
      setTheme(newTheme)
      return
    }

    // 切换逻辑：从点击位置扩散
    const button = buttonRef.current
    if (!button) {
      setTheme(newTheme)
      return
    }

    const rect = button.getBoundingClientRect()
    // 计算圆心（按钮中心）
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    // 计算最大半径（从圆心到屏幕最远角的距离）
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    // 开始视图转换
    const transition = document.startViewTransition(() => {
      setTheme(newTheme)
    })

    // 等待伪元素创建完成后执行动画
    transition.ready.then(() => {
      // 定义剪裁路径动画
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      // 在新视图上执行动画（如果是切换到暗色，则是在 dark view 上扩撒；如果是切到亮色，则是在 light view 上扩散）
      // 注意：View Transition API 的默认行为是 old 视图淡出，new 视图淡入。
      // 需要禁用默认的淡入淡出，改为使用 clip-path 动画。
      // 具体的 CSS 动画控制通常在全局 CSS 中定义，但这里我们使用 JS 动画 API (animate) 来精确控制坐标
      
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          // 指定要动画化的伪元素
          pseudoElement: "::view-transition-new(root)",
        }
      )
    })
  }

  if (!mounted) {
    return (
      <button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="relative p-2 rounded-md text-gray-400 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors w-9 h-9 flex items-center justify-center overflow-hidden group"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 h-full w-full rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 h-full w-full rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

