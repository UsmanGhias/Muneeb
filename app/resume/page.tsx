import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { FaCode, FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin, FaLocationDot, FaMobileScreen, FaPhone, FaRocket, FaScrewdriverWrench, FaTrophy, FaUsers } from 'react-icons/fa6';
import { SiDart, SiFirebase, SiFlutter } from 'react-icons/si';

const resumeImagePath = '/resume';
const resumeDownloadPath = '/resume';

export const metadata: Metadata = {
  title: 'Muhammad Muneeb Resume',
  description: 'View or download Muhammad Muneeb\'s senior Flutter mobile developer resume.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Muhammad Muneeb Resume',
    description: 'Direct access to Muhammad Muneeb\'s latest visual resume.',
    type: 'website',
    url: '/resume',
  },
};

const contactItems = [
  { icon: FaEnvelope, label: 'muhammadmuneeb1061@gmail.com' },
  { icon: FaPhone, label: '+92 305 1621117' },
  { icon: FaLocationDot, label: 'Samundri, Pakistan' },
  { icon: FaExternalLinkAlt, label: 'muneeb.codcrafters.org' },
  { icon: FaLinkedin, label: 'linkedin.com/in/m-muneeb' },
  { icon: FaGithub, label: 'github.com/Muneeb-Haider' },
];

const skillGroups = [
  {
    icon: FaMobileScreen,
    title: 'Mobile Development',
    skills: [
      ['Flutter', '92%'],
      ['Dart', '90%'],
      ['Android', '85%'],
      ['iOS', '75%'],
    ],
  },
  {
    icon: FaCode,
    title: 'Backend and Database',
    skills: [
      ['Firebase', '85%'],
      ['REST APIs', '82%'],
      ['Hive Local DB', '80%'],
      ['MySQL', '70%'],
      ['MongoDB', '65%'],
    ],
  },
  {
    icon: FaScrewdriverWrench,
    title: 'Tools and Others',
    skills: [
      ['Git and GitHub', '86%'],
      ['VS Code', '95%'],
      ['Figma', '72%'],
      ['Postman', '80%'],
    ],
  },
];

const stats = [
  { icon: FaCode, value: '20+', label: 'Projects Completed' },
  { icon: FaUsers, value: '15+', label: 'Happy Clients' },
  { icon: FaRocket, value: '4+', label: 'Apps on Play Store' },
  { icon: FaTrophy, value: '100%', label: 'Client Satisfaction' },
];

const experiences = [
  {
    period: '2023 to Present',
    place: 'Samundri, Pakistan',
    role: 'Flutter Developer',
    company: 'CODCrafters',
    type: 'Full Time',
    points: ['Building production Flutter apps: Noor Ul Haya, ForgeNFit, Clivora and CODCrafters.', 'Implementing state management with Riverpod and local storage with Hive.', 'Integrated REST APIs, Firebase, offline sync and push notifications.', 'Delivered pixel perfect UIs with Material 3, animations and platform adaptive widgets.'],
  },
  {
    period: '2022 to 2023',
    place: 'Remote',
    role: 'Junior Flutter Developer',
    company: 'Startup Studio',
    type: 'Internship',
    points: ['Built UI components and screens for mobile applications.', 'Fixed bugs and optimized app performance.', 'Participated in code reviews and agile ceremonies.', 'Learned Firebase integration, push notifications and local storage.'],
  },
  {
    period: '2021 to Present',
    place: 'Global',
    role: 'Freelance Mobile Developer',
    company: 'Self Employed',
    type: 'Freelance',
    points: ['Delivered custom Flutter applications for international clients.', 'Handled project planning, design, development and deployment.', 'Published apps on Google Play Store and Apple App Store.'],
  },
];

