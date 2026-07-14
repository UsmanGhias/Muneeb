'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaMobileAlt, FaServer, FaTools } from 'react-icons/fa';
import Image from 'next/image';

type Skill = { name: string; pct: number; icon: string };

const skillGroups: { title: string; icon: React.ReactNode; skills: Skill[] }[] = [
  {
    title: 'Mobile Development',
    icon: <FaMobileAlt />,
    skills: [
      { name: 'Flutter', pct: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Dart', pct: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Android', pct: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      { name: 'iOS', pct: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
    ],
  },
  {
    title: 'Backend & Database',
    icon: <FaServer />,
    skills: [
      { name: 'Firebase', pct: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'MySQL', pct: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', pct: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'REST APIs', pct: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    title: 'Tools & Other',
    icon: <FaTools />,
    skills: [
      { name: 'Git & GitHub', pct: 86, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Figma', pct: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'VS Code', pct: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', pct: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    ],
  },
];

const techBadges = [
  'Flutter', 'Dart', 'Riverpod', 'Hive', 'Firebase', 'Android', 'Material 3', 'REST API',
];

function SkillBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={20}
            height={20}
            className="rounded"
            unoptimized
          />
          <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
        </div>
        <span className="text-xs font-semibold text-[var(--accent2)]">{skill.pct}%</span>
      </div>
      <div className="h-2 bg-[rgba(108,99,255,0.1)] rounded-full overflow-hidden">
        <motion.div
          className="skill-bar-fill h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.pct}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="decor-dots left-8 top-12 opacity-40" />
      <div className="decor-rings right-0 top-0 opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[var(--accent)] opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex items-center gap-2"><FaBrain /> What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" />
        </motion.div>

        {/* Skill cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="skill-card p-7 transition-all duration-300"
            >
              <h3 className="flex items-center gap-2 text-base font-bold text-[var(--text-primary)] mb-6">
                <span className="skill-heading-icon">{group.icon}</span>
                {group.title}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} inView={inView} />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="tech-pill px-4 py-2 rounded-full text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
