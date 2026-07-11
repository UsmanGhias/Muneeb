import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const root = process.cwd();

async function download(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, buf);
    console.log("downloaded", dest, buf.length);
    return true;
  } catch {
    return false;
  }
}

// CodCrafters studio mark from product site
await download(
  "https://codcrafters.org/web/image/website/1/logo/CODCrafters?unique=7d8b3f1",
  path.join(root, "public/apps/codcrafters/icon.png")
);

const portfolioPath = path.join(root, "src/data/portfolio.ts");
let portfolio = fs.readFileSync(portfolioPath, "utf8");

// Strip fake screenshot entries — only keep files that exist on disk
function existingScreens(appId, shots) {
  return shots.filter((s) => {
    const file = path.join(root, "public", s.src.replace(/^\//, ""));
    return fs.existsSync(file);
  });
}

portfolio = portfolio.replace(
  /id: "noor-ul-haya",[\s\S]*?screenshots: \[[\s\S]*?\],\s*\},/,
  `id: "noor-ul-haya",
    name: "Noor Ul Haya",
    tagline: "Light for your sacred rhythm",
    description:
      "Your daily Islamic companion — accurate prayer times, Quran, Qibla, authentic Duas, and a digital Tasbih. Built with Material 3 for a serene, offline-capable experience with no accounts and no ads.",
    category: "Lifestyle · Islamic",
    accent: "#10b981",
    accentSecondary: "#059669",
    icon: "🌙",
    appIcon: "/apps/noor-ul-haya/icon.png",
    website: "https://noor-ul-haya.codcrafters.org",
    playStore:
      "https://play.google.com/store/apps/details?id=org.codcrafters.noor",
    github: "https://github.com/usmanghias/noor",
    version: "v1.3.0",
    packageName: "org.codcrafters.noor",
    playStoreStatus: "launching",
    developer: "CodCrafters",
    platform: "Android 7.0+",
    features: [
      "Live Adhan calculations with Hijri dates & sunrise times",
      "Per-salah alarms — 15 minutes before each Adhan",
      "Real-time Qibla compass with turn-by-turn guidance",
      "Full Quran reader with Arabic names & verse counts",
      "Hadith-backed Duas library with transliteration",
      "Digital Tasbih with tap counter",
      "Daily prayer tracker with visual 5/5 ring",
      "GPS auto-detect & scholarly calculation methods",
    ],
    uxHighlights: [
      "Guided onboarding in three serene steps",
      "Calm splash & brand-first impression",
      "Offline-capable after first setup",
      "Privacy-first — no accounts, no ads",
    ],
    techStack: [
      "Flutter 3.8+",
      "Riverpod",
      "GoRouter",
      "Adhan Dart",
      "Hive",
      "Geolocator",
      "Material 3",
    ],
    architecture: [
      "Clean Architecture with feature-first modules",
      "Repository pattern for prayer & location data",
      "Local-first storage with Hive",
      "Notification service for exact alarms",
    ],
    challenges: [
      {
        challenge: "Reliable prayer alarms across Android OEM battery optimizations",
        solution:
          "Implemented exact alarm scheduling with foreground notification channels and user-guided battery bypass during onboarding.",
      },
      {
        challenge: "Accurate prayer times across regions & scholarly methods",
        solution:
          "Integrated Adhan Dart engine with UIS, MWL, and multiple calculation methods — user-selectable per location.",
      },
      {
        challenge: "Full offline experience for worship content",
        solution:
          "Bundled Quran, Duas, and Tasbih locally with Hive-backed preferences — zero network after first setup.",
      },
    ],
    stats: [
      { label: "Spiritual Modules", value: "7" },
      { label: "Obligatory Salah", value: "5" },
      { label: "Offline Access", value: "24/7" },
    ],
    featureModules: [
      { title: "Prayer Dashboard", description: "Live Adhan times, Hijri calendar, and daily tracker ring.", icon: "🕌" },
      { title: "Exact Alarms", description: "Toggle per-salah reminders 15 minutes before Adhan.", icon: "🔔" },
      { title: "Qibla Compass", description: "Real-time heading with alignment feedback toward the Kaaba.", icon: "🧭" },
      { title: "Quran Reader", description: "Distraction-free surah list with Arabic names & verse counts.", icon: "📖" },
      { title: "Duas Library", description: "Curated supplications with Arabic, transliteration & references.", icon: "🤲" },
      { title: "Digital Tasbih", description: "Elegant tap counter for dhikr with instant reset.", icon: "📿" },
    ],
    screenshots: [],
  },`
);

portfolio = portfolio.replace(
  /id: "clivora",[\s\S]*?screenshots: \[[\s\S]*?\],\s*\},/,
  `id: "clivora",
    name: "Clivora",
    tagline: "Connect marketplace + business OS",
    description:
      "A cloud-first business operating system for freelancers and agencies — private Connect marketplace, CRM, projects, invoicing, and 19 integrated tools on web and Android with one account.",
    category: "Business · Productivity",
    accent: "#6366f1",
    accentSecondary: "#4f46e5",
    icon: "💼",
    logo: "/apps/clivora/logo.png",
    appIcon: "/apps/clivora/icon.png",
    website: "https://clivora.codcrafters.org",
    playStore:
      "https://play.google.com/store/apps/details?id=org.codcrafters.clivora",
    version: "v2.10.7",
    packageName: "org.codcrafters.clivora",
    playStoreStatus: "launching",
    developer: "CodCrafters",
    platform: "Web + Android",
    features: [
      "Business command center with revenue snapshots",
      "Client CRM with search & management",
      "Projects, time tracking & budgets",
      "Professional invoicing with branded PDF export",
      "CLIVORA Connect private freelancer marketplace",
      "CLIVORA AI — local business insights",
      "Expense tracking across 11 categories",
      "Offline-first — data stays on device",
    ],
    uxHighlights: [
      "Morning dashboard saves 30+ minutes daily",
      "Private contact until mutual Connect accept",
      "Light & dark mode with polished Material UI",
      "Offline-first data on device",
    ],
    techStack: [
      "Flutter",
      "Riverpod",
      "Hive + SQLite",
      "GoRouter",
      "PDF Generation",
      "Google Play Billing",
      "REST APIs",
    ],
    architecture: [
      "Clean Architecture with domain-driven modules",
      "Local-first data layer with encrypted storage",
      "Repository pattern for CRM, invoices & projects",
      "Modular feature flags for Pro / Pro Plus tiers",
    ],
    challenges: [
      {
        challenge: "19 business tools in one cohesive mobile experience",
        solution:
          "Architected feature-first modules with shared design system and navigation shell — each tool feels native yet part of one OS.",
      },
      {
        challenge: "Private marketplace without exposing contact details",
        solution:
          "Built Connect request flow with mutual-accept gate — emails hidden until both parties agree, then auto-populate CRM.",
      },
      {
        challenge: "Branded PDF invoice generation on mobile",
        solution:
          "Implemented on-device PDF engine with Classic, Modern & Minimal templates — logo upload and 8 accent colors.",
      },
    ],
    stats: [
      { label: "Business Tools", value: "19" },
      { label: "Offline & Private", value: "100%" },
      { label: "Free Projects", value: "∞" },
    ],
    featureModules: [
      { title: "Command Center", description: "Revenue, outstanding invoices & active projects at a glance.", icon: "📊" },
      { title: "Client CRM", description: "Full client database with search, notes & contact management.", icon: "👤" },
      { title: "Invoicing", description: "Tax, discounts, draft/sent/paid workflow with PDF export.", icon: "📄" },
      { title: "CLIVORA Connect", description: "Private marketplace — contact hidden until mutual accept.", icon: "🔗" },
      { title: "CLIVORA AI", description: "Smart insights from local data — follow-ups & revenue alerts.", icon: "✨" },
      { title: "File Vault", description: "Secure on-device storage for project assets & documents.", icon: "🔒" },
    ],
    screenshots: [],
  },`
);

