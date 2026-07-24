'use client';

import { motion } from 'framer-motion';
import { FaClipboardList, FaCode, FaComments, FaRocket, FaVial } from 'react-icons/fa';

const stages = [
  {
    title: 'Understand',
    description: 'Clarify the users, requirements and technical constraints.',
    icon: <FaComments />,
  },
  {
    title: 'Plan',
    description: 'Define screens, data flow, milestones and architecture.',
    icon: <FaClipboardList />,
  },
  {
    title: 'Build',
    description: 'Develop the UI, state management, APIs and local storage.',
    icon: <FaCode />,
  },
  {
    title: 'Validate',
    description: 'Test functionality, responsiveness and edge cases.',
    icon: <FaVial />,
  },
  {
    title: 'Release & Improve',
    description: 'Prepare deployment, monitor issues and deliver updates.',
    icon: <FaRocket />,
  },
];

export default function HowIWork() {
  return (
    <section id="process" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            How I <span className="gradient-text">Work</span>
          </h2>
          <div className="title-line mx-auto mt-5" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="process-card p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="skill-heading-icon text-[var(--accent2)]">{stage.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-white">{stage.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
