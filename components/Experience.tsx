'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaLaptop, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Flutter Developer',
    badge: 'Full Time',
    badgeColor: 'from-[var(--accent)] to-[var(--accent2)]',
    company: 'CodCrafters',
    location: 'Samundri, Pakistan',
    period: '2023 – Present',
    icon: <FaBuilding />,
    bullets: [
      'Built Noor Ul Haya, ForgeNFit, Clivora, and CODCrafters — production Flutter apps for Play Store.',
      'Implemented state management with Riverpod, Hive local storage, and clean architecture.',
      'Integrated REST APIs, Firebase, offline sync, and push notifications.',
      'Delivered pixel-perfect UIs with Material 3, animations, and platform-adaptive widgets.',
    ],
  },
  {
    title: 'Junior Flutter Developer',
    badge: 'Internship',
    badgeColor: 'from-purple-500 to-pink-500',
    company: 'Startup Studio',
    location: 'Remote',
    period: '2022 – 2023',
    icon: <FaBuilding />,
    bullets: [
      'Built UI components and screens for mobile applications.',
      'Fixed bugs and optimized app performance.',
      'Participated in code reviews and agile ceremonies.',
      'Learned Firebase integration, push notifications, and local storage.',
    ],
  },
  {
    title: 'Freelance Mobile Developer',
    badge: 'Freelance',
    badgeColor: 'from-emerald-500 to-teal-500',
    company: 'Self-Employed',
    location: 'Fiverr / Upwork',
    period: '2021 – Present',
    icon: <FaLaptop />,
    bullets: [
      'Delivered custom Flutter applications for international clients.',
      'Handled project planning, design, development, and deployment.',
      'Published apps on the Google Play Store and Apple App Store.',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--accent2)] opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 block">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent2)] to-transparent opacity-30 -translate-x-0.5 md:-translate-x-0.5" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className={`relative flex gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] shadow-[0_0_15px_rgba(108,99,255,0.6)] z-10 border-2 border-[var(--bg-primary)] mt-6" />

              {/* Spacer for desktop alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="ml-12 md:ml-0 md:w-1/2 glass-card p-6 transition-all duration-300 cursor-default"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{exp.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm flex items-center gap-1.5 mt-1">
                      <span className="text-[var(--accent)]">{exp.icon}</span>
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.badgeColor} flex-shrink-0`}
                  >
                    {exp.badge}
                  </span>
                </div>

                {/* Date */}
                <p className="text-[var(--accent2)] text-xs font-medium flex items-center gap-1.5 mb-4">
                  <FaCalendarAlt />
                  {exp.period}
                </p>

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] flex-shrink-0 mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
