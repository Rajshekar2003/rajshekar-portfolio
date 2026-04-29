"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface Dot {
  ox: number;
  oy: number;
  x: number;
  y: number;
}

export default function Hero() {
  const [animReady, setAnimReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  // Fire hero-anim after preloader finishes (1600ms) + small buffer
  useEffect(() => {
    const t = setTimeout(() => setAnimReady(true), 1700);
    return () => clearTimeout(t);
  }, []);

  // Animated mesh canvas
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 900) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 60;
    let dots: Dot[] = [];
    let t = 0;
    function buildDots() {
      if (!canvas) return;
      dots = [];
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ ox: c * SPACING, oy: r * SPACING, x: c * SPACING, y: r * SPACING });
        }
      }
    }

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
      buildDots();
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouseRef.current;
      t += 0.008;

      for (const dot of dots) {
        const waveX = Math.sin(dot.oy * 0.02 + t) * 4;
        const waveY = Math.cos(dot.ox * 0.02 + t * 1.3) * 4;

        const dx = dot.ox + waveX - mx;
        const dy = dot.oy + waveY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 220 && dist > 0) {
          const force = (1 - dist / 220) * 30;
          dot.x = dot.ox + waveX + (dx / dist) * force;
          dot.y = dot.oy + waveY + (dy / dist) * force;
        } else {
          dot.x += (dot.ox + waveX - dot.x) * 0.08;
          dot.y += (dot.oy + waveY - dot.y) * 0.08;
        }

        const drawDist = Math.sqrt((dot.x - mx) ** 2 + (dot.y - my) ** 2);
        const alpha = Math.max(0.05, Math.min(0.4, 0.4 - (drawDist / 400) * 0.35));

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 238, 232, ${alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const hero = heroRef.current;

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    function onResize() {
      resize();
    }

    hero?.addEventListener("mousemove", onMouseMove);
    hero?.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      hero?.removeEventListener("mousemove", onMouseMove);
      hero?.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Mouse-following glow
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    function onMouseMove(e: MouseEvent) {
      const rect = hero!.getBoundingClientRect();
      glow!.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      glow!.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    }

    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section id="home" className={`hero${animReady ? " hero-anim" : ""}`} ref={heroRef}>

      {/* Layer 1 — Animated mesh canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Layer 2 — Grain overlay */}
      <div className="hero-grain" />

      {/* Layer 3 — Mouse-following glow */}
      <div className="hero-glow" ref={glowRef} />

      {/* Layer 4 — Floating geometric shapes */}
      <div className="float-shape s1" />
      <div className="float-shape s2" />
      <div className="float-shape s3" />

      {/* Content */}
      <div className="hero-content">

        {/* Top meta row */}
        <div className="hero-meta">
          <div className="hero-meta-left">
            <strong>Rajshekar RC</strong>
            Engineer based in Bangalore, India.<br />
            AI Engineer, Full Stack Developer, GenAI.
          </div>
          <div className="hero-meta-right">
            <span className="status-pill">
              <span className="status-dot" />
              Available · 2026
            </span>
          </div>
        </div>

        {/* Massive headline */}
        <h1 className="hero-title">
          <div className="line">
            <span>Engineer<em>,</em></span>
          </div>
          <div className="line">
            <span>craftsman<em>.</em></span>
          </div>
        </h1>

        {/* Bottom row */}
        <div className="hero-bottom">

          {/* Lead paragraph */}
          <p className="hero-lead">
            I build production-grade AI systems and full-stack web applications.{" "}
            From RAG pipelines and LLM integrations to{" "}
            <em>scalable backends and interfaces that feel considered.</em>
          </p>

          {/* Social icons */}
          <div className="hero-socials">
            <a
              href="https://github.com/Rajshekar2003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rajshekarrc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:rajshekar.r.c2003@gmail.com" aria-label="Send email">
              <Mail size={18} />
            </a>
            <a href="tel:+917483731783" aria-label="Call phone">
              <Phone size={18} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>

        </div>
      </div>
    </section>
  );
}
