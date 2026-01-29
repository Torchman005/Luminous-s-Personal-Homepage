'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function BlogPreview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.a
          href="https://luminous.blog/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="glass-card p-12 rounded-3xl relative overflow-hidden text-center border border-accent-primary/20 hover:border-accent-primary/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <BookOpen size={48} className="mx-auto mb-6 text-accent-primary" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">访问我的博客</h2>
              <p className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto">
                这里汇集了我的技术文章、思考感悟和生活点滴。点击前往 Luminous Blog 探索更多内容。
              </p>
              <div className="inline-flex items-center gap-2 text-accent-primary font-semibold group-hover:gap-3 transition-all">
                <span>Go to Blog</span>
                <ExternalLink size={20} />
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
