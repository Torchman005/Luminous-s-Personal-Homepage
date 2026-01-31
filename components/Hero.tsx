'use client';

import { motion } from 'framer-motion';
import VideoText from '@/components/magicui/video-text';
import InteractiveHoverButton from '@/components/magicui/interactive-hover-button';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, href: string) => {
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
      <div className="text-center z-10 px-4 w-full max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <VideoText 
            text="LUMINOUS" 
            src="/videos/h1.mp4"
            className="h-[120px] sm:h-[160px] md:h-[240px] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-foreground/60 font-light tracking-wide mb-8"
        >
          HELLO WORLD!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <InteractiveHoverButton onClick={(e) => handleScroll(e, '#about')}>
            了解更多
          </InteractiveHoverButton>
          <InteractiveHoverButton onClick={() => window.open('https://luminous.blog/', '_blank')}>
            访问博客
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </section>
  );
}
