'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: '全栈开发工程师',
    company: '橙果工作室',
    period: '2024 - 至今',
    description: '负责工作室核心项目的后端架构设计与前端交互实现。主导了多个Web应用的开发，提升了团队的开发效率。',
    tags: ['Next.js', 'Spring Boot', 'Docker']
  },
  {
    id: 2,
    role: '前端开发实习生',
    company: '某知名互联网公司',
    period: '2023 - 2024',
    description: '参与公司官网的重构工作，优化了页面性能，实现了复杂的动画交互效果。',
    tags: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 3,
    role: '开源贡献者',
    company: 'GitHub',
    period: '2022 - 至今',
    description: '积极参与开源社区，为多个知名项目提交 PR，维护个人开源项目，获得 100+ Star。',
    tags: ['Open Source', 'Git', 'Community']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">经历</h2>
          <div className="w-20 h-1 bg-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-glass-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-accent-primary rounded-full ring-4 ring-background z-10 mt-6" />

                {/* Content Card */}
                <div className="flex-1 ml-6 md:ml-0">
                  <div className={`glass-card p-6 rounded-xl hover:bg-foreground/5 transition-colors ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Briefcase size={18} className="text-accent-secondary" />
                        {exp.role}
                      </h3>
                      <span className="text-sm text-foreground/60 flex items-center gap-1 bg-foreground/5 px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-accent-primary font-medium mb-2">{exp.company}</div>
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
