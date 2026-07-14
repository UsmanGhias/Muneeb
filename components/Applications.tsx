'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaExternalLinkAlt, FaGooglePlay, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
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
    <div className="featured-device flex flex-col items-center gap-5">
      <div className="relative featured-orbit-wrap">
        <div className="featured-orbit orbit-one" />
        <div className="featured-orbit orbit-two" />
        <div className="featured-orbit orbit-three" />
        <div
          className="absolute -inset-7 rounded-[2.5rem] opacity-30 blur-2xl pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${app.accent}, ${app.accentSecondary})` }}
        />
        <div className="featured-phone relative w-[235px] md:w-[270px] rounded-[2.35rem] border-2 bg-[var(--bg-card)] p-2">
          <div className="phone-speaker" />
          <div className="relative aspect-[9/19.5] rounded-[1.8rem] overflow-hidden bg-black">
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

      <div className="featured-pedestal" />

      {shots.length > 1 && (
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[rgba(108,99,255,0.45)] flex items-center justify-center text-white/75 hover:text-[var(--accent2)] hover:border-[var(--accent2)] transition-colors bg-[#080817]/70"
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
            className="w-10 h-10 rounded-full border border-[rgba(108,99,255,0.45)] flex items-center justify-center text-white/75 hover:text-[var(--accent2)] hover:border-[var(--accent2)] transition-colors bg-[#080817]/70"
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
    <div className="flex flex-wrap gap-4 pt-3">
      <a
        href={app.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[1.25rem] text-base font-bold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] hover:shadow-[0_0_28px_rgba(0,212,255,0.35)] transition-all duration-300"
      >
        <FaExternalLinkAlt size={12} />
        View Product
      </a>
      {app.playStore && (
        <a
          href={app.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[1.25rem] text-base font-bold border border-[var(--accent)] text-[var(--accent)] bg-[#080817]/50 hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
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
  const isReversed = app.id === 'clivora';

  return (
    <motion.div
      variants={cardVariants}
      className="featured-work-card transition-all duration-300"
    >
      <div className={`grid lg:grid-cols-[0.88fr_1.12fr] gap-10 xl:gap-14 items-center ${isReversed ? 'lg:[&>*:first-child]:order-2 lg:grid-cols-[1.12fr_0.88fr]' : ''}`}>
        {/* Visual */}
        <div className="relative flex justify-center">
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
        <div className="relative z-10 space-y-6">
          <div className="flex items-start gap-4">
            {hasScreenshots && <AppIcon app={app} />}
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-3"
                style={{
                  background: `${app.accent}22`,
                  border: `1px solid ${app.accent}44`,
                  color: app.accentSecondary,
                }}
              >
                {app.category}
              </span>
              <h3 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-white">{app.name}</h3>
              <p className="text-[var(--accent2)] font-bold text-lg mt-2">{app.tagline}</p>
            </div>
          </div>

          <p className="text-lg leading-[1.75] text-white/72">{app.description}</p>

          <div className="flex flex-wrap gap-2">
            {app.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white/82 border border-[rgba(108,99,255,0.35)] bg-[rgba(8,8,23,0.45)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-2">
            {app.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-base text-white/76">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border" style={{ borderColor: app.accentSecondary, color: app.accentSecondary }}>
                  <FaCheck size={12} />
                </span>
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
          <span className="section-tag mb-4 inline-flex items-center gap-2"><FaStar /> Featured Work</span>
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
          className="space-y-10"
        >
          {apps.map((app, index) => (
            <AppShowcase key={app.id} app={app} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
