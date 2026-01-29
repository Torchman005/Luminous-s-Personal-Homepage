'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, FolderOpen } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: '前端开发学习路线',
    description: '整理了一份详细的前端开发学习路线图，从 HTML/CSS 到 React/Vue，包含推荐资源。',
    category: '学习资料',
    link: '#',
    icon: FolderOpen
  },
  {
    id: 2,
    title: 'VS Code 高效配置',
    description: '我的 VS Code 个人配置分享，包含常用插件、快捷键设置和好看的主题。',
    category: '工具配置',
    link: '#',
    icon: Download
  },
  {
    id: 3,
    title: 'React 组件库模板',
    description: '基于 Tailwind CSS 和 Framer Motion 封装的通用组件库，开箱即用。',
    category: '代码模板',
    link: '#',
    icon: CodeIcon
  },
  {
    id: 4,
    title: '设计灵感书签',
    description: '精选的 UI/UX 设计灵感网站集合，为你的下一个项目提供创意源泉。',
    category: '设计资源',
    link: '#',
    icon: ExternalLink
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
    <section id="resources" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">资源分享</h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl group hover:border-accent-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded bg-foreground/5 text-foreground/60 border border-foreground/5">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
