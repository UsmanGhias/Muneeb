import fs from "fs";
import path from "path";

const root = process.cwd();
const portfolioPath = path.join(root, "src/data/portfolio.ts");
let portfolio = fs.readFileSync(portfolioPath, "utf8");

if (!portfolio.includes("FeatureModule")) {
  portfolio = portfolio.replace(
    "export interface AppScreenshot {",
    `export interface FeatureModule {
  title: string;
  description: string;
  icon: string;
}

export interface AppScreenshot {`
  );
  portfolio = portfolio.replace(
    "  screenshots: AppScreenshot[];",
    `  featureModules?: FeatureModule[];
  screenshots: AppScreenshot[];`
  );
}

const screenshotPatches = {
  "noor-ul-haya": "screenshots: [],",
  clivora: "screenshots: [],",
  codcrafters: "screenshots: [],",
};

for (const [id, replacement] of Object.entries(screenshotPatches)) {
  portfolio = portfolio.replace(
    new RegExp(`(id: "${id}"[\\s\\S]*?)screenshots: \\[[\\s\\S]*?\\],`),
    `$1${replacement}`
  );
}

const featureModules = {
  "noor-ul-haya": `featureModules: [
      { title: "Prayer Dashboard", description: "Live Adhan times, Hijri calendar, and daily tracker ring.", icon: "🕌" },
      { title: "Exact Alarms", description: "Per-salah reminders 15 minutes before each Adhan.", icon: "🔔" },
      { title: "Qibla Compass", description: "Real-time heading with alignment feedback toward the Kaaba.", icon: "🧭" },
      { title: "Quran Reader", description: "Surah list with Arabic names and verse counts.", icon: "📖" },
      { title: "Duas Library", description: "Supplications with Arabic, transliteration and references.", icon: "🤲" },
      { title: "Digital Tasbih", description: "Tap counter for dhikr with instant reset.", icon: "📿" },
    ],`,
  clivora: `featureModules: [
      { title: "Command Center", description: "Revenue, outstanding invoices and active projects at a glance.", icon: "📊" },
      { title: "Client CRM", description: "Full client database with search, notes and contact management.", icon: "👤" },
      { title: "Invoicing", description: "Tax, discounts, and branded PDF export workflow.", icon: "📄" },
      { title: "CLIVORA Connect", description: "Private marketplace - contact hidden until mutual accept.", icon: "🔗" },
      { title: "CLIVORA AI", description: "Local business insights, follow-ups and revenue alerts.", icon: "✨" },
      { title: "File Vault", description: "Secure on-device storage for project assets.", icon: "🔒" },
    ],`,
  codcrafters: `featureModules: [
      { title: "Mobile Products", description: "Flutter apps built by the CodCrafters studio.", icon: "📱" },
      { title: "Custom Software", description: "Bespoke web, mobile and cloud solutions.", icon: "⚙️" },
      { title: "Odoo ERP", description: "Business automation, accounting and inventory.", icon: "🏭" },
      { title: "AI & ML", description: "Intelligent products with modern AI integration.", icon: "🤖" },
      { title: "Case Studies", description: "Results from 185+ completed engagements.", icon: "📈" },
      { title: "Get a Quote", description: "Direct line to the team for free consultation.", icon: "💬" },
    ],`,
};

for (const [id, modules] of Object.entries(featureModules)) {
  if (!portfolio.includes(`id: "${id}"`) || portfolio.includes(modules.slice(0, 30))) continue;
  portfolio = portfolio.replace(
    new RegExp(`(id: "${id}"[\\s\\S]*?stats: \\[[\\s\\S]*?\\],\\s*)`),
    `$1${modules}\n    `
  );
}

if (!portfolio.includes("expertiseDomains")) {
  portfolio = portfolio.replace(
    "export const expertiseCategories = [",
    `export const expertiseDomains = [
  {
    title: "Islamic & Lifestyle Apps",
    subtitle: "Noor Ul Haya",
    description:
      "Serene Material 3 experiences for worship - prayer engines, offline content, exact alarms, and privacy-first architecture.",
    accent: "#10b981",
    skills: ["Adhan Dart", "Hive", "Exact Alarms", "Material 3", "GoRouter"],
  },
  {
    title: "Health, Fitness & AI",
    subtitle: "ForgeNFit",
    description:
      "AI-adaptive fitness with video-guided workouts, nutrition tracking, body-metric calculators, and offline training.",
    accent: "#f97316",
    skills: ["AI Coaching", "REST APIs", "Hive Cache", "Charts", "Offline Sync"],
  },
  {
    title: "Business OS & Marketplaces",
    subtitle: "Clivora",
    description:
      "Freelancer operating systems - CRM, invoicing, 19 tools, private marketplaces, and PDF generation on mobile.",
    accent: "#6366f1",
    skills: ["SQLite", "PDF Engine", "Play Billing", "CRM", "Local-First"],
  },
  {
    title: "Studio-Grade Products",
    subtitle: "CODCrafters",
    description:
      "Production Flutter across 25+ countries - reusable architecture, ERP integration, and deployment at scale.",
    accent: "#0b6db4",
    skills: ["Clean Architecture", "Firebase", "Odoo ERP", "CI/CD", "Multi-App"],
  },
];

export const expertiseMetrics = [
  { value: "4", label: "Production Apps" },
  { value: "4+", label: "Years Flutter" },
  { value: "2", label: "Platforms" },
  { value: "100%", label: "Play Store Ready" },
];

export const expertiseCategories = [`
  );
}

fs.writeFileSync(portfolioPath, portfolio, "utf8");
console.log("portfolio.ts updated");

