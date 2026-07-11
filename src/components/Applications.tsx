"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  HiExternalLink,
  HiChevronLeft,
  HiChevronRight,
  HiCode,
} from "react-icons/hi";
import { FaGooglePlay, FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import PhoneMockup from "./PhoneMockup";
import { apps } from "@/data/portfolio";
import type { AppProject } from "@/data/portfolio";

export default function Applications() {
  return (
    <section id="applications" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Featured Work"
          title="Production"
          highlight="Applications"
          description="Four Flutter applications spanning Islamic lifestyle, AI fitness, business operating systems, and studio products — engineered for Google Play launch."
        />

        <div className="space-y-32">
          {apps.map((app, index) => (
            <AppShowcase key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppShowcase({ app, index }: { app: AppProject; index: number }) {
  const [activeScreen, setActiveScreen] = useState(0);
  const hasScreenshots = app.screenshots.length > 0;
  const isReversed = index % 2 === 1;

  const next = () =>
    setActiveScreen((i) => (i + 1) % app.screenshots.length);
  const prev = () =>
    setActiveScreen(
      (i) => (i - 1 + app.screenshots.length) % app.screenshots.length
    );

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-3rem opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(ellipse, ${app.accent}40, transparent 70%)`,
        }}
      />

      <div
        className={`glass-card relative overflow-hidden p-8 md:p-12 lg:p-16 ${
          isReversed ? "" : ""
        }`}
      >
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            isReversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Visual column */}
          <div className={`${isReversed ? "lg:[direction:ltr]" : ""}`}>
            {hasScreenshots ? (
              <>
                <div className="relative flex flex-col items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <PhoneMockup
                        app={app}
                        screenshotIndex={activeScreen}
                        size="lg"
                        showCaption
                        className="mx-auto"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-6 flex items-center gap-4">
                    <button
                      onClick={prev}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-colors hover:border-white/20 hover:text-white"
                      aria-label="Previous screen"
                    >
                      <HiChevronLeft size={18} />
                    </button>
                    <div className="flex gap-2">
                      {app.screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveScreen(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeScreen
                              ? "w-6 bg-indigo-400"
                              : "w-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                          aria-label={`Screen ${i + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={next}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-colors hover:border-white/20 hover:text-white"
                      aria-label="Next screen"
                    >
                      <HiChevronRight size={18} />
                    </button>
                  </div>

                  <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                    {app.screenshots.map((shot, i) => (
                      <ScreenshotThumb
                        key={i}
                        shot={shot}
                        app={app}
                        active={i === activeScreen}
                        onClick={() => setActiveScreen(i)}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <FeatureShowcaseVisual app={app} />
            )}
          </div>

          {/* Content */}
          <div className={`space-y-6 ${isReversed ? "lg:[direction:ltr]" : ""}`}>
            <AppHeader app={app} />
            <p className="text-lg font-medium text-slate-300">{app.tagline}</p>
            <p className="leading-relaxed text-slate-400">{app.description}</p>

            <div className="grid grid-cols-3 gap-3">
              {app.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center"
                >
                  <p
                    className="font-display text-xl font-bold"
                    style={{ color: app.accent }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {!hasScreenshots && app.featureModules && (
              <div className="grid gap-3 sm:grid-cols-2">
                {app.featureModules.map((mod) => (
                  <div
                    key={mod.title}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/10"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-lg">{mod.icon}</span>
                      <h4 className="text-sm font-semibold text-white">{mod.title}</h4>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-500">{mod.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Key Features
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {app.features.slice(0, 6).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <span
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ background: app.accent }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {app.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Architecture
              </h4>
              <ul className="space-y-1.5">
                {app.architecture.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-slate-400">
                    <HiCode className="flex-shrink-0 text-indigo-400" size={14} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Engineering Highlights
              </h4>
              {app.challenges.map((c) => (
                <div
                  key={c.challenge}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <p className="text-sm font-medium text-slate-300">{c.challenge}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{c.solution}</p>
                </div>
              ))}
            </div>

            <AppLinks app={app} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function FeatureShowcaseVisual({ app }: { app: AppProject }) {
  return (
    <div className="relative mx-auto max-w-md">
      <div
        className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl"
        style={{ background: `linear-gradient(135deg, ${app.accent}, ${app.accentSecondary})` }}
      />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">
        <div className="flex items-center gap-4">
          {app.appIcon || app.logo ? (
            <Image
              src={app.appIcon || app.logo || ""}
              alt={app.name}
              width={72}
              height={72}
              className="rounded-2xl shadow-lg"
            />
          ) : (
            <span className="text-5xl">{app.icon}</span>
          )}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: app.accent }}>
              {app.category}
            </p>
            <h3 className="font-display text-2xl font-bold text-white">{app.name}</h3>
            <p className="text-sm text-slate-400">{app.version}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {(app.featureModules || []).slice(0, 4).map((mod) => (
            <div
              key={mod.title}
              className="rounded-xl border border-white/[0.08] bg-black/20 p-3 backdrop-blur-sm"
            >
              <span className="text-xl">{mod.icon}</span>
              <p className="mt-2 text-xs font-semibold text-white">{mod.title}</p>
            </div>
          ))}
        </div>

        <a
          href={app.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white"
        >
          <HiExternalLink size={16} />
          Explore on {new URL(app.website).hostname.replace("www.", "")}
        </a>
      </div>
    </div>
  );
}

function AppHeader({ app }: { app: AppProject }) {
  return (
    <div className="flex items-center gap-3">
      {app.appIcon || app.logo ? (
        <Image
          src={app.appIcon || app.logo || ""}
          alt={app.name}
          width={48}
          height={48}
          className="rounded-xl"
        />
      ) : (
        <span className="text-3xl">{app.icon}</span>
      )}
      <div>
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: app.accent }}
        >
          {app.category}
        </span>
        <h3 className="font-display text-3xl font-bold text-white md:text-4xl">{app.name}</h3>
      </div>
      <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-400">
          {app.packageName}
        </span>
        {app.playStoreStatus === "launching" && (
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-300">
            Launching on Google Play
          </span>
        )}
        {app.version && (
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-500">
            {app.version}
          </span>
        )}
        <span className="rounded-full border border-white/[0.06] px-3 py-1 text-[11px] text-slate-500">
          {app.developer}
        </span>
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
        className="btn-primary text-xs"
        style={{
          background: `linear-gradient(135deg, ${app.accent}, ${app.accentSecondary})`,
        }}
      >
        <HiExternalLink size={14} />
        View Product
      </a>
      {app.playStore && (
        <a
          href={app.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs"
        >
          <FaGooglePlay size={14} />
          {app.playStoreStatus === "launching" ? "Google Play — Launching" : "Google Play"}
        </a>
      )}
      {app.github && (
        <a
          href={app.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs"
        >
          <FaGithub size={14} />
          Source
        </a>
      )}
    </div>
  );
}

function ScreenshotThumb({
  shot,
  app,
  active,
  onClick,
}: {
  shot: { src: string; alt: string; caption?: string };
  app: AppProject;
  active: boolean;
  onClick: () => void;
}) {
  const [error, setError] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`relative h-16 w-9 flex-shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
        active
          ? "border-indigo-400 ring-2 ring-indigo-400/30"
          : "border-white/10 opacity-60 hover:opacity-100"
      }`}
    >
      {!error ? (
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className="object-cover object-top"
          onError={() => setError(true)}
          sizes="36px"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-xs"
          style={{ background: `${app.accent}22` }}
        >
          {app.icon}
        </div>
      )}
    </button>
  );
}
