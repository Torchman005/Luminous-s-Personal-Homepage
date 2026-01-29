'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      <div className="text-center z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          LUMINOUS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-foreground/60 font-light tracking-wide mb-8"
        >
          探索 · 创造 · 分享
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, '#about')}
            className="px-8 py-3 rounded-full bg-foreground/10 hover:bg-foreground/20 border border-foreground/10 transition-all duration-300 backdrop-blur-sm text-foreground cursor-pointer"
          >
            了解更多
          </a>
          <a href="https://luminous.blog/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-accent-primary/80 hover:bg-accent-primary transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            访问博客
          </a>
        </motion.div>
      </div>
    </section>
  );
}
