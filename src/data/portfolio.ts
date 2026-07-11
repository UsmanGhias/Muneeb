export interface FeatureModule {
  title: string;
  description: string;
  icon: string;
}

export interface AppScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface AppProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  accent: string;
  accentSecondary: string;
  icon: string;
  logo?: string;
  website: string;
  playStore?: string;
  github?: string;
  version?: string;
  platform: string;
  features: string[];
  uxHighlights: string[];
  techStack: string[];
  architecture: string[];
  challenges: { challenge: string; solution: string }[];
  stats: { label: string; value: string }[];
  packageName: string;
  playStoreStatus: "launching" | "live";
  developer: string;
  appIcon?: string;
  featureModules?: FeatureModule[];
  screenshots: AppScreenshot[];
}

export const apps: AppProject[] = [
  {
    id: "noor-ul-haya",
    name: "Noor Ul Haya",
    tagline: "Light for your sacred rhythm",
    description:
      "Your daily Islamic companion — accurate prayer times, Quran & Hadith with English and Urdu, Qibla compass, 60+ duas & azkar, digital Tasbih, and per-salah alarms. Bilingual, offline-capable, and privacy-first with no accounts or ads.",
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
      "Real-time Qibla compass with alignment feedback",
      "Full Holy Quran — 114 surahs with English & Urdu translations",
      "Hadith collections with bookmark & search",
      "60+ duas and azkar by category with authentic references",
      "Digital Tasbih with tap counter",
      "Daily prayer tracker with visual progress ring",
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
          "Implemented exact alarm scheduling with foreground notification channels and user-guided battery optimization bypass during onboarding.",
      },
      {
        challenge: "Accurate prayer times across regions and scholarly methods",
        solution:
          "Integrated Adhan Dart engine with UIS, MWL, and multiple calculation methods — user-selectable per location.",
      },
      {
        challenge: "Full offline experience for worship content",
        solution:
          "Bundled Quran, Duas, and Tasbih locally with Hive-backed preferences — zero network after initial setup.",
      },
    ],
    stats: [
      { label: "Spiritual Modules", value: "6" },
      { label: "Obligatory Salah", value: "5" },
      { label: "Offline Access", value: "24/7" },
    ],
    featureModules: [
      { title: "Prayer Dashboard", description: "Live Adhan times, Hijri calendar, and daily tracker ring.", icon: "🕌" },
      { title: "Exact Alarms", description: "Per-salah reminders 15 minutes before each Adhan.", icon: "🔔" },
      { title: "Qibla Compass", description: "Real-time heading with alignment feedback toward the Kaaba.", icon: "🧭" },
      { title: "Quran Reader", description: "Surah list with Arabic names and verse counts.", icon: "📖" },
      { title: "Duas Library", description: "Supplications with Arabic, transliteration and references.", icon: "🤲" },
      { title: "Digital Tasbih", description: "Tap counter for dhikr with instant reset.", icon: "📿" },
    ],
    screenshots: [],
  },
  {
    id: "forgenfit",
    name: "ForgeNFit",
    tagline: "Your gym journey starts here",
    description:
      "An AI-powered fitness & nutrition app for gym-goers — plan workouts, track nutrition, hit PRs with video-guided splits and an adaptive AI coach built for Android.",
    category: "Health & Fitness",
    accent: "#f97316",
    accentSecondary: "#ea580c",
    icon: "💪",
    appIcon: "/apps/forgenfit/icon.png",
    website: "https://forgenfit.codcrafters.org",
    playStore:
      "https://play.google.com/store/apps/details?id=org.codcrafters.forgenfit",
    version: "v2.6.7",
    packageName: "org.codcrafters.forgenfit",
    playStoreStatus: "launching",
    developer: "CodCrafters",
    platform: "Android",
    features: [
      "7-day PPL/UL workout splits with video-guided form cues",
      "Nutrition tracker with 50,000+ food database",
      "AI coach adapting plans based on progress & recovery",
      "Body metrics — BMI, WHR, TEE, BMR tracking",
      "Smart rest timer based on set intensity",
      "Offline mode for workouts & timer",
      "Anthropometric calculator with live dashboard",
      "Weekly strength & body metric trends",
    ],
    uxHighlights: [
      "Goal setup in 30 seconds — Build Muscle, Lose Fat, Get Stronger",
      "Log meals in 10 seconds with auto macros",
      "Clean charts for weekly body metric trends",
      "No account required to start training",
    ],
    techStack: [
      "Flutter",
      "Riverpod",
      "Hive",
      "REST APIs",
      "Material 3",
      "Local Notifications",
      "Offline Sync",
    ],
    architecture: [
      "Feature-based Clean Architecture",
      "Repository layer for workout & nutrition data",
      "Local cache with background sync",
      "Modular AI coaching service",
    ],
    challenges: [
      {
        challenge: "Offline workout access with sync when back online",
        solution:
          "Built Hive-backed workout cache with conflict-free sync queue — users train without internet, data merges on reconnect.",
      },
      {
        challenge: "Complex body metric calculations with real-time UI",
        solution:
          "Created a dedicated metrics engine using Devine IBW, Mifflin-St Jeor BMR, and activity multipliers — rendered in animated dashboard cards.",
      },
      {
        challenge: "Adaptive AI coaching without server dependency",
        solution:
          "Designed rule-based AI coach with local progress tracking — adjusts splits, rest, and nutrition targets based on logged performance.",
      },
    ],
    stats: [
      { label: "App Size", value: "24 MB" },
      { label: "Price", value: "Free" },
      { label: "Food Database", value: "50K+" },
    ],
    screenshots: [
      { src: "/apps/forgenfit/1.png", alt: "ForgeNFit — Home Dashboard", caption: "Home" },
      { src: "/apps/forgenfit/2.png", alt: "ForgeNFit — Workout", caption: "Workout" },
      { src: "/apps/forgenfit/3.png", alt: "ForgeNFit — Nutrition", caption: "Nutrition" },
      { src: "/apps/forgenfit/4.png", alt: "ForgeNFit — AI Coach", caption: "AI Coach" },
      { src: "/apps/forgenfit/5.png", alt: "ForgeNFit — Body Metrics", caption: "Body Metrics" }
    ],
  },
  {
    id: "clivora",
    name: "Clivora",
    tagline: "Connect marketplace + business OS",
    description:
      "A cloud-first business operating system for freelancers and agencies — private marketplace, CRM, projects, invoicing, and 19 integrated tools on web and Android with one account.",
    category: "Business · Productivity",
    accent: "#6366f1",
    accentSecondary: "#4f46e5",
    icon: "📊",
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
      "Business command center with revenue snapshot",
      "Client CRM with search & management",
      "Projects, time tracking & budgets",
      "Professional invoicing with branded PDF export",
      "CLIVORA Connect — private freelancer marketplace",
      "Expense tracking across 11 categories",
      "CLIVORA AI — local business insights",
      "File Vault with secure on-device storage",
    ],
    uxHighlights: [
      "Morning dashboard saves 30+ minutes daily",
      "Private contact until mutual accept on Connect",
      "Light & dark mode with polished Material UI",
      "Offline-first — data stays on device",
    ],
    techStack: [
      "Flutter",
      "Riverpod",
      "Hive / SQLite",
      "GoRouter",
      "PDF Generation",
      "Google Play Billing",
      "REST APIs",
    ],
    architecture: [
      "Clean Architecture with domain-driven modules",
      "Local-first data layer with encrypted storage",
      "Repository pattern for CRM, invoices & projects",
      "Modular feature flags for Pro/Pro Plus tiers",
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
          "Built Connect request flow with mutual-accept gate — emails hidden until both parties agree, then CRM auto-populates.",
      },
      {
        challenge: "Branded PDF invoice generation on mobile",
        solution:
          "Implemented on-device PDF engine with Classic, Modern, and Minimal templates — logo upload and 8 accent colors.",
      },
    ],
    stats: [
      { label: "Business Tools", value: "19" },
      { label: "Offline & Private", value: "100%" },
      { label: "Free Projects", value: "∞" },
    ],
        featureModules: [
      { title: "Command Center", description: "Revenue, outstanding invoices and active projects at a glance.", icon: "📊" },
      { title: "Client CRM", description: "Full client database with search, notes and contact management.", icon: "👤" },
      { title: "Invoicing", description: "Tax, discounts, and branded PDF export workflow.", icon: "📄" },
      { title: "CLIVORA Connect", description: "Private marketplace — contact hidden until mutual accept.", icon: "🔗" },
      { title: "CLIVORA AI", description: "Local business insights, follow-ups and revenue alerts.", icon: "✨" },
      { title: "File Vault", description: "Secure on-device storage for project assets.", icon: "🔒" },
    ],