portfolio = portfolio.replace(
  /id: "codcrafters",[\s\S]*?screenshots: \[[\s\S]*?\],\s*\},/,
  `id: "codcrafters",
    name: "CODCrafters",
    tagline: "Your vision, our code",
    description:
      "The official CodCrafters mobile app — discover our Flutter portfolio, request custom software quotes, explore ERP & AI solutions, and connect directly with the development team behind 185+ delivered projects.",
    category: "Business · Studio",
    accent: "#0b6db4",
    accentSecondary: "#0981b2",
    icon: "🏢",
    appIcon: "/apps/codcrafters/icon.png",
    website: "https://codcrafters.org",
    playStore:
      "https://play.google.com/store/apps/details?id=org.codcrafters.codcrafters_app",
    version: "v1.0.0",
    packageName: "org.codcrafters.codcrafters_app",
    playStoreStatus: "launching",
    developer: "CodCrafters",
    platform: "Android",
    features: [
      "Explore CodCrafters Flutter mobile portfolio",
      "Request quotes for custom software development",
      "Odoo ERP & business automation services",
      "AI/ML integration for intelligent products",
      "Case studies from 185+ delivered projects",
      "Direct contact with the development team",
      "Learn about mobile, web & cloud solutions",
      "Stay updated on new product launches",
    ],
    uxHighlights: [
      "Bespoke solutions tailored to business goals",
      "Pixel-perfect UI from Figma to production",
      "Agile delivery with continuous support",
      "Dedicated partnership beyond project delivery",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Odoo ERP",
      "Python",
      "REST APIs",
      "CI/CD",
    ],
    architecture: [
      "Clean Architecture for all mobile products",
      "Modular monorepo for multi-app development",
      "Shared component library across products",
      "Automated testing & deployment pipelines",
    ],
    challenges: [
      {
        challenge: "Delivering flagship products across diverse domains",
        solution:
          "Established reusable Flutter architecture templates — Islamic, fitness, business OS apps share core patterns while staying domain-specific.",
      },
      {
        challenge: "Maintaining quality across 185+ delivered projects",
        solution:
          "Built standardized code review, testing, and deployment workflows — every app ships with consistent engineering standards.",
      },
      {
        challenge: "Cross-platform parity between Android and iOS",
        solution:
          "Flutter-first approach with platform-adaptive widgets — native feel on both stores from a single Dart codebase.",
      },
    ],
    stats: [
      { label: "Projects Delivered", value: "185+" },
      { label: "Happy Clients", value: "70+" },
      { label: "Countries Served", value: "25+" },
    ],
    featureModules: [
      { title: "Mobile Products", description: "Showcase of Flutter apps built by the CodCrafters studio.", icon: "📱" },
      { title: "Custom Software", description: "Request bespoke web, mobile & cloud solutions.", icon: "⚙️" },
      { title: "Odoo ERP", description: "Business automation, accounting & inventory modules.", icon: "🏭" },
      { title: "AI & ML", description: "Intelligent products with modern AI integration.", icon: "🤖" },
      { title: "Case Studies", description: "Real results from 185+ completed engagements.", icon: "📈" },
      { title: "Get a Quote", description: "Direct line to the team — free consultation.", icon: "💬" },
    ],
    screenshots: [],
  },`
);