const projects = [
  ['Clivora', 'Business OS', 'Marketplace, CRM, projects, invoicing, time tracking and 19+ integrated tools.'],
  ['ForgeNFit', 'AI Fitness App', 'Workout plans, nutrition tracker, AI coach, video cues, PRs and analytics.'],
  ['Noor Ul Haya', 'Islamic Lifestyle', 'Quran, Hadith, Prayer times, Qibla compass, Tasbeeh, Duas and Islamic calendar.'],
  ['CODCrafters', 'Company App', 'Portfolio, ERP solutions, services, case studies and business automation.'],
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(163,61,255,0.18),transparent_30%),#050712] px-5 py-8 text-white sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent2)] transition-colors hover:text-white">
              <FaArrowLeft /> Back to portfolio
            </Link>
            <h1 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Muhammad Muneeb Resume</h1>
            <p className="mt-1 text-sm text-white/70 sm:text-base">Share this page for direct access to the latest visual resume.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={resumeImagePath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(0,212,255,0.35)] bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[var(--accent2)] hover:text-[var(--accent2)]">
              Open Resume <FaExternalLinkAlt />
            </a>
            <a href={resumeDownloadPath} download="muhammad-muneeb-resume.html" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,212,255,0.24)] transition-transform duration-300 hover:scale-105">
              Download Resume <FaDownload />
            </a>
          </div>
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-[#020817] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:p-5 lg:p-6">
          <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
            <aside className="rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.04] p-5">
              <div className="relative overflow-hidden rounded-2xl border border-violet-500/70">
                <Image src="/profile.jpeg" alt="Muhammad Muneeb" width={900} height={900} priority className="aspect-square w-full object-cover" />
                <div className="absolute bottom-4 left-4 rounded-full border border-cyan-300/30 bg-black/45 px-4 py-2 text-sm backdrop-blur"><span className="mr-2 inline-block h-3 w-3 rounded-full bg-emerald-400" />Available for New Opportunities</div>
              </div>

              <div className="mt-6 space-y-6">
                <SectionTitle title="Contact" />
                <div className="space-y-4 text-sm text-white/85">{contactItems.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3"><Icon className="text-cyan-300" /> <span>{label}</span></div>)}</div>
                <SectionTitle title="Technical Skills" />
                {skillGroups.map(({ icon: Icon, title, skills }) => <div key={title} className="space-y-3"><h3 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300"><span className="grid h-9 w-9 place-items-center rounded-full bg-cyan-400/10"><Icon /></span>{title}</h3>{skills.map(([name, value]) => <div key={name} className="grid grid-cols-[88px_1fr_42px] items-center gap-3 text-sm"><span>{name}</span><span className="h-2 rounded-full bg-white/10"><span className="block h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-300" style={{ width: value }} /></span><span className="text-cyan-300">{value}</span></div>)}</div>)}
                <SectionTitle title="Education" />
                <div className="flex gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-cyan-400/10 text-cyan-300"><FaGraduationCap /></span><div><p className="font-bold">Bachelor of Science</p><p>Computer Science</p><p>PUCIT</p><p className="text-cyan-300">2019 to 2023</p></div></div>
              </div>
            </aside>

            <div className="space-y-7 p-2 sm:p-4">
              <header className="grid gap-5 xl:grid-cols-[1fr_200px]"><div><p className="text-5xl font-black leading-none tracking-tight sm:text-6xl">MUHAMMAD<br /><span className="text-cyan-400">MUNEEB</span></p><p className="mt-3 text-lg uppercase tracking-[0.18em] text-cyan-300">Senior Flutter Mobile Developer</p><div className="mt-4 flex flex-wrap gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm"><span className="flex items-center gap-2"><SiFlutter className="text-cyan-300" />Flutter</span><span className="flex items-center gap-2"><SiDart className="text-sky-400" />Dart</span><span className="flex items-center gap-2"><SiFirebase className="text-amber-400" />Firebase</span><span>Riverpod</span><span>REST APIs</span></div></div><div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6"><FaRocket className="text-3xl text-cyan-300" /><p className="mt-3 text-5xl font-black text-indigo-400">4+</p><p className="font-bold uppercase text-cyan-300">Years</p><p className="uppercase text-white/80">Experience</p><p className="mt-2 text-sm text-white/70">Building Scalable Mobile Solutions</p></div></header>
              <p className="max-w-4xl text-lg leading-8 text-white/75">Passionate Flutter developer with 4+ years of experience crafting high performance, cross platform mobile applications for Android and iOS. I build visually stunning, feature rich and scalable apps using clean architecture, modern state management and robust backend integrations.</p>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({ icon: Icon, value, label }) => <div key={label} className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-5"><Icon className="text-3xl text-cyan-300" /><p className="mt-2 text-3xl font-black text-cyan-300">{value}</p><p className="text-sm uppercase text-white/80">{label}</p></div>)}</div>
              <SectionTitle title="Work Experience" />
              <div className="space-y-6">{experiences.map((item) => <div key={item.role} className="grid gap-4 md:grid-cols-[145px_1fr]"><div className="text-sm"><p className="font-bold text-cyan-300">{item.period}</p><p className="text-white/60">{item.place}</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"><div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="text-xl font-bold">{item.role}</h3><p className="font-bold text-violet-400">{item.company}</p></div><span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">{item.type}</span></div><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></div>)}</div>
              <SectionTitle title="Featured Projects" />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{projects.map(([name, type, description]) => <div key={name} className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-5 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-violet-500/60 text-3xl font-black">C</div><h3 className="mt-3 font-bold">{name}</h3><p className="text-sm text-cyan-300">{type}</p><p className="mt-2 text-sm text-white/70">{description}</p></div>)}</div>
              <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-5 text-center text-lg font-bold">View or Download My Full Resume at muneeb.codcrafters.org/resume</div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className="flex items-center gap-4 text-lg font-bold uppercase tracking-[0.22em] text-cyan-300"><span>{title}</span><span className="h-px flex-1 bg-white/20" /></h2>;
}
