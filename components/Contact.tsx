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

type FormData = { name: string; email: string; subject: string; message: string };
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)] opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                Let&apos;s Work <span className="gradient-text">Together</span>
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Have a project in mind or need a Flutter developer? I&apos;d love to hear from you.
                Drop me a message and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 glass-card p-4 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${item.color}, var(--accent2))` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[var(--text-primary)] text-sm font-medium hover:text-[var(--accent)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[var(--text-primary)] text-sm font-medium">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <FaGithub />, href: 'https://github.com/usmanghias/muneeb', label: 'GitHub' },
                { icon: <FaLinkedin />, href: 'https://linkedin.com/', label: 'LinkedIn' },
                { icon: <FaEnvelope />, href: 'mailto:muhammadmuneeb1061@gmail.com', label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl border border-[rgba(108,99,255,0.25)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project inquiry' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider">
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
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(10,10,20,0.6)] border border-[rgba(108,99,255,0.2)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] text-sm transition-all duration-200 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.15)]"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(10,10,20,0.6)] border border-[rgba(108,99,255,0.2)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] text-sm resize-none transition-all duration-200 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.15)]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
              >
                {status === 'loading' && <FaSpinner className="animate-spin" />}
                {status === 'success' && <FaCheckCircle />}
                {status === 'idle' && <FaPaperPlane />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm font-medium"
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
