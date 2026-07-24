'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaExternalLinkAlt, FaGooglePlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { apps, type AppProject, type AppStory } from '@/data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

function AppIcon({ app }: { app: AppProject }) {
  if (app.appIcon) {
    return (
      <Image src={app.appIcon} alt={app.name} width={52} height={52} className="rounded-2xl" />
    );
  }
  return <span className="text-3xl">{app.icon}</span>;
}

function ScreenshotCarousel({ app }: { app: AppProject }) {
  const [active, setActive] = useState(0);
  const shots = app.screenshots;
  const currentShot = shots[active] || shots[0];

  const prev = () => setActive((i) => (i - 1 + shots.length) % shots.length);
  const next = () => setActive((i) => (i + 1) % shots.length);

  return (
    <div className="featured-device flex flex-col items-center gap-4">
      <div className="relative">
        <div className="featured-phone relative w-[220px] rounded-[2.2rem] border-2 bg-[var(--bg-card)] p-2 md:w-[250px]">
          <div className="phone-speaker" />
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.7rem] bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentShot.src}
                  alt={currentShot.alt}
                  fill
                  className="object-contain object-center bg-black"
                  unoptimized
                  sizes="(min-width: 768px) 250px, 220px"
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(108,99,255,0.35)] bg-[#080817]/70 text-white/75 transition-colors hover:border-[var(--accent2)] hover:text-[var(--accent2)]"
            aria-label="Previous screenshot"
          >
            <FaChevronLeft size={11} />
          </button>
          <div className="flex gap-2">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]'
                    : 'w-1.5 bg-[rgba(108,99,255,0.28)]'
                }`}
                aria-label={shot.caption || `Screenshot ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(108,99,255,0.35)] bg-[#080817]/70 text-white/75 transition-colors hover:border-[var(--accent2)] hover:text-[var(--accent2)]"
            aria-label="Next screenshot"
          >
            <FaChevronRight size={11} />
          </button>
        </div>
      )}
    </div>
  );
}

function StoryPanel({ story, accent }: { story: AppStory; accent: string }) {
  if (story.kind === 'engineering') {
    return (
      <div className="story-block">
        <h4>{story.title}</h4>
        <p className="mb-3 font-medium text-white/90">{story.focus}</p>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/45">Implemented</p>
        <ul className="space-y-1.5">
          {story.items?.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <FaCheck className="mt-1 flex-shrink-0" size={11} style={{ color: accent }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (story.kind === 'problem') {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="story-block">
          <h4>User problem</h4>
          <p>{story.problem}</p>
        </div>
        <div className="story-block">
          <h4>Product response</h4>
          <p>{story.response}</p>
        </div>
      </div>
    );
  }

  if (story.kind === 'platform') {
    return (
      <div className="story-block">
        <h4>{story.title}</h4>
        <ul className="mt-1 grid gap-2 sm:grid-cols-2">
          {story.items?.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="story-block">
        <h4>{story.title}</h4>
        <p>{story.purpose}</p>
      </div>
      <div className="story-block">
        <h4>My contribution</h4>
        <ul className="space-y-1.5">
          {story.contribution?.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <FaCheck className="mt-1 flex-shrink-0" size={11} style={{ color: accent }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
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
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-5 py-3 text-sm font-bold text-white transition-all duration-300"
      >
        <FaExternalLinkAlt size={11} />
        Visit Website
      </a>
      {app.playStore && (
        <a
          href={app.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent)] bg-[#080817]/50 px-5 py-3 text-sm font-bold text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-white"
        >
          <FaGooglePlay size={13} />
          {app.playStoreStatus === 'launching' ? 'Coming to Play Store' : 'View on Play Store'}
        </a>
      )}
    </div>
  );
}

function AppShowcase({ app, index }: { app: AppProject; index: number }) {
  const hasScreenshots = app.screenshots.length > 0;
  const isReversed = index % 2 === 1;

  return (
    <motion.div variants={cardVariants} className="featured-work-card transition-all duration-300">
      <div
        className={`grid items-center gap-10 xl:gap-12 ${
          isReversed
            ? 'lg:grid-cols-[1.1fr_0.9fr] lg:[&>*:first-child]:order-2'
            : 'lg:grid-cols-[0.9fr_1.1fr]'
        }`}
      >
        <div className="relative flex justify-center">
          {hasScreenshots ? <ScreenshotCarousel app={app} /> : null}
        </div>

        <div className="relative z-10 space-y-5">
          <div className="flex items-start gap-4">
            <AppIcon app={app} />
            <div>
              <span
                className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold"
                style={{
                  background: `${app.accent}22`,
                  border: `1px solid ${app.accent}44`,
                  color: app.accentSecondary,
                }}
              >
                {app.category}
              </span>
              <h3 className="text-3xl font-black tracking-[-0.03em] text-white md:text-4xl">{app.name}</h3>
              <p className="mt-1.5 text-base font-semibold text-[var(--accent2)]">{app.tagline}</p>
            </div>
          </div>

          <p className="text-base leading-[1.7] text-white/72">{app.description}</p>

          <StoryPanel story={app.story} accent={app.accentSecondary} />

          <div className="flex flex-wrap gap-2">
            {app.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[rgba(108,99,255,0.28)] bg-[rgba(8,8,23,0.4)] px-3.5 py-1.5 text-sm font-semibold text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <AppLinks app={app} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Applications() {
  return (
    <section id="applications" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Flutter <span className="gradient-text">Applications</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Four production-grade Flutter apps built at CodCrafters, spanning Islamic lifestyle, fitness,
            and business platforms — prepared for Play Store release.
          </p>
          <div className="title-line mx-auto mt-5" />
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
