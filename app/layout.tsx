import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Preloader from "../components/Preloader";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import CommandPalette from "../components/CommandPalette";
import ConsoleSignature from "../components/ConsoleSignature";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://rajshekarrc.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rajshekar RC — AI Engineer · Full Stack Developer · GenAI",
    template: "%s · Rajshekar RC",
  },
  description:
    "AI Engineer and Full Stack Developer based in Bangalore. Building production-grade AI systems, RAG pipelines, and scalable web applications.",
  keywords: [
    "Rajshekar RC",
    "AI Engineer",
    "Full Stack Developer",
    "GenAI",
    "RAG pipeline",
    "Next.js",
    "Python",
    "Flask",
    "Groq",
    "Bangalore",
  ],
  authors: [{ name: "Rajshekar RC", url: BASE_URL }],
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Rajshekar RC — AI Engineer · Full Stack Developer · GenAI",
    description:
      "AI Engineer and Full Stack Developer based in Bangalore. Building production-grade AI systems, RAG pipelines, and scalable web applications.",
    siteName: "Rajshekar RC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajshekar RC — AI Engineer · Full Stack Developer · GenAI",
    description:
      "AI Engineer and Full Stack Developer based in Bangalore. Building production-grade AI systems, RAG pipelines, and scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white antialiased relative overflow-x-hidden">

        {/* Console easter egg */}
        <ConsoleSignature />

        {/* Smooth Scroll (Lenis) */}
        <SmoothScroll />

        {/* Preloader */}
        <Preloader />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Command palette */}
        <CommandPalette />

        {/* Mouse Spotlight Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("mousemove", function(e) {
                document.body.style.setProperty("--x", e.clientX + "px");
                document.body.style.setProperty("--y", e.clientY + "px");
              });
            `,
          }}
        />

        {/* Scroll Progress Bar */}


        {/* Navbar */}
        <Navbar />

        {/* Page Transition Wrapper */}
        <PageTransition>
          <main className="pt-24 relative z-10">
            {children}
          </main>
        </PageTransition>

      </body>
    </html>
  );
}
