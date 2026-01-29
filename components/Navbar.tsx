'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ModeToggle } from './ModeToggle';

const links = [
  { name: '首页', href: '#home' },
  { name: '关于我', href: '#about' },
  { name: '插画', href: '#gallery' },
  { name: '动漫', href: '#anime' },
  { name: '社交', href: '#social' },
  { name: '经历', href: '#experience' },
  { name: '资源', href: '#resources' },
  { name: '动态', href: '#dynamic' },
  { name: '博客', href: 'https://luminous.blog/', external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('http')) return;
    
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
      
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-t-0 border-l-0 border-r-0 border-b-glass-border bg-glass-bg/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold tracking-wider text-accent-primary glow-text" onClick={(e) => handleScroll(e, '#home')}>
              LUMINOUS
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 lg:space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-2 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
              <ModeToggle />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-foreground/5 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card border-t border-glass-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
