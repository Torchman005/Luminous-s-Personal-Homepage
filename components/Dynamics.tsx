'use client';

import { motion } from 'framer-motion';
import { Activity, Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    content: '发布了新文章《Next.js 15 新特性解析》',
    date: '2小时前',
    type: 'blog'
  },
  {
    id: 2,
    content: '更新了个人主页的设计风格，采用了 Glassmorphism。',
    date: '1天前',
    type: 'project'
  },
  {
    id: 3,
    content: '在 GitHub 上开源了新的 React Hooks 库。',
    date: '3天前',
    type: 'code'
  },
  {
    id: 4,
    content: '参加了技术分享会，探讨了 AI 辅助编程的未来。',
    date: '1周前',
    type: 'event'
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
                  <p className="text-foreground/90">{item.content}</p>
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
