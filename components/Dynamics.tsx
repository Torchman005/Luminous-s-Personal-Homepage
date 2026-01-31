'use client';

import { motion } from 'framer-motion';
import { Activity, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Mock data from https://luminous.blog/ based on the web search
const activities = [
  {
    id: 1,
    content: '发布了新文章《compose-用kotlin优雅地编写UI》',
    date: '2025-11-09',
    link: 'https://luminous.blog/2025/12/21/compose-%E7%94%A8kotlin%E4%BC%98%E9%9B%85%E5%9C%B0%E7%BC%96%E5%86%99UI/',
    type: 'blog'
  },
  {
    id: 2,
    content: '发布了新文章《elasticsearch实现搜索功能过程中的总结》',
    date: '2024-10-13',
    link: 'https://luminous.blog/2025/12/21/elasticsearch%E5%AE%9E%E7%8E%B0%E6%90%9C%E7%B4%A2%E5%8A%9F%E8%83%BD%E8%BF%87%E7%A8%8B%E4%B8%AD%E7%9A%84%E6%80%BB%E7%BB%93/',
    type: 'blog'
  },
  {
    id: 3,
    content: '发布了新文章《基于Feign远程调用》',
    date: '2025-12-21',
    link: 'https://luminous.blog/2025/10/12/%E5%9F%BA%E4%BA%8EFeign%E8%BF%9C%E7%A8%8B%E8%B0%83%E7%94%A8/',
    type: 'blog'
  },
  {
    id: 4,
    content: '发布了新文章《关于Nacos注册中心》',
    date: '2025-12-21',
    link: 'https://luminous.blog/2025/10/05/%E5%85%B3%E4%BA%8ENacos%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83/',
    type: 'blog'
  },
  {
    id: 5,
    content: '发布了新文章《docker基本使用与进阶》',
    date: '2025-10-05',
    link: 'https://luminous.blog/2025/08/15/docker%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E4%B8%8E%E8%BF%9B%E9%98%B6/',
    type: 'blog'
  }
];

export default function Dynamics() {
  return (
    <section id="dynamic" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Activity className="text-accent-secondary" />
            动态
          </h2>
          <div className="w-20 h-1 bg-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="glass-card p-1 rounded-2xl">
          <div className="bg-background/40 rounded-xl overflow-hidden">
            {activities.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 flex items-center gap-4 hover:bg-foreground/5 transition-colors ${
                  index !== activities.length - 1 ? 'border-b border-foreground/5' : ''
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-accent-primary shrink-0" />
                <div className="flex-1">
                  <Link href={item.link} target="_blank" className="text-foreground/90 hover:text-accent-primary transition-colors flex items-center gap-2 group">
                    {item.content}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
                <div className="text-xs text-foreground/50 flex items-center gap-1 whitespace-nowrap">
                  <Clock size={12} />
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
