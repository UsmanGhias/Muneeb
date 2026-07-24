'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCode, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';

const experiences = [
  {
    title: 'Flutter Developer',
    badge: 'Full Time',
    badgeColor: 'from-[var(--accent)] to-[var(--accent2)]',
    company: 'CodCrafters',
    location: 'Samundri, Pakistan',
    period: '2023 to Present',
    icon: <FaCode />,
    bullets: [
      'Built and maintained four production-grade Flutter applications across fitness, business, and lifestyle domains (prepared for Play Store release).',
      'Integrated Riverpod, Hive offline storage, Firebase services, and REST APIs while keeping the codebase maintainable.',
      'Delivered UI, local storage, API integration and Play Store preparation for Noor Ul Haya, ForgeNFit, Clivora, and CODCrafters.',
    ],
  },
  {
    title: 'Junior Flutter Developer',
    badge: 'Internship',
    badgeColor: 'from-purple-500 to-pink-500',
    company: 'Startup Studio',
    location: 'Remote',
    period: '2022 to 2023',
    icon: <FaRocket />,
    bullets: [
      'Built UI components and screens for mobile applications.',
      'Fixed bugs and improved app performance.',
      'Worked with Firebase, push notifications, and local storage.',
    ],
  },
  {
    title: 'Freelance Mobile Developer',
    badge: 'Freelance',
    badgeColor: 'from-emerald-500 to-teal-500',
    company: 'Self-Employed',
    location: 'Fiverr / Upwork',
    period: '2021 to Present',
    icon: <FaBriefcase />,
    bullets: [
      'Delivered custom Flutter applications for international clients.',
      'Handled project planning, design, development, and deployment.',
      'Prepared apps for Google Play Store and Apple App Store release.',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="title-line mx-auto mt-5" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent2)] to-transparent opacity-25 md:left-1/2 md:-translate-x-0.5" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className={`relative mb-10 flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="absolute left-6 z-10 mt-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--bg-primary)] bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] md:left-1/2" />

              <div className="hidden md:block md:w-1/2" />

              <motion.div
                whileHover={{ y: -3 }}
                className="timeline-card ml-12 cursor-default p-6 transition-all duration-300 md:ml-0 md:w-1/2"
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="timeline-role-icon">{exp.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{exp.title}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                        <FaMapMarkerAlt className="text-[var(--accent)]" />
                        {exp.company}, {exp.location}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`flex-shrink-0 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white ${exp.badgeColor}`}
                  >
                    {exp.badge}
                  </span>
                </div>

                <p className="mb-4 flex items-center gap-1.5 text-xs font-medium text-[var(--accent2)]">
                  <FaCalendarAlt />
                  {exp.period}
                </p>

                <ul className="space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" />
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
