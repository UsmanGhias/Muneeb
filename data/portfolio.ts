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
  appIcon?: string;
  website: string;
  playStore?: string;
  version?: string;
  packageName: string;
  playStoreStatus: "launching" | "live";
  developer: string;
  platform: string;
  features: string[];
  techStack: string[];
  featureModules?: FeatureModule[];
  screenshots: AppScreenshot[];
}

export const apps: AppProject[] = [
  {
    id: "noor-ul-haya",
    name: "Noor Ul Haya",
    tagline: "Light for your sacred rhythm",
    description:
      "Your daily Islamic companion with accurate prayer times, Quran & Hadith in English and Urdu, Qibla compass, 60+ duas & azkar, digital Tasbih, and per-salah alarms. Bilingual, offline-capable, and privacy-first.",
    category: "Lifestyle · Islam",
    accent: "#10b981",
    accentSecondary: "#059669",
    icon: "🌙",
    appIcon: "/apps/noor-ul-haya/icon.png",
    website: "https://noor-ul-haya.codcrafters.org",
    playStore: "https://play.google.com/store/apps/details?id=org.codcrafters.noor",
    version: "v1.3.0",
    packageName: "org.codcrafters.noor",
    playStoreStatus: "launching",
    developer: "CodCrafters",
    platform: "Android 7.0+",
    features: [
      "Live Adhan calculations with Hijri dates & sunrise times",
      "Per-salah alarms, 15 minutes before each Adhan",
      "Real-time Qibla compass with alignment feedback",
      "Full Holy Quran with Arabic names & verse counts",
      "Hadith collections with bookmark & search",
      "60+ duas and azkar by category with authentic references",
      "Digital Tasbih with tap counter",
      "Daily prayer tracker with visual progress ring",
      "GPS auto-detect & scholarly calculation methods",
    ],
    techStack: ["Flutter 3.x", "Riverpod", "GoRouter", "Adhan Dart", "Hive", "Geolocator", "Material 3"],
    featureModules: [
      { title: "Prayer Dashboard", description: "Live Adhan times, Hijri calendar, and daily tracker ring.", icon: "🕌" },
      { title: "Exact Alarms", description: "Per-salah reminders 15 minutes before each Adhan.", icon: "⏰" },
      { title: "Qibla Compass", description: "Real-time heading with alignment feedback.", icon: "🧭" },
      { title: "Quran Reader", description: "Full Holy Quran with Arabic names & verse counts.", icon: "📖" },
      { title: "Duas Library", description: "Supplications with Arabic, transliteration & references.", icon: "🤲" },
      { title: "Digital Tasbih", description: "Tap counter for dhikr with instant reset.", icon: "📿" },
    ],
    screenshots: [
      { src: "/apps/noor-ul-haya/1.svg", alt: "Noor Ul Haya quick actions dashboard", caption: "Home" },
      { src: "/apps/noor-ul-haya/2.svg", alt: "Noor Ul Haya Quran surah list", caption: "Quran" },
      { src: "/apps/noor-ul-haya/3.svg", alt: "Noor Ul Haya Quran pages grid", caption: "Pages" },
      { src: "/apps/noor-ul-haya/4.svg", alt: "Noor Ul Haya settings and explore menu", caption: "Settings" },
      { src: "/apps/noor-ul-haya/5.svg", alt: "Noor Ul Haya Zakat calculator", caption: "Zakat" },
    ],
  },
  {
    id: "forgenfit",
    name: "ForgeNFit",
    tagline: "Your gym journey starts here",
    description:
      "An AI-powered fitness & nutrition app for gym-goers. Plan workouts, track nutrition, hit PRs with video-guided form cues, and use an adaptive AI coach built for Android.",
    category: "Health & Fitness",
    accent: "#f97316",
    accentSecondary: "#ea580c",
    icon: "💪",
    appIcon: "/apps/forgenfit/icon.png",
    website: "https://forgenfit.codcrafters.org",
    playStore: "https://play.google.com/store/apps/details?id=org.codcrafters.forgenfit",
    version: "v2.6.7",
    packageName: "org.codcrafters.forgenfit",
    playStoreStatus: "launching",
    developer: "CodCrafters",
    platform: "Android",
    features: [
      "7-day PPL workout splits with video-guided form cues",
      "Nutrition tracker with 50,000+ food database",
      "AI coach adapting plans based on progress & recovery",
      "Body metrics including BMI, WHR, TDEE, and BMR tracking",
      "Smart rest timer based on set intensity",
      "Offline mode for workouts & timers",
      "Anthropometric calculator with live dashboard",
      "Weekly strength & body metric trends",
    ],
    techStack: ["Flutter", "Riverpod", "Hive", "REST APIs", "Material 3", "Local Notifications", "Offline Sync"],
    screenshots: [
      { src: "/apps/forgenfit/1.png", alt: "ForgeNFit Home Dashboard", caption: "Home" },
      { src: "/apps/forgenfit/2.png", alt: "ForgeNFit Workout", caption: "Workout" },
      { src: "/apps/forgenfit/3.png", alt: "ForgeNFit Nutrition", caption: "Nutrition" },
      { src: "/apps/forgenfit/4.png", alt: "ForgeNFit AI Coach", caption: "AI Coach" },
      { src: "/apps/forgenfit/5.png", alt: "ForgeNFit Body Metrics", caption: "Body Metrics" },
    ],
  },
  {
    id: "clivora",
    name: "Clivora",
    tagline: "Connect marketplace + business OS",
    description:
      "A cloud-first business operating system for freelancers and agencies with a private marketplace, CRM, projects, invoicing, and 19 integrated tools on web and Android with one account.",
    category: "Business · Productivity",
    accent: "#6366f1",
    accentSecondary: "#4f46e5",
    icon: "📊",
    appIcon: "/apps/clivora/icon.png",
    website: "https://clivora.codcrafters.org",
    playStore: "https://play.google.com/store/apps/details?id=org.codcrafters.clivora",
    version: "v2.10.7",
    packageName: "org.codcrafters.clivora",
    playStoreStatus: "launching",
    developer: "CodCrafters",
    platform: "Web + Android",
    features: [
      "Business command center with revenue snapshot",
      "Client CRM with search & management",
      "Projects, time tracking, and budgets",
      "Professional invoicing with branded PDF export",
      "CLIVORA Connect, private freelancer marketplace",
      "CLIVORA AI, local business insights & alerts",
      "File Vault with secure on-device storage",
      "Expense tracking across 11 categories",
    ],
    techStack: ["Flutter", "Riverpod", "Hive + SQLite", "GoRouter", "PDF Generation", "Play Billing", "REST APIs"],
    featureModules: [
      { title: "Command Center", description: "Revenue, outstanding invoices, and active projects at a glance.", icon: "📊" },
      { title: "Client CRM", description: "Full client database with search, notes, and contact management.", icon: "👥" },
      { title: "Invoicing", description: "Tax, discounts, and branded PDF export workflow.", icon: "📄" },
      { title: "CLIVORA Connect", description: "Private marketplace with contact hidden until mutual accept.", icon: "🔗" },
      { title: "CLIVORA AI", description: "Local business insights, follow-ups, and revenue alerts.", icon: "🤖" },
      { title: "File Vault", description: "Secure on-device storage for project assets.", icon: "🔒" },
    ],
    screenshots: [
      { src: "/apps/clivora/1.svg", alt: "Clivora Command Center", caption: "Command" },
      { src: "/apps/clivora/2.svg", alt: "Clivora CRM", caption: "CRM" },
      { src: "/apps/clivora/3.svg", alt: "Clivora Projects", caption: "Projects" },
      { src: "/apps/clivora/4.svg", alt: "Clivora Invoices", caption: "Invoices" },
      { src: "/apps/clivora/5.svg", alt: "Clivora Connect", caption: "Connect" },
    ],
  },
  {
    id: "codcrafters",
    name: "CODCrafters",
    tagline: "Your vision, our code",
    description:
      "The official CODCrafters mobile app. Discover our portfolio of Flutter products, ERP solutions, and custom software services built by the studio behind Noor Ul Haya, ForgeNFit, and Clivora.",
    category: "Business · Studio",
    accent: "#0b6b4d",
    accentSecondary: "#0891b2",
    icon: "⚡",
    appIcon: "/apps/codcrafters/icon.png",
    website: "https://codcrafters.org",
    playStore: "https://play.google.com/store/apps/details?id=org.codcrafters.codcrafters_app",
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
      "Case studies from 185+ completed engagements",
      "Direct contact with the development team",
      "Learn about mobile, web & cloud solutions",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Odoo ERP", "Python", "REST APIs", "CI/CD"],
    featureModules: [
      { title: "Mobile Products", description: "Flutter apps built by the CodCrafters studio.", icon: "📱" },
      { title: "Custom Software", description: "Bespoke web, mobile, and cloud solutions.", icon: "💻" },
      { title: "Odoo ERP", description: "Business automation, accounting, and inventory.", icon: "🏢" },
      { title: "AI & ML", description: "Intelligent products with modern AI integration.", icon: "🤖" },
      { title: "Case Studies", description: "Results from 185+ completed engagements.", icon: "📈" },
      { title: "Get a Quote", description: "Direct line to the team for free consultation.", icon: "💬" },
    ],
    screenshots: [
      { src: "/apps/codcrafters/1.svg", alt: "CODCrafters Studio Overview", caption: "Studio" },
      { src: "/apps/codcrafters/2.svg", alt: "CODCrafters Portfolio", caption: "Portfolio" },
      { src: "/apps/codcrafters/3.svg", alt: "CODCrafters Services", caption: "Services" },
      { src: "/apps/codcrafters/4.svg", alt: "CODCrafters Quote Request", caption: "Quote" },
      { src: "/apps/codcrafters/5.svg", alt: "CODCrafters Contact", caption: "Contact" },
    ],
  },
];
