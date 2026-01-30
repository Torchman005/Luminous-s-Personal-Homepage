"use client";

import { useState } from "react";
import { Music, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isMinimized, setIsMinimized] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  
  // 网易云音乐歌单 ID
  const PLAYLIST_ID = "13796951407";

  const handleOpen = () => {
    setIsMinimized(false);
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Minimized Button */}
      <motion.button
        animate={{
          opacity: isMinimized ? 1 : 0,
          scale: isMinimized ? 1 : 0,
          pointerEvents: isMinimized ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        onClick={handleOpen}
        className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-glass-bg border border-glass-border backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-glass-highlight transition-colors group z-20"
      >
        <Music className="w-5 h-5 text-foreground/80 group-hover:text-accent-primary transition-colors animate-spin-slow" />
      </motion.button>

      {/* Expanded Player */}
      <motion.div
        animate={{
          opacity: isMinimized ? 0 : 1,
          scale: isMinimized ? 0 : 1,
          y: isMinimized ? 24 : 0,
          x: isMinimized ? -24 : 0,
          pointerEvents: isMinimized ? "none" : "auto",
        }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-[300px] h-[500px] bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col origin-bottom-left"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-glass-border bg-glass-highlight/20">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
            <Music className="w-4 h-4 text-accent-primary" />
            <span>Music</span>
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
          {hasStarted && (
            <iframe
              src={`https://music.163.com/outchain/player?type=0&id=${PLAYLIST_ID}&auto=1&height=430`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-full"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
