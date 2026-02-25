import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Preloader from "../components/Preloader";
import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "Rajshekar RC | Full Stack Developer",
  description:
    "Full Stack Software Engineer crafting scalable digital systems with clean architecture and modern UI experiences.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased relative overflow-x-hidden">

        {/* Smooth Scroll (Lenis) */}
        <SmoothScroll />

        {/* Preloader */}
        <Preloader />

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