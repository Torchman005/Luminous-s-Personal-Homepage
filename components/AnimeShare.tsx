"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import { ExternalLink } from "lucide-react";

// 示例动漫数据，您可以稍后替换为真实数据
const ANIME_LIST = [
  {
    title: "进击的巨人",
    imageUrl: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=300&auto=format&fit=crop",
    link: "https://bangumi.tv/subject/326",
  },
  {
    title: "鬼灭之刃",
    imageUrl: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=300&auto=format&fit=crop",
    link: "https://bangumi.tv/subject/23686",
  },
  {
    title: "咒术回战",
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=300&auto=format&fit=crop",
    link: "https://bangumi.tv/subject/295512",
  },
  {
    title: "间谍过家家",
    imageUrl: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=300&auto=format&fit=crop",
    link: "https://bangumi.tv/subject/355823",
  },
  {
    title: "电锯人",
    imageUrl: "https://images.unsplash.com/photo-1620553610260-252973142279?q=80&w=300&auto=format&fit=crop",
    link: "https://bangumi.tv/subject/321885",
  },
];

const AnimeCard = ({
  imageUrl,
  title,
  link,
}: {
  imageUrl: string;
  title: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-48 h-64 overflow-hidden rounded-xl border border-glass-border bg-glass-bg hover:scale-105 transition-transform duration-300 group"
    >
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{title}</h3>
        <div className="flex items-center text-xs text-gray-300 group-hover:text-accent-primary transition-colors">
          <span>查看详情</span>
          <ExternalLink size={12} className="ml-1" />
        </div>
      </div>
    </a>
  );
};

export default function AnimeShare() {
  return (
    <section id="anime" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            动漫分享
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70">
            精选好番推荐，记录感动瞬间
          </p>
        </motion.div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {ANIME_LIST.map((anime) => (
            <AnimeCard key={anime.title} {...anime} />
          ))}
        </Marquee>
        
        {/* Progressive Blur Effect - Left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 z-10">
          <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_right,black,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black_10%,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_right,black_20%,transparent)]" />
        </div>

        {/* Progressive Blur Effect - Right */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 z-10">
          <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_left,black,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_left,black_10%,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_left,black_20%,transparent)]" />
        </div>
      </div>
    </section>
  );
}
