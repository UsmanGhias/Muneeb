"use client";

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
          description="Deep specialization across architecture, state, offline data, platform delivery, and production-grade UI — proven across four shipped CodCrafters applications."
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
              style={{ animationDelay: `${i * 0.1}s` }}
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
                        background: `${domain.accent}22`,
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
              className={`glass-card-hover rounded-2xl border bg-gradient-to-br p-6 ${categoryColors[i % categoryColors.length]}`}
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
