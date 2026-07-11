import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
