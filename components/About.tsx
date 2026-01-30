'use client';

import { motion } from 'framer-motion';
import { User, Code, Heart, Github, Twitter, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const socials = [
  { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-foreground' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com', color: 'hover:text-red-400' },
  { name: 'WeChat', icon: MessageCircle, href: '#', color: 'hover:text-green-400' },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">关于我</h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              你好，我是 Luminous。
              <br /><br />
              一名热爱技术与设计的开发者。我喜欢在代码的世界里构建精致的用户体验，也热衷于探索前沿的技术领域。
              <br /><br />
              在这个数字花园里，我记录成长的足迹，分享有价值的资源，希望能与更多有趣的灵魂相遇。
            </p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2 text-accent-secondary">
                <Code size={20} />
                <span>全栈开发</span>
              </div>
              <div className="flex items-center gap-2 text-pink-500">
                <Heart size={20} />
                <span>UI/UX 设计</span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 pt-6 border-t border-glass-border">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent-primary/20">
                <Image 
                  src="/images/avatar.png" 
                  alt="Avatar" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex gap-6">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-foreground/60 transition-colors ${item.color}`}
                  >
                    <item.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: '项目经验', value: '3+' },
              { label: '技术文章', value: '50+' },
              { label: '开源贡献', value: '10+' },
              { label: '运行天数', value: '100+' },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center hover:bg-foreground/5 transition-colors">
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
