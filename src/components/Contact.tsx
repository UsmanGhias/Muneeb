"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formState.subject)}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader tag="Get In Touch" title="Contact" highlight="Me" />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let&apos;s Build{" "}
                <span className="gradient-text">Together</span>
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                Have a mobile app idea or need a Flutter developer? I&apos;d love
                to hear from you. Drop me a message and I&apos;ll get back to you
                as soon as possible.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: HiMail,
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                  gradient: "from-indigo-500 to-sky-500",
                },
                {
                  icon: HiPhone,
                  label: "Phone",
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
                  gradient: "from-sky-500 to-indigo-500",
                },
                {
                  icon: HiLocationMarker,
                  label: "Location",
                  value: personalInfo.location,
                  gradient: "from-indigo-500 to-violet-500",
                },
              ].map(({ icon: Icon, label, value, href, gradient }) => (
                <div key={label} className="glass-card-hover flex items-center gap-4 p-4">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-white">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {!personalInfo.github.startsWith("[") && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-indigo-400/40 hover:text-indigo-400"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {!personalInfo.linkedin.startsWith("[") && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-indigo-400/40 hover:text-indigo-400"
                >
                  <FaLinkedin size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                { id: "subject", label: "Subject", type: "text", placeholder: "Flutter app project" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    required
                    placeholder={placeholder}
                    value={formState[id as keyof typeof formState]}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, [id]: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/15"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your mobile app project..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/15"
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                <HiPaperAirplane size={16} />
                {sent ? "Opening email client..." : sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
