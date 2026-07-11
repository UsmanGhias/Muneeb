"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SiFlutter, SiDart, SiAndroid, SiApple } from "react-icons/si";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import PhoneMockup from "./PhoneMockup";
import { apps, personalInfo } from "@/data/portfolio";

const roles = [
  "Flutter Developer",
  "Mobile Engineer",
  "UI Craftsman",
  "App Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const heroApps = apps.slice(0, 3);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/5 px-4 py-1.5 text-xs font-medium text-indigo-300"
            >
              <SiFlutter className="text-sky-400" />
              Flutter Mobile Application Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Beautiful{" "}
              <span className="gradient-text">Flutter</span>
              <br />
              Applications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-2 h-7 font-display text-lg font-medium text-sky-400 md:text-xl"
            >
              {displayText}
              <span className="ml-0.5 animate-pulse text-indigo-400">|</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a href="#applications" className="btn-primary">
                View Applications
              </a>
              <a href="#contact" className="btn-secondary">
                Let&apos;s Build Together
              </a>
              <a href={personalInfo.resume} className="btn-secondary">
                <HiDownload size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start"
            >
              {[
                { icon: SiFlutter, label: "Flutter", color: "#54C5F8" },
                { icon: SiDart, label: "Dart", color: "#0175C2" },
                { icon: SiAndroid, label: "Android", color: "#3DDC84" },
                { icon: SiApple, label: "iOS", color: "#A2AAAD" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Icon style={{ color }} size={18} />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating phones */}
          <div className="relative hidden h-[600px] lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20"
                >
                  <PhoneMockup
                    app={heroApps[0]}
                    screenshotIndex={0}
                    size="lg"
                    className="shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-24 top-8 z-10 scale-[0.75] opacity-80"
                >
                  <PhoneMockup app={heroApps[1]} screenshotIndex={0} size="md" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-20 top-16 z-10 scale-[0.7] opacity-75"
                >
                  <PhoneMockup app={heroApps[2]} screenshotIndex={0} size="md" />
                </motion.div>
              </div>
            </motion.div>

            {/* Profile badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
              className="absolute bottom-8 left-8 z-30 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                <Image
                  src="/profile.jpeg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{personalInfo.name}</p>
                <p className="text-xs text-slate-400">Samundri, Pakistan</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#applications"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-indigo-400"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
            Scroll
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <HiArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
