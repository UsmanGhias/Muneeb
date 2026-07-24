import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muneeb.codcrafters.org'),
  title: 'Muhammad Muneeb | Flutter Developer',
  description:
    'Flutter developer building Android and iOS applications since 2021. Currently working on production-grade apps at CodCrafters.',
  keywords: ['Flutter', 'Mobile Developer', 'Dart', 'iOS', 'Android', 'Muhammad Muneeb'],
  authors: [{ name: 'Muhammad Muneeb' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Muhammad Muneeb | Flutter Developer',
    description:
      'Flutter developer building Android and iOS applications with maintainable architecture and offline functionality.',
    type: 'website',
    images: ['/profile.jpeg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
