'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
  FaCopy,
  FaUser,
  FaFileAlt,
  FaCommentDots,
  FaCheck,
} from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'muhammadmuneeb1061@gmail.com',
    href: 'mailto:muhammadmuneeb1061@gmail.com',
    color: 'var(--accent)',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+92 305 1621117',
    href: 'tel:+923051621117',
    color: 'var(--accent2)',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Samundri, Pakistan',
    href: null,
    color: 'var(--accent)',
  },
];

const availability = ['Freelance', 'Contract', 'Long-term projects'];

type FormData = { name: string; email: string; subject: string; message: string };
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [copied, setCopied] = useState<string | null>(null);
  const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || '';

  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/usmanghias/muneeb', label: 'GitHub' },
    ...(linkedInUrl ? [{ icon: <FaLinkedin />, href: linkedInUrl, label: 'LinkedIn' }] : []),
    { icon: <FaEnvelope />, href: 'mailto:muhammadmuneeb1061@gmail.com', label: 'Email' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const copyToClipboard = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 2000));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="title-line mx-auto mt-5" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--text-primary)]">Let&apos;s talk</h3>
              <p className="leading-relaxed text-[var(--text-secondary)]">
                Have a Flutter project in mind? Send a message and I will get back to you as soon as I can.
              </p>
            </div>

            <div className="story-block">
              <h4>Available for</h4>
              <ul className="mt-2 space-y-2">
                {availability.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[var(--text-primary)]">
                    <FaCheck className="text-[var(--accent2)]" size={12} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent2)]">
                  Response time
                </p>
                <p className="mt-1 text-sm text-white/75">Usually within 24 hours.</p>
              </div>
            </div>

            <div className="space-y-3">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="contact-info-card flex items-center gap-4 p-4 transition-all duration-300"
                >
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-base text-white"
                    style={{ background: `linear-gradient(135deg, ${item.color}, var(--accent2))` }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="break-all text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{item.value}</span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="copy-button"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copied === item.label ? <FaCheckCircle /> : <FaCopy />}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="mr-1 text-sm text-[var(--text-secondary)]">Connect on</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(108,99,255,0.22)] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="contact-form-card grid gap-5 p-7 lg:grid-cols-2">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', icon: <FaUser /> },
                {
                  id: 'email',
                  label: 'Email Address',
                  type: 'email',
                  placeholder: 'your@email.com',
                  icon: <FaEnvelope />,
                },
                {
                  id: 'subject',
                  label: 'Subject',
                  type: 'text',
                  placeholder: 'Project inquiry',
                  icon: <FaFileAlt />,
                },
              ].map((field) => (
                <div key={field.id} className={field.id === 'subject' ? 'lg:col-span-2' : undefined}>
                  <label
                    htmlFor={field.id}
                    className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]"
                  >
                    <span className="text-[var(--accent2)]">{field.icon}</span>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={form[field.id as keyof FormData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full rounded-xl border border-[rgba(108,99,255,0.18)] bg-[rgba(10,10,20,0.55)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] transition-all duration-200"
                  />
                </div>
              ))}

              <div className="lg:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]"
                >
                  <span className="text-[var(--accent2)]">
                    <FaCommentDots />
                  </span>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={500}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-[rgba(108,99,255,0.18)] bg-[rgba(10,10,20,0.55)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] transition-all duration-200"
                />
                <p className="mt-1 text-right text-xs text-[var(--text-secondary)]">{form.message.length}/500</p>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="col-span-full flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] py-3.5 text-sm font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:col-span-2"
                whileHover={{ scale: status === 'idle' ? 1.01 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.99 : 1 }}
              >
                {status === 'loading' && <FaSpinner className="animate-spin" />}
                {status === 'success' && <FaCheckCircle />}
                {status === 'idle' && <FaPaperPlane />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="lg:col-span-2 text-center text-sm font-medium text-green-400"
                >
                  Message sent successfully. I will get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
