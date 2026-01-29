"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

// 定义插图数据结构
type Illustration = {
  id: number;
  src: string;
  alt: string;
  type: "portrait" | "landscape" | "square" | "large"; // 图片类型：竖屏、横屏、方形、大图
};

// 模拟插图数据
// 使用 Unsplash 图片以便演示布局效果
const ILLUSTRATIONS: Illustration[] = [
  { 
    id: 1, 
    src: "/illustrations/p2.jpg", 
    alt: "Artistic Portrait", 
    type: "portrait" 
  },
  { 
    id: 2, 
    src: "/illustrations/p4.jpg", 
    alt: "Artistic Landscape", 
    type: "landscape" 
  },
  { 
    id: 3, 
    src: "/illustrations/p3.jpg", 
    alt: "Abstract Square", 
    type: "square" 
  },
  { 
    id: 4, 
    src: "/illustrations/p1.jpg", 
    alt: "Large Feature", 
    type: "large" 
  },
  { 
    id: 5, 
    src: "/illustrations/p7.jpg", 
    alt: "Nature Portrait", 
    type: "portrait" 
  },
  { 
    id: 6, 
    src: "/illustrations/p5.jpeg", 
    alt: "Color Landscape", 
    type: "landscape" 
  },
  { 
    id: 7, 
    src: "/illustrations/p6.jpg", 
    alt: "Minimal Square", 
    type: "square" 
  },
  { 
    id: 8, 
    src: "/illustrations/p8.jpg", 
    alt: "Neon Portrait", 
    type: "portrait" 
  },
];

export default function IllustrationGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedImage = ILLUSTRATIONS.find(item => item.id === selectedId);

  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            动漫插画墙
          </h2>
          <div className="w-20 h-1 bg-accent-secondary mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70">
            "爱世间温柔万物，沿途为晚霞停留"
          </p>
        </motion.div>

        {/* 
          Bento Grid Layout 
          使用 grid-auto-flow: dense 来自动填充空隙
          auto-rows 定义基础行高
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {ILLUSTRATIONS.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`image-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-glass-border bg-glass-bg cursor-pointer",
                // 根据类型设置跨行/跨列
                item.type === "portrait" && "row-span-2",
                item.type === "landscape" && "col-span-2",
                item.type === "large" && "col-span-2 row-span-2",
                item.type === "square" && "col-span-1 row-span-1"
              )}
            >
              {/* 占位符 */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 text-foreground/20">
                <ImageIcon size={32} />
              </div>
              
              <motion.img
                layoutId={`image-${item.id}`}
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                   e.currentTarget.style.display = "none";
                }}
              />
              
              {/* 悬停遮罩与信息 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="text-white w-8 h-8 drop-shadow-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              layoutId={`image-container-${selectedImage.id}`}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`image-${selectedImage.id}`}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