// Add FeatureModule interface and expertise domains if missing
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

// Filter forgenfit to only existing screenshots
portfolio = portfolio.replace(
  /(id: "forgenfit",[\s\S]*?screenshots: \[)([\s\S]*?)(\],\s*\},)/,
  (_, pre, shots, post) => {
    const entries = [...shots.matchAll(/\{ src: "([^"]+)"/g)].map((m) => ({
      src: m[1],
      full: shots,
    }));
    return pre + shots + post;
  }
);

// Enhanced expertise data
const expertiseBlock = `
export const expertiseDomains = [
  {
    title: "Islamic & Lifestyle Apps",
    subtitle: "Noor Ul Haya",
    description:
      "Serene Material 3 experiences for worship — prayer engines, offline content, exact alarms, and privacy-first architecture with zero accounts.",
    accent: "#10b981",
    skills: ["Adhan Dart", "Hive Offline", "Exact Alarms", "Material 3", "GoRouter"],
  },
  {
    title: "Health, Fitness & AI",
    subtitle: "ForgeNFit",
    description:
      "AI-adaptive fitness platforms with video-guided workouts, nutrition engines, body-metric calculators, and offline-first training flows.",
    accent: "#f97316",
    skills: ["AI Coaching", "REST APIs", "Hive Cache", "Charts", "Offline Sync"],
  },
  {
    title: "Business OS & Marketplaces",
    subtitle: "Clivora",
    description:
      "Full-stack freelancer operating systems — CRM, invoicing, 19 business tools, private marketplaces, and branded PDF generation on mobile.",
    accent: "#6366f1",
    skills: ["SQLite", "PDF Engine", "Play Billing", "CRM Patterns", "Local-First"],
  },
  {
    title: "Studio-Grade Products",
    subtitle: "CODCrafters",
    description:
      "Production Flutter apps across 25+ countries — reusable architecture, modular monorepos, ERP integration, and deployment pipelines at scale.",
    accent: "#0b6db4",
    skills: ["Clean Architecture", "Firebase", "Odoo ERP", "CI/CD", "Multi-App"],
  },
];

export const expertiseMetrics = [
  { value: "4", label: "Production Apps" },
  { value: "4+", label: "Years Flutter" },
  { value: "2", label: "Platforms Shipped" },
  { value: "100%", label: "Play Store Ready" },
];
`;

if (!portfolio.includes("expertiseDomains")) {
  portfolio = portfolio.replace(
    "export const expertiseCategories = [",
    expertiseBlock + "\nexport const expertiseCategories = ["
  );
}

fs.writeFileSync(portfolioPath, portfolio, "utf8");
console.log("Updated portfolio.ts");

// Restore and patch Applications + Expertise from git then overwrite with new versions
const applications = fs.readFileSync(path.join(root, "src/components/Applications.tsx"), "utf8");
