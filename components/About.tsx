"use client";

import { Fragment, useEffect, useRef } from "react";
import Image from "next/image";

// Each word renders as <span>{word}</span>{" "} — space is a sibling text node
// OUTSIDE the span so display:inline-block cannot collapse it.
function W({ t, s }: { t: string; s: number }) {
  return (
    <>
      {t
        .split(/\s+/)
        .filter(Boolean)
        .map((word, i) => (
          <Fragment key={s + i}>
            <span
              className="reveal-word"
              style={{ transitionDelay: `${(s + i) * 25}ms` }}
            >
              {word}
            </span>
            {" "}
          </Fragment>
        ))}
    </>
  );
}

const META: [string, string][] = [
  ["Based in",  "Bangalore, India"],
  ["From",      "Shikaripura, Shimoga"],
  ["Focus",     "Full-stack · AI Engineering · GenAI"],
  ["Stack",     "React · Next.js · Python · LLMs"],
  ["Languages", "English · Kannada · Hindi"],
  ["Available", "2026 — open to engineering work"],
];

export default function About() {
  const textRef     = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const innerRef    = useRef<HTMLDivElement>(null);

  // Word-by-word reveal on scroll into view
  useEffect(() => {
    const container = textRef.current;
    if (!container) return;

    const paragraphs = container.querySelectorAll<HTMLElement>(".about-text p");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target
            .querySelectorAll<HTMLElement>(".reveal-word")
            .forEach((el) => el.classList.add("visible"));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    paragraphs.forEach((p) => observer.observe(p));

    const safetyTimeout = setTimeout(() => {
      paragraphs.forEach((p) => {
        p.querySelectorAll<HTMLElement>(".reveal-word").forEach((el) => el.classList.add("visible"));
        observer.unobserve(p);
      });
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Portrait parallax — max ±8px, scale 1.04 on hover; inset:0 default keeps image centred
  useEffect(() => {
    const portrait = portraitRef.current;
    const inner    = innerRef.current;
    if (!portrait || !inner) return;

    function onMove(e: MouseEvent) {
      const r  = portrait!.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width  - 0.5;
      const py = (e.clientY - r.top)  / r.height - 0.5;
      inner!.style.transform = `translate(${px * -8}px, ${py * -8}px) scale(1.04)`;
    }
    function onLeave() {
      inner!.style.transform = "translate(0, 0) scale(1)";
    }

    portrait.addEventListener("mousemove", onMove);
    portrait.addEventListener("mouseleave", onLeave);
    return () => {
      portrait.removeEventListener("mousemove", onMove);
      portrait.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="about" className="about-section">

      {/* ── Section header — untouched ── */}
      <div className="section-header">
        <div className="section-label">
          <span className="num">01</span>— About
        </div>
        <h2 className="section-title">
          A quiet obsession<br />
          with <em>how things</em><br />
          are made.
        </h2>
      </div>

      {/* ── Two-column body ── */}
      <div className="about-inner" ref={textRef}>

        {/* LEFT — sticky portrait */}
        <div className="about-sticky">
          <div className="about-portrait" ref={portraitRef}>
            <div className="about-portrait-inner" ref={innerRef}>
              <Image
                src="/my_img.jpeg"
                alt="Rajshekar RC portrait"
                fill
                unoptimized
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="about-portrait-caption">
            <span>Bangalore</span>
            <span>2026</span>
          </div>
        </div>

        {/* RIGHT — bio text */}
        <div className="about-text">

          {/* P1 — "Born in Shikaripura, raised between…" */}
          <p>
            <W t="Born in" s={0} />
            <em><W t="Shikaripura," s={2} /></em>
            {" "}
            <W t="raised between Shimoga and Davanagere, building in Bangalore." s={3} />
          </p>

          {/* P2 — "I'm an engineer…" */}
          <p>
            <W t="I'm an engineer who builds things" s={0} />
            <em><W t="end to end" s={6} /></em>
            <W t="— production AI systems, RAG pipelines, full-stack web applications. The kind of work where the screenshot and the source code agree with each other." s={9} />
          </p>

          {/* P3 — "Computer Science was the degree…" */}
          <p>
            <W t="Computer Science was the degree." s={0} />
            {" "}
            <em><W t="Shipping" s={5} /></em>
            {" "}
            <W t="was the education." s={6} />
            {" "}
            <span className="dim">
              <W t="Every project taught me something the syllabus didn't — how to pick the right model, how to design a clean API, how to know when something is actually finished." s={9} />
            </span>
          </p>

          {/* P4 — "Today I work across the stack…" */}
          <p>
            <W t="Today I work across the stack:" s={0} />
            {" "}
            <em><W t="React, Next.js, Python." s={6} /></em>
            {" "}
            <W t="I build with LLMs, vector databases, and computer vision. The tools change. The standard doesn't." s={9} />
          </p>

          {/* Meta table */}
          <div className="about-meta">
            {META.map(([k, v], i) => (
              <Fragment key={i}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
