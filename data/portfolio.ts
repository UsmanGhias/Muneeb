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

export type StoryKind = 'engineering' | 'problem' | 'platform' | 'contribution';

export interface AppStory {
  kind: StoryKind;
  title: string;
  focus?: string;
  items?: string[];
  problem?: string;
  response?: string;
  purpose?: string;
  contribution?: string[];
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
  playStoreStatus: 'launching' | 'live';
  developer: string;
  platform: string;
  features: string[];
  techStack: string[];
  story: AppStory;
  featureModules?: FeatureModule[];
  screenshots: AppScreenshot[];
}

export const apps: AppProject[] = [
  {
    id: 'noor-ul-haya',
    name: 'Noor Ul Haya',
    tagline: 'Prayer times, Quran, and Qibla — bilingual, offline-first',
    description:
      'A daily Islamic companion with accurate prayer times, Quran & Hadith in English and Urdu, Qibla compass, duas & azkar, digital Tasbih, and per-salah alarms.',
    category: 'Lifestyle · Islam',
    accent: '#10b981',
    accentSecondary: '#059669',
    icon: '🌙',
    appIcon: '/apps/noor-ul-haya/icon.png',
    website: 'https://noor-ul-haya.codcrafters.org',
    playStore: 'https://play.google.com/store/apps/details?id=org.codcrafters.noor',
    version: 'v1.3.0',
    packageName: 'org.codcrafters.noor',
    playStoreStatus: 'launching',
    developer: 'CodCrafters',
    platform: 'Android 7.0+',
    features: [
      'Live Adhan calculations with Hijri dates & sunrise times',
      'Per-salah alarms, 15 minutes before each Adhan',
      'Real-time Qibla compass with alignment feedback',
      'Full Holy Quran with Arabic names & verse counts',
    ],
    techStack: ['Flutter', 'Hive', 'Adhan Dart', 'Riverpod'],
    story: {
      kind: 'engineering',
      title: 'Engineering focus',
      focus: 'Reliable offline prayer tools',
      items: [
        'Local Adhan calculations',
        'Qibla direction',
        'Hive-based offline access',
        'Per-salah reminders',
      ],
    },
    screenshots: [
      { src: '/apps/noor-ul-haya/1.svg', alt: 'Noor Ul Haya quick actions dashboard', caption: 'Home' },
      { src: '/apps/noor-ul-haya/2.svg', alt: 'Noor Ul Haya Quran surah list', caption: 'Quran' },
      { src: '/apps/noor-ul-haya/3.svg', alt: 'Noor Ul Haya Quran pages grid', caption: 'Pages' },
      { src: '/apps/noor-ul-haya/4.svg', alt: 'Noor Ul Haya settings and explore menu', caption: 'Settings' },
      { src: '/apps/noor-ul-haya/5.svg', alt: 'Noor Ul Haya Zakat calculator', caption: 'Zakat' },
    ],
  },
  {
    id: 'forgenfit',
    name: 'ForgeNFit',
    tagline: 'Workout and nutrition tracking with adaptive coaching',
    description:
      'A fitness and nutrition app for gym-goers: plan workouts, track nutrition, hit PRs with video-guided form cues, and use adaptive coaching on Android.',
    category: 'Health & Fitness',
    accent: '#f97316',
    accentSecondary: '#ea580c',
    icon: '💪',
    appIcon: '/apps/forgenfit/icon.png',
    website: 'https://forgenfit.codcrafters.org',
    playStore: 'https://play.google.com/store/apps/details?id=org.codcrafters.forgenfit',
    version: 'v2.6.7',
    packageName: 'org.codcrafters.forgenfit',
    playStoreStatus: 'launching',
    developer: 'CodCrafters',
    platform: 'Android',
    features: [
      '7-day PPL workout splits with video-guided form cues',
      'Nutrition tracker with large food database',
      'Adaptive coach based on progress and recovery',
      'Body metrics including BMI, WHR, TDEE, and BMR',
    ],
    techStack: ['Flutter', 'Riverpod', 'Hive', 'REST APIs'],
    story: {
      kind: 'problem',
      title: 'User problem',
      problem: 'Workout, nutrition and body metrics were spread across separate tools.',
      response:
        'Combined guided training, nutrition tracking, health calculations and adaptive coaching in one Flutter application.',
    },
    screenshots: [
      { src: '/apps/forgenfit/1.png', alt: 'ForgeNFit Home Dashboard', caption: 'Home' },
      { src: '/apps/forgenfit/2.png', alt: 'ForgeNFit Workout', caption: 'Workout' },
      { src: '/apps/forgenfit/3.png', alt: 'ForgeNFit Nutrition', caption: 'Nutrition' },
      { src: '/apps/forgenfit/4.png', alt: 'ForgeNFit AI Coach', caption: 'AI Coach' },
      { src: '/apps/forgenfit/5.png', alt: 'ForgeNFit Body Metrics', caption: 'Body Metrics' },
    ],
  },
  {
    id: 'clivora',
    name: 'Clivora',
    tagline: 'CRM, invoicing, and marketplace for freelancers',
    description:
      'A business operating system for freelancers and agencies with CRM, projects, invoicing, and integrated tools on web and Android with one account.',
    category: 'Business · Productivity',
    accent: '#6366f1',
    accentSecondary: '#4f46e5',
    icon: '📊',
    appIcon: '/apps/clivora/icon.png',
    website: 'https://clivora.codcrafters.org',
    playStore: 'https://play.google.com/store/apps/details?id=org.codcrafters.clivora',
    version: 'v2.10.7',
    packageName: 'org.codcrafters.clivora',
    playStoreStatus: 'launching',
    developer: 'CodCrafters',
    platform: 'Web + Android',
    features: [
      'Business command center with revenue snapshot',
      'Client CRM with search and management',
      'Projects, time tracking, and budgets',
      'Professional invoicing with branded PDF export',
    ],
    techStack: ['Flutter', 'Riverpod', 'SQLite', 'REST APIs'],
    story: {
      kind: 'platform',
      title: 'Platform structure',
      items: [
        'Web application',
        'Android application',
        'Shared backend',
        'Role-based business modules',
      ],
    },
    screenshots: [
      { src: '/apps/clivora/1.svg', alt: 'Clivora Command Center', caption: 'Command' },
      { src: '/apps/clivora/2.svg', alt: 'Clivora CRM', caption: 'CRM' },
      { src: '/apps/clivora/3.svg', alt: 'Clivora Projects', caption: 'Projects' },
      { src: '/apps/clivora/4.svg', alt: 'Clivora Invoices', caption: 'Invoices' },
      { src: '/apps/clivora/5.svg', alt: 'Clivora Connect', caption: 'Connect' },
    ],
  },
  {
    id: 'codcrafters',
    name: 'CODCrafters',
    tagline: 'Studio app for services, quotes, and portfolio',
    description:
      'The official CODCrafters mobile app for exploring Flutter products, ERP services, and requesting custom software quotes.',
    category: 'Business · Studio',
    accent: '#0b6b4d',
    accentSecondary: '#0891b2',
    icon: '⚡',
    appIcon: '/apps/codcrafters/icon.png',
    website: 'https://codcrafters.org',
    playStore: 'https://play.google.com/store/apps/details?id=org.codcrafters.codcrafters_app',
    version: 'v1.0.0',
    packageName: 'org.codcrafters.codcrafters_app',
    playStoreStatus: 'launching',
    developer: 'CodCrafters',
    platform: 'Android',
    features: [
      'Explore CODCrafters portfolio of Flutter mobile apps',
      'Request quotes for custom software development',
      'Odoo ERP and business automation services',
      'Direct contact with the development team',
    ],
    techStack: ['Flutter', 'Firebase', 'REST APIs', 'Dart'],
    story: {
      kind: 'contribution',
      title: 'Purpose',
      purpose: 'A client-facing studio application for services, projects and quote requests.',
      contribution: [
        'Flutter UI',
        'Firebase/API integration',
        'Service and project presentation',
        'Contact workflows',
      ],
    },
    screenshots: [
      { src: '/apps/codcrafters/1.svg', alt: 'CODCrafters Studio Overview', caption: 'Studio' },
      { src: '/apps/codcrafters/2.svg', alt: 'CODCrafters Portfolio', caption: 'Portfolio' },
      { src: '/apps/codcrafters/3.svg', alt: 'CODCrafters Services', caption: 'Services' },
      { src: '/apps/codcrafters/4.svg', alt: 'CODCrafters Quote Request', caption: 'Quote' },
      { src: '/apps/codcrafters/5.svg', alt: 'CODCrafters Contact', caption: 'Contact' },
    ],
  },
];
