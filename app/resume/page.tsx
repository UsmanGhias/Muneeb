import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';

const resumePath = '/docs/muhammad-muneeb-resume.pdf';

export const metadata: Metadata = {
  title: 'Muhammad Muneeb Resume',
  description: 'View or download Muhammad Muneeb\'s Flutter developer resume.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Muhammad Muneeb Resume',
    description: 'Direct access to Muhammad Muneeb\'s Flutter developer resume.',
    type: 'website',
    url: '/resume',
  },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(163,61,255,0.18),transparent_30%),#050712] px-5 py-8 text-white sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent2)] transition-colors hover:text-white">
              <FaArrowLeft /> Back to portfolio
            </Link>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] text-xl shadow-[0_0_28px_rgba(0,212,255,0.35)]">
                <FaFilePdf />
              </span>
              <div>
                <h1 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Muhammad Muneeb Resume</h1>
                <p className="mt-1 text-sm text-white/70 sm:text-base">Share this page for direct access to the latest resume.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(0,212,255,0.35)] bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[var(--accent2)] hover:text-[var(--accent2)]"
            >
              Open PDF <FaExternalLinkAlt />
            </a>
            <a
              href={resumePath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,212,255,0.24)] transition-transform duration-300 hover:scale-105"
            >
              Download Resume <FaDownload />
            </a>
          </div>
        </div>

        <div className="min-h-[70vh] flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <iframe
            title="Muhammad Muneeb resume PDF"
            src={`${resumePath}#view=FitH`}
            className="h-[78vh] w-full bg-white"
          />
        </div>
      </section>
    </main>
  );
}
