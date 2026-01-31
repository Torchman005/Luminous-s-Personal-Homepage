"use client";

"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Minimize2, Play, Pause, SkipBack, SkipForward, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/context/MusicContext";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function MusicPlayer() {
  const [isMinimized, setIsMinimized] = useState(true);
  const playerRef = useRef<HTMLDivElement>(null);
  const { currentSong, isPlaying, togglePlay, nextSong, prevSong, progress, duration, seek } = useMusic();

  // Auto-open when song starts playing
  useEffect(() => {
    if (isPlaying && currentSong) {
        setIsMinimized(false);
    }
  }, [isPlaying, currentSong]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (playerRef.current && !playerRef.current.contains(event.target as Node) && !isMinimized) {
        setIsMinimized(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMinimized]);

  const handleOpen = () => {
    setIsMinimized(false);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!currentSong) {
      // Show a placeholder or nothing if no song is selected
      // But user wants to see the player to open it potentially?
      // Let's show the minimized button at least
  }

  return (
    <div ref={playerRef} className="fixed bottom-4 left-4 z-50">
      {/* Minimized Button */}
      <motion.button
        animate={{
          opacity: isMinimized ? 1 : 0,
          scale: isMinimized ? 1 : 0,
          pointerEvents: isMinimized ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        onClick={handleOpen}
        className="absolute bottom-0 left-0 w-14 h-14 rounded-full bg-glass-bg border border-glass-border backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-glass-highlight transition-colors group z-20 overflow-hidden"
      >
        {currentSong ? (
             <div className={cn("relative w-full h-full", isPlaying && "animate-spin-slow")}>
                <Image 
                    src={`/api/music/cover?file=${encodeURIComponent(currentSong.filename)}`}
                    alt="Cover"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100"
                />
             </div>
        ) : (
            <Music className="w-6 h-6 text-foreground/80 group-hover:text-accent-primary transition-colors" />
        )}
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
        className="w-[320px] bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col origin-bottom-left"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-glass-border bg-glass-highlight/20">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
            <Music className="w-4 h-4 text-accent-primary" />
            <span>正在播放</span>
          </div>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-foreground/60 hover:text-foreground"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col items-center gap-4">
            {/* Cover Art */}
            <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-lg">
                {currentSong ? (
                    <Image
                        src={`/api/music/cover?file=${encodeURIComponent(currentSong.filename)}`}
                        alt={currentSong.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                        <Music className="w-12 h-12 text-gray-400" />
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="text-center w-full">
                <h3 className="font-bold text-lg truncate text-foreground">{currentSong?.title || "未选择音乐"}</h3>
                <p className="text-sm text-foreground/60 truncate">{currentSong?.artist || "请在音乐分享模块选择"}</p>
            </div>

            {/* Progress */}
            <div className="w-full flex items-center gap-2 text-xs text-foreground/60">
                <span>{formatTime(progress)}</span>
                <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={progress || 0}
                    onChange={(e) => seek(Number(e.target.value))}
                    className="flex-1 h-1 bg-gray-200/50 rounded-lg appearance-none cursor-pointer dark:bg-gray-700/50 accent-accent-primary"
                    disabled={!currentSong}
                />
                <span>{formatTime(duration)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
                <button 
                    onClick={prevSong}
                    className="text-foreground/80 hover:text-accent-primary transition-colors"
                    disabled={!currentSong}
                >
                    <SkipBack className="w-6 h-6" />
                </button>
                <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                    disabled={!currentSong}
                >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                </button>
                <button 
                    onClick={nextSong}
                    className="text-foreground/80 hover:text-accent-primary transition-colors"
                    disabled={!currentSong}
                >
                    <SkipForward className="w-6 h-6" />
                </button>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

