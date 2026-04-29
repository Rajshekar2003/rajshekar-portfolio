"use client";

import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    function updateTime() {
      const el = document.getElementById("time-footer");
      if (!el) return;
      const now = new Date();
      const time = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      el.textContent = `${time} IST`;
    }
    updateTime();
    const id = setInterval(updateTime, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="site-footer">
      <div className="foot-big">
        Rajshekar <em>RC.</em>
      </div>

      <div className="foot-grid">
        <div>
          <strong>Based in</strong>
          Bangalore, India<br />
          <span id="time-footer">00:00 IST</span>
        </div>

        <div>
          <strong>Elsewhere</strong>
          <a href="https://github.com/Rajshekar2003" target="_blank" rel="noopener noreferrer" data-cursor="hover">GitHub</a>
          <a href="https://www.linkedin.com/in/rajshekarrc" target="_blank" rel="noopener noreferrer" data-cursor="hover">LinkedIn</a>
          <a href="mailto:rajshekar.r.c2003@gmail.com" data-cursor="hover">Email</a>
          <a href="tel:+917483731783" data-cursor="hover">Phone</a>
        </div>

        <div>
          <strong>Sections</strong>
          <a href="#about" data-cursor="hover">About</a>
          <a href="#projects" data-cursor="hover">Projects</a>
          <a href="#experience" data-cursor="hover">Experience</a>
          <a href="#certs" data-cursor="hover">Certifications</a>
        </div>

        <div>
          <strong>©</strong>
          2026 Rajshekar RC<br />
          All rights reserved
        </div>
      </div>
    </footer>
  );
}