screenshots: [],
  },
  {
    id: "codcrafters",
    name: "CODCrafters",
    tagline: "Your vision, our code",
    description:
      "The official CODCrafters mobile app — discover our portfolio of Flutter products, ERP solutions, and custom software services. Built by the studio behind Noor Ul Haya, ForgeNFit, and Clivora for clients across 25+ countries.",
    category: "Business · Studio",
    accent: "#06b6d4",
    accentSecondary: "#0891b2",
    icon: "⚡",
    website: "https://codcrafters.org",
    playStore:
      "https://play.google.com/store/apps/details?id=org.codcrafters.codcrafters_app",
    version: "v1.0.0",
    packageName: "org.codcrafters.codcrafters_app",
    playStoreStatus: "launching",
    developer: "CodCrafters",
    platform: "Android",
    features: [
      "Explore CODCrafters portfolio of Flutter mobile apps",
      "Request quotes for custom software development",
      "Odoo ERP & business automation services",
      "AI/ML integration for intelligent products",
      "Case studies from 185+ delivered projects",
      "Direct contact with the development team",
      "Learn about mobile, web & cloud solutions",
      "Stay updated on new product launches",
    ],
    uxHighlights: [
      "Bespoke solutions tailored to unique business goals",
      "Pixel-perfect UI from Figma to production",
      "Agile development with continuous delivery",
      "Dedicated support beyond project delivery",
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
      { title: "Mobile Products", description: "Flutter apps built by the CodCrafters studio.", icon: "📱" },
      { title: "Custom Software", description: "Bespoke web, mobile and cloud solutions.", icon: "⚙️" },
      { title: "Odoo ERP", description: "Business automation, accounting and inventory.", icon: "🏭" },
      { title: "AI & ML", description: "Intelligent products with modern AI integration.", icon: "🤖" },
      { title: "Case Studies", description: "Results from 185+ completed engagements.", icon: "📈" },
      { title: "Get a Quote", description: "Direct line to the team for free consultation.", icon: "💬" },
    ],
screenshots: [],
  },
];

