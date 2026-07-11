"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader tag="Who I Am" title="About" highlight="Me" />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 to-sky-500/20 blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(129,140,248,0.2)] md:h-72 md:w-72">
                <Image
                  src="/profile.jpeg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full border-2 border-[#030712] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
            </div>

            <div className="glass-card w-full max-w-sm space-y-3 p-5">
              {[
                { icon: HiLocationMarker, text: personalInfo.location, color: "text-indigo-400" },
                { icon: HiMail, text: personalInfo.email, color: "text-sky-400", href: `mailto:${personalInfo.email}` },
                { icon: HiPhone, text: personalInfo.phone, color: "text-indigo-400", href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
              ].map(({ icon: Icon, text, color, href }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-400">
                  <Icon className={`flex-shrink-0 ${color}`} size={16} />
                  {href ? (
                    <a href={href} className="truncate hover:text-white transition-colors">
                      {text}
                    </a>
                  ) : (
                    <span className="truncate">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
              Flutter Mobile{" "}
              <span className="gradient-text">Application Developer</span>
            </h3>

            <p className="leading-relaxed text-slate-400">
              I&apos;m <strong className="text-white">{personalInfo.name}</strong>,
              a dedicated Flutter mobile application developer with a passion for
              building elegant, user-friendly apps. I specialize in creating
              cross-platform mobile solutions that run seamlessly on both iOS and
              Android from a single codebase.
            </p>

            <p className="leading-relaxed text-slate-400">
              My journey in mobile development has equipped me with a deep
              understanding of the Flutter framework, Dart language, and modern
              mobile development best practices — from state management to API
              integration and smooth UI animations.
            </p>

            <p className="leading-relaxed text-slate-400">
              I&apos;ve shipped production applications including{" "}
              <strong className="text-emerald-400">Noor Ul Haya</strong>,{" "}
              <strong className="text-orange-400">ForgeNFit</strong>, and{" "}
              <strong className="text-indigo-400">Clivora</strong> — each
              demonstrating premium UX, offline-first architecture, and
              platform-native performance.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: `${personalInfo.stats.yearsExperience}+`, label: "Years Experience" },
                { value: `${personalInfo.stats.appsBuilt}`, label: "Production Apps" },
                { value: `${personalInfo.stats.platforms}`, label: "Platforms" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <p className="font-display text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {!personalInfo.github.startsWith("[") && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-indigo-400/40 hover:text-indigo-400"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {!personalInfo.linkedin.startsWith("[") && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-indigo-400/40 hover:text-indigo-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary text-sm"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
