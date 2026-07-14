'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGooglePlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { apps, type AppProject } from '@/data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function AppIcon({ app }: { app: AppProject }) {
  if (app.appIcon) {
    return (
      <Image
        src={app.appIcon}
        alt={app.name}
        width={56}
        height={56}
        className="rounded-2xl shadow-glow-accent"
      />
    );
  }
  return <span className="text-4xl">{app.icon}</span>;
}

function ScreenshotCarousel({ app }: { app: AppProject }) {
  const [active, setActive] = useState(0);
  const shots = app.screenshots;
  const currentShot = shots[active] || shots[0];

  const prev = () => setActive((i) => (i - 1 + shots.length) % shots.length);
  const next = () => setActive((i) => (i + 1) % shots.length);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div
          className="absolute -inset-4 rounded-[2.5rem] opacity-20 blur-2xl pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${app.accent}, ${app.accentSecondary})` }}
        />
        <div className="relative w-[220px] md:w-[240px] rounded-[2rem] border-2 border-[rgba(108,99,255,0.25)] bg-[var(--bg-card)] p-2 shadow-[0_0_40px_rgba(108,99,255,0.2)]">
          <div className="relative aspect-[9/19.5] rounded-[1.5rem] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentShot.src}
                  alt={currentShot.alt}
                  fill
                  className="object-cover object-top"
                  unoptimized={currentShot.src.endsWith('.svg')}
                  sizes="240px"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {shots.length > 1 && (
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full border border-[rgba(108,99,255,0.3)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="Previous screenshot"
          >
            <FaChevronLeft size={12} />
          </button>
          <div className="flex gap-2">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]' : 'w-1.5 bg-[rgba(108,99,255,0.3)]'
                }`}
                aria-label={shot.caption || `Screenshot ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-[rgba(108,99,255,0.3)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="Next screenshot"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      )}
    </div>
  );
}

function FeatureModulesGrid({ app }: { app: AppProject }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {(app.featureModules || []).map((mod) => (
        <div
          key={mod.title}
          className="glass-card p-4 transition-all duration-300 hover:border-[rgba(108,99,255,0.35)]"
        >
          <span className="text-2xl mb-2 block">{mod.icon}</span>
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">{mod.title}</h4>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{mod.description}</p>
        </div>
      ))}
    </div>
  );
}

function AppLinks({ app }: { app: AppProject }) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <a
        href={app.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] hover:shadow-[0_0_20px_rgba(108,99,255,0.5)] transition-all duration-300"
      >
        <FaExternalLinkAlt size={12} />
        View Product
      </a>
      {app.playStore && (
        <a
          href={app.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
        >
          <FaGooglePlay size={14} />
          {app.playStoreStatus === 'launching' ? 'Google Play · Launching' : 'Google Play'}
        </a>
      )}
    </div>
  );
}

function AppShowcase({ app, index }: { app: AppProject; index: number }) {
  const hasScreenshots = app.screenshots.length > 0;
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      variants={cardVariants}
      className="glass-card p-6 md:p-8 transition-all duration-300"
    >
      <div className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {/* Visual */}
        <div className="flex justify-center">
          {hasScreenshots ? (
            <ScreenshotCarousel app={app} />
          ) : (
            <div className="w-full max-w-sm">
              <div className="flex items-center gap-4 mb-6">
                <AppIcon app={app} />
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: app.accent }}
                  >
                    {app.category}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{app.name}</h3>
                  {app.version && (
                    <p className="text-xs text-[var(--text-secondary)]">{app.version}</p>
                  )}
                </div>
              </div>
              <FeatureModulesGrid app={app} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            {hasScreenshots && <AppIcon app={app} />}
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                style={{
                  background: `${app.accent}22`,
                  border: `1px solid ${app.accent}44`,
                  color: app.accentSecondary,
                }}
              >
                {app.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">{app.name}</h3>
              <p className="text-[var(--accent2)] font-medium text-sm mt-1">{app.tagline}</p>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed">{app.description}</p>

          <div className="flex flex-wrap gap-2">
            {app.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium text-[var(--text-secondary)] border border-[rgba(108,99,255,0.25)] bg-[rgba(108,99,255,0.05)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-2">
            {app.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" />
                {feature}
              </li>
            ))}
          </ul>

          <AppLinks app={app} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Applications() {
  return (
    <section id="applications" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--accent2)] opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 block">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Flutter <span className="gradient-text">Applications</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Four production Flutter apps built at CodCrafters, spanning Islamic lifestyle, fitness, and business platforms.
          </p>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-8"
        >
          {apps.map((app, index) => (
            <AppShowcase key={app.id} app={app} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
