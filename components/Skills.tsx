'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Skill = { name: string; icon: string };

const skillGroups: { title: string; span: string; skills: Skill[] }[] = [
  {
    title: 'Core stack',
    span: 'lg:col-span-2',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Riverpod', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Hive', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Material 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    ],
  },
  {
    title: 'Regular project work',
    span: 'lg:col-span-2',
    skills: [
      { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Local notifications', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    ],
  },
  {
    title: 'Supporting tools',
    span: 'lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2',
    skills: [
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Codemagic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-left lg:text-center"
        >
          <h2 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="title-line mt-5 lg:mx-auto" />
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className={`skill-card p-6 ${group.span}`}
            >
              <h3 className="mb-5 text-lg font-bold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="tech-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-[var(--text-secondary)]"
                  >
                    <Image src={skill.icon} alt="" width={16} height={16} unoptimized />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
