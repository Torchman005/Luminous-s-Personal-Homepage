'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, FolderOpen } from 'lucide-react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const resources = [
  {
    title: 'npm转mp3',
    description: '网易云音乐下的歌只能在网易云播放？用这个转成mp3格式就可以了',
    link: 'https://ncm.worthsee.com/',
    icon: <FolderOpen size={24} />
  },
  {
    title: 'Data Tool',
    description: '适用于任何网站的视频下载器',
    link: 'https://www.datatool.vip/',
    icon: <Download size={24} />
  },
  {
    title: '月幕GalGame',
    description: '资源丰富的galgame分享交流站',
    link: 'https://www.ymgal.games/archives',
    icon: <CodeIcon size={24} />
  },
  {
    title: 'Aceternity UI',
    description: '富有艺术感的UI组件库',
    link: 'https://ui.aceternity.com/components',
    icon: <ExternalLink size={24} />
  }
];

function CodeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}

export default function Resources() {
  return (
    <section id="resources" className="py-20 relative bg-black/5 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">资源分享</h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
        </motion.div>

        <HoverEffect items={resources} />
      </div>
    </section>
  );
}
