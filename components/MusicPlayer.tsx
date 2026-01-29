"use client";

import { useState, useRef, useEffect } from "react";
import { Music, X, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  
  // 网易云音乐歌单 ID
  const PLAYLIST_ID = "13796951407";

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence mode="wait">
        {isMinimized ? (
          <motion.button
            key="minimized"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsMinimized(false)}
            className="w-12 h-12 rounded-full bg-glass-bg border border-glass-border backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-glass-highlight transition-colors group"
          >
            <Music className="w-5 h-5 text-foreground/80 group-hover:text-accent-primary transition-colors animate-spin-slow" />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ width: 48, height: 48, opacity: 0 }}
            animate={{ width: 300, height: 450, opacity: 1 }}
            exit={{ width: 48, height: 48, opacity: 0 }}
            className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-glass-border bg-glass-highlight/20">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <Music className="w-4 h-4 text-accent-primary" />
                <span>背景音乐</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-foreground/60 hover:text-foreground"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-black/5">
              <iframe
                src={`//music.163.com/outchain/player?type=0&id=${PLAYLIST_ID}&auto=1&height=430`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
