'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, Heart, Github, Twitter, Mail, MessageCircle, MessageSquare, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Highlight } from '@/components/ui/hero-highlight';
import { FocusCard } from '@/components/ui/focus-cards';
import { SparklesCore } from '@/components/ui/sparkles';

const socials = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Torchman005', color: 'hover:text-foreground' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/LuminousZJ005', color: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=huynhmzmahthao@gmail.com&su=&body=', color: 'hover:text-red-400' },
  { name: 'QQ', icon: MessageSquare, href: '#', color: 'hover:text-blue-500', qrCode: '/images/socials/QQ.jpeg' },
  { name: 'WeChat', icon: MessageCircle, href: '#', color: 'hover:text-green-400', qrCode: '/images/socials/wechat.jpg' },
];

export default function About() {
  const [selectedQr, setSelectedQr] = useState<string | null>(null);

  const handleSocialClick = (e: React.MouseEvent, item: typeof socials[0]) => {
    if (item.qrCode) {
      e.preventDefault();
      setSelectedQr(item.qrCode);
    }
  };

  return (
    <section id="about" className="py-20 relative flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">关于我</h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <FocusCard>
              <div className="px-8 py-12 flex flex-col items-center relative">
                {/* Sparkles for fun */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                  />
                </div>
                {/* Avatar */}
                <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-accent-primary/30 shadow-lg group">
                  <Image 
                    src="/images/avatar.png" 
                    alt="Avatar" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hero Highlight Text */}
                <div className="text-xl md:text-2xl font-bold text-foreground/90 mb-6 text-center leading-relaxed">
                  你好，我是{" "}
                  <Highlight className="text-black dark:text-white">
                    Luminous
                  </Highlight>
                </div>

                <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center mb-8 max-w-lg">
                  ✨ 一名热爱动漫与技术的开发者，计算机科学与技术专业科班生
                  <br /><br />
                  🎉 在这个数字花园里，我记录成长的足迹，分享有价值的资源，希望能与更多有趣的灵魂相遇
                </p>

                <div className="flex gap-6 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20">
                    <Code size={18} />
                    <span className="font-medium">全栈开发</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 border border-pink-500/20">
                    <Heart size={18} />
                    <span className="font-medium">UI/UX 设计</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-5 relative z-20 pt-6 border-t border-glass-border w-full justify-center">
                  {socials.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      onClick={item.qrCode ? (e) => handleSocialClick(e, item) : undefined}
                      className={`p-3 rounded-full bg-foreground/5 text-foreground/70 transition-all duration-300 hover:scale-110 hover:bg-foreground/10 ${item.color} cursor-pointer shadow-sm`}
                    >
                      <item.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </FocusCard>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {selectedQr && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedQr(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white p-4 rounded-2xl shadow-2xl max-w-sm w-full h-auto"
            >
              <button
                onClick={() => setSelectedQr(null)}
                className="absolute -top-4 -right-4 p-2 bg-white rounded-full shadow-lg text-black hover:bg-gray-100 transition-colors z-10"
              >
                <X size={20} />
              </button>
              <div className="relative w-full rounded-xl overflow-hidden">
                <Image
                  src={selectedQr}
                  alt="Social QR Code"
                  width={500}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
