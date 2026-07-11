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
  title: 'Muhammad Muneeb | Flutter Developer',
  description:
    'Passionate Flutter developer crafting beautiful, high-performance mobile applications for iOS & Android from Samundri, Pakistan.',
  keywords: ['Flutter', 'Mobile Developer', 'Dart', 'iOS', 'Android', 'Muhammad Muneeb'],
  authors: [{ name: 'Muhammad Muneeb' }],
  openGraph: {
    title: 'Muhammad Muneeb | Flutter Developer',
    description: 'Cross-platform mobile developer specializing in Flutter & Dart.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
