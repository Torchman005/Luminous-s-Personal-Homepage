"use client";

import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useMusic, Song } from "@/context/MusicContext";
import { Play, Pause, Music as MusicIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function MusicShare() {
  const { playSong, currentSong, isPlaying, setPlaylist } = useMusic();
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch('/api/music/list')
      .then(res => res.json())
      .then(data => {
        setSongs(data);
        setPlaylist(data);
      })
      .catch(err => console.error("Failed to fetch music list:", err));
  }, [setPlaylist]);

  return (
    <section id="music-share" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          音乐分享
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {songs.map((song) => (
            <CardContainer key={song.filename} className="inter-var w-full">
              <CardBody className="bg-glass-card/80 relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent-primary/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-colors duration-300">
                <CardItem
                  translateZ="50"
                  className="w-full mt-4"
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg group-hover/card:shadow-xl">
                    <Image
                      src={`/api/music/cover?file=${encodeURIComponent(song.filename)}`}
                      alt={song.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to a gradient or placeholder if no cover
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                        // Add a placeholder icon via DOM manipulation or just leave it as gradient
                      }}
                    />
                    {/* Fallback Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                         <MusicIcon className="w-20 h-20 text-white/50" />
                    </div>
                  </div>
                </CardItem>
                
                <div className="mt-8 flex flex-col gap-2">
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-foreground truncate w-full"
                  >
                    {song.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="50"
                    className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300 truncate"
                  >
                    {song.artist}
                  </CardItem>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    onClick={() => playSong(song)}
                    className={cn(
                        "px-6 py-2 rounded-xl text-white text-xs font-bold transition-colors",
                        currentSong?.filename === song.filename && isPlaying
                            ? "bg-accent-secondary"
                            : "bg-accent-primary hover:bg-accent-primary/90"
                    )}
                  >
                    {currentSong?.filename === song.filename && isPlaying ? (
                        <div className="flex items-center gap-2">
                            <Pause size={14} /> 暂停
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Play size={14} /> 播放
                        </div>
                    )}
                  </CardItem>
                  
                  {/* Progress Bar (Only visible if playing this song) */}
                  {currentSong?.filename === song.filename && (
                      <CardItem translateZ={30} className="w-1/2">
                          <MusicProgress />
                      </CardItem>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate component for progress bar to avoid heavy re-renders of the whole list
function MusicProgress() {
    const { progress, duration, seek } = useMusic();
    return (
        <input
            type="range"
            min="0"
            max={duration || 100}
            value={progress || 0}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-accent-primary"
            onClick={(e) => e.stopPropagation()}
        />
    )
}