// Filter forgenfit screenshots to existing files only
const pub = path.join(root, "public");
const pf = fs.readFileSync(portfolioPath, "utf8");
const fgMatch = pf.match(/id: "forgenfit"[\s\S]*?screenshots: \[([\s\S]*?)\],/);
if (fgMatch) {
  const kept = [];
  for (const m of fgMatch[1].matchAll(/src: "([^"]+)"/g)) {
    const file = path.join(pub, m[1].replace(/^\//, ""));
    if (fs.existsSync(file)) {
      const block = fgMatch[1].match(
        new RegExp(`\\{[^}]*src: "${m[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^}]*\\}`)
      );
      if (block) kept.push(block[0]);
    }
  }
  const updated = pf.replace(
    /(id: "forgenfit"[\s\S]*?screenshots: \[)[\s\S]*?(\],)/,
    `$1\n      ${kept.join(",\n      ")}\n    $2`
  );
  fs.writeFileSync(portfolioPath, updated, "utf8");
  console.log("forgenfit screenshots:", kept.length);
}

const applications = `"use client";

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
          description="Four Flutter applications spanning Islamic lifestyle, AI fitness, business operating systems, and studio products - engineered for Google Play launch."
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
          background: \`radial-gradient(ellipse, \${app.accent}40, transparent 70%)\`,
        }}
      />

      <div
        className={\`glass-card relative overflow-hidden p-8 md:p-12 lg:p-16 \${
          isReversed ? "" : ""
        }\`}
      >
        <div
          className={\`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 \${
            isReversed ? "lg:[direction:rtl]" : ""
          }\`}
        >
          {/* Visual column */}
          <div className={\`\${isReversed ? "lg:[direction:ltr]" : ""}\`}>
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
                          className={\`h-1.5 rounded-full transition-all duration-300 \${
                            i === activeScreen
                              ? "w-6 bg-indigo-400"
                              : "w-1.5 bg-white/20 hover:bg-white/40"
                          }\`}
                          aria-label={\`Screen \${i + 1}\`}
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
          <div className={\`space-y-6 \${isReversed ? "lg:[direction:ltr]" : ""}\`}>
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
        style={{ background: \`linear-gradient(135deg, \${app.accent}, \${app.accentSecondary})\` }}
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
          background: \`linear-gradient(135deg, \${app.accent}, \${app.accentSecondary})\`,
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
          {app.playStoreStatus === "launching" ? "Google Play - Launching" : "Google Play"}
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
      className={\`relative h-16 w-9 flex-shrink-0 overflow-hidden rounded-lg border transition-all duration-300 \${
        active
          ? "border-indigo-400 ring-2 ring-indigo-400/30"
          : "border-white/10 opacity-60 hover:opacity-100"
      }\`}
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
          style={{ background: \`\${app.accent}22\` }}
        >
          {app.icon}
        </div>
      )}
    </button>
  );
}
`;

const expertise = `"use client";

import { motion } from "framer-motion";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiAndroid,
  SiApple,
  SiGit,
  SiGithub,
  SiFigma,
  SiVscode,
  SiPostman,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import {
  expertiseCategories,
  expertiseDomains,
  expertiseMetrics,
} from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Flutter: SiFlutter,
  Dart: SiDart,
  Firebase: SiFirebase,
  "Google Play Deployment": SiAndroid,
  "App Store Deployment": SiApple,
  Git: SiGit,
  Github: SiGithub,
  Figma: SiFigma,
  "VS Code": SiVscode,
  Postman: SiPostman,
};

const categoryColors = [
  "from-indigo-500/20 to-indigo-500/5 border-indigo-500/20",
  "from-sky-500/20 to-sky-500/5 border-sky-500/20",
  "from-violet-500/20 to-violet-500/5 border-violet-500/20",
  "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20",
  "from-amber-500/20 to-amber-500/5 border-amber-500/20",
];

export default function Expertise() {
  const allSkills = expertiseCategories.flatMap((c) => c.items);

  return (
    <section id="expertise" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Technical Mastery"
          title="Flutter"
          highlight="Expertise"
          description="Deep specialization across architecture, state, offline data, platform delivery, and production-grade UI - proven across four shipped CodCrafters applications."
        />

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {expertiseMetrics.map((m, i) => (
            <div
              key={m.label}
              className="glass-card rounded-2xl p-6 text-center"
              style={{ animationDelay: \`\${i * 0.1}s\` }}
            >
              <p className="font-display text-3xl font-bold text-white md:text-4xl">{m.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Domain expertise from real apps */}
        <div className="mb-16">
          <h3 className="mb-8 text-center font-display text-2xl font-bold text-white">
            Domain <span className="text-gradient">Specializations</span>
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {expertiseDomains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 md:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{ background: domain.accent }}
                />
                <div className="relative">
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                      style={{
                        background: \`\${domain.accent}22\`,
                        color: domain.accent,
                      }}
                    >
                      {domain.subtitle}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">{domain.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{domain.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {domain.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical categories */}
        <div className="mb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertiseCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={\`glass-card-hover rounded-2xl border bg-gradient-to-br p-6 \${categoryColors[i % categoryColors.length]}\`}
            >
              <h3 className="font-display mb-4 text-lg font-semibold text-white">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => {
                  const Icon = iconMap[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white"
                    >
                      {Icon && <Icon size={12} className="text-indigo-400" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <p className="mb-6 text-center text-sm text-slate-500">
            Full-stack mobile engineering toolkit
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-indigo-400/40 hover:text-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(root, "src/components/Applications.tsx"), applications, "utf8");
fs.writeFileSync(path.join(root, "src/components/Expertise.tsx"), expertise, "utf8");
console.log("Applications.tsx and Expertise.tsx updated");
