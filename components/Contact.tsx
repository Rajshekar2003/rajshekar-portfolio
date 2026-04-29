"use client";

import { useRef } from "react";

export default function Contact() {
  const toastRef = useRef<HTMLDivElement>(null);

  function copyEmail() {
    navigator.clipboard.writeText("rajshekar.r.c2003@gmail.com");
    const toast = toastRef.current;
    if (!toast) return;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  }

  return (
    <section id="contact" className="contact-section">
      <p className="contact-kicker">— 07 · Contact</p>

      <h2 className="contact-title">
        Let&apos;s build <em>something</em><br />
        <em>together<span className="dim">.</span></em>
      </h2>

      <button
        className="contact-email"
        onClick={copyEmail}
        data-cursor="hover"
      >
        rajshekar.r.c2003@gmail.com
      </button>

      <div className="contact-links">
        <a
          href="https://github.com/Rajshekar2003"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/rajshekarrc"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
        >
          LinkedIn ↗
        </a>
        <a href="/resume" data-cursor="hover">
          Resume ↗
        </a>
      </div>

      <a href="tel:+917483731783" className="contact-phone">
        +91 7483 731 783
      </a>

      <div ref={toastRef} className="toast">
        Copied to clipboard
      </div>
    </section>
  );
}
