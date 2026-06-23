import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ui/ThemeToggle";
import AOSInit from "@/components/ui/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://portfolio-beryl-eta-zuq6c5ksg2.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mubeen | Full Stack Developer Portfolio",
    template: "%s | Mubeen",
  },
  description:
    "Mubeen is a full-stack developer based in Faisalabad, Pakistan, building scalable, high-performance web apps with React, Next.js, and Node.js. Explore projects, skills, and ways to get in touch.",
  keywords: [
    "Mubeen",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Web Developer Pakistan",
    "Portfolio",
  ],
  authors: [{ name: "Mubeen" }],
  creator: "Mubeen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Mubeen | Full Stack Developer Portfolio",
    description:
      "Full-stack developer building scalable, high-performance web applications with React, Next.js, NestJS and Node.js.",
    siteName: "Mubeen | Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mubeen - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubeen | Full Stack Developer Portfolio",
    description:
      "Full-stack developer building scalable, high-performance web applications with React, Next.js, NestJS and Node.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <AOSInit />
        <ThemeToggle>{children}</ThemeToggle>
      </body>
    </html>
  );
}