export const expertiseDomains = [
  {
    title: "Islamic & Lifestyle Apps",
    subtitle: "Noor Ul Haya",
    description:
      "Serene Material 3 experiences for worship — prayer engines, offline content, exact alarms, and privacy-first architecture.",
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
      "Freelancer operating systems — CRM, invoicing, 19 tools, private marketplaces, and PDF generation on mobile.",
    accent: "#6366f1",
    skills: ["SQLite", "PDF Engine", "Play Billing", "CRM", "Local-First"],
  },
  {
    title: "Studio-Grade Products",
    subtitle: "CODCrafters",
    description:
      "Production Flutter across 25+ countries — reusable architecture, ERP integration, and deployment at scale.",
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

export const expertiseCategories = [
  {
    title: "Core Mobile",
    items: ["Flutter", "Dart", "Material 3", "Responsive Design", "Animations"],
  },
  {
    title: "Architecture & State",
    items: [
      "Clean Architecture",
      "Riverpod",
      "Bloc",
      "Provider",
      "Offline-first Development",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Firebase",
      "REST APIs",
      "Hive",
      "SQLite",
      "API Integration",
      "Secure Storage",
    ],
  },
  {
    title: "Platform & Delivery",
    items: [
      "Google Play Deployment",
      "App Store Deployment",
      "Push Notifications",
      "Authentication",
      "Performance Optimization",
      "Testing",
    ],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
  },
];

export const philosophyPoints = [
  {
    title: "Thoughtful Planning",
    description:
      "Every app begins with understanding the user journey — mapping flows, defining architecture, and choosing the right state management before writing a single widget.",
  },
  {
    title: "Clean Architecture",
    description:
      "Feature-first modules with clear separation between presentation, domain, and data layers — codebases that scale from MVP to production without rewrites.",
  },
  {
    title: "Pixel-Perfect UI",
    description:
      "Translating Figma designs into Flutter with meticulous attention to spacing, typography, and motion — interfaces that feel native on both Android and iOS.",
  },
  {
    title: "Smooth Animations",
    description:
      "Purposeful micro-interactions and transitions that guide users through flows — never decorative, always enhancing the experience.",
  },
  {
    title: "Performance Optimization",
    description:
      "Profiling with DevTools, optimizing rebuilds, lazy-loading media, and ensuring 60fps scroll — apps that feel instant even on mid-range devices.",
  },
  {
    title: "Long-term Maintainability",
    description:
      "Reusable components, consistent naming, documented architecture decisions, and testable code — built for the team that inherits it.",
  },
];

export const personalInfo = {
  name: "Muhammad Muneeb",
  title: "Flutter Mobile Application Developer",
  tagline:
    "Building premium Android & iOS applications with beautiful user experiences, scalable architecture, and production-ready Flutter development.",
  location: "Samundri, Pakistan",
  email: "muhammadmuneeb1061@gmail.com",
  phone: "+92 305 1621117",
  github: "https://github.com/usmanghias/muneeb",
  linkedin: "",
  resume: "/resume.pdf",
  stats: {
    yearsExperience: 4,
    appsBuilt: 4,
    platforms: 2,
  },
};
