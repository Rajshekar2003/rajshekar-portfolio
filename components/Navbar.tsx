"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function getIST(): string {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [time, setTime] = useState("BLR · --:--");

  // Active section detection — preserved from original
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Live IST time — only set after mount to avoid SSR hydration mismatch
  useEffect(() => {
    setTime(`BLR · ${getIST()}`);
    const id = setInterval(() => setTime(`BLR · ${getIST()}`), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <nav className="nb-nav">
        <div className="nb-grid">

          {/* Left — Brand */}
          <a href="#home" className="nb-brand">
            Rajshekar<em>·</em>RC
          </a>

          {/* Center — Nav Links */}
          <div className="nb-center">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`nb-link${active === s.id ? " active" : ""}`}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Right — Time + Command */}
          <div className="nb-right">
            <span className="nb-time">{time}</span>
            <button
              className="nb-cmd"
              onClick={() => window.dispatchEvent(new CustomEvent("open-cmdk"))}
            >
              ⌘K
            </button>
          </div>

        </div>
      </nav>
    </>
  );
}

