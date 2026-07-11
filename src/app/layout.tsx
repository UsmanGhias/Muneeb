import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Muneeb | Flutter Mobile Application Developer",
  description:
    "Premium Flutter mobile application developer crafting beautiful Android & iOS apps — Noor Ul Haya, ForgeNFit, Clivora & CODCrafters.",
  keywords: [
    "Flutter",
    "Mobile Developer",
    "Dart",
    "Android",
    "iOS",
    "Muhammad Muneeb",
    "Flutter Developer Pakistan",
  ],
  authors: [{ name: "Muhammad Muneeb" }],
  openGraph: {
    title: "Muhammad Muneeb | Flutter Mobile Application Developer",
    description:
      "Building premium Android & iOS applications with Flutter — beautiful UX, scalable architecture, production-ready engineering.",
    type: "website",
    url: "https://muneeb.codcrafters.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Muneeb | Flutter Mobile Application Developer",
    description:
      "Premium Flutter developer — Noor Ul Haya, ForgeNFit, Clivora & more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
