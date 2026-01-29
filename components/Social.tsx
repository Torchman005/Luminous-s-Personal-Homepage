'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Mail, MessageCircle } from 'lucide-react';

const socials = [
  { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-foreground' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com', color: 'hover:text-red-400' },
  { name: 'WeChat', icon: MessageCircle, href: '#', color: 'hover:text-green-400' },
];

export default function Social() {
  return (
    <section id="social" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex gap-8 p-6 glass-card rounded-full"
        >
          {socials.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-foreground/60 transition-colors ${item.color}`}
            >
              <item.icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
