"use client";

import { useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  index: string;
  inner: string;
  num: string;
  title: ReactNode;
  description: string;
  tags: string;
  role: string;
  links: ProjectLink[];
  caseHref?: string;
  imageSrc: string;
  priority?: boolean;
}

const PROJECTS: Project[] = [
  {
    index: "01 / 06",
    inner: "ResumeIQ · Dashboard",
    num: "01",
    title: <>Resume<em>IQ</em></>,
    description:
      "Production-grade AI resume analyzer with 5 LLM-powered endpoints — ATS scoring, JD matching, keyword extraction, bullet rewriting, and a 2-stage RAG pipeline indexing 53 job descriptions via ChromaDB and Llama 3.3 70B on Groq. 25× latency gain, 1.25s avg response, 100% schema validity across eval tests.",
    tags: "PYTHON · FLASK · REACT · GROQ · CHROMADB · PYDANTIC",
    role: "Sole developer · Shipped in 15 days",
    links: [
      { label: "Live Demo", href: "https://resume-iq-indol.vercel.app/" },
      { label: "Source", href: "https://github.com/Rajshekar2003/resume-iq" },
    ],
    caseHref: "/work/resumeiq",
    imageSrc: "/img_p1.png",
    priority: true,
  },
  {
    index: "02 / 06",
    inner: "Cancer Detection · Quantum",
    num: "02",
    title: <>Esophageal <em>Cancer Detection</em></>,
    description:
      "Final year project applying quantum mechanics principles to medical image classification — a hybrid approach combining quantum feature analysis with traditional ML to detect esophageal cancer from diagnostic imagery.",
    tags: "PYTHON · QUANTUM · MACHINE LEARNING · MEDICAL AI",
    role: "Final year project · Quantum-based detection system",
    links: [{ label: "Source", href: "https://github.com/Rajshekar2003" }],
    caseHref: "/work/cancer-detection",
    imageSrc: "/img_p2.png",
  },
  {
    index: "03 / 06",
    inner: "HustleNote · Dashboard",
    num: "03",
    title: <>Hustle<em>Note</em></>,
    description:
      "Habit-tracking web application — daily habit creation, completion tracking, and weekly/monthly performance visualizations through interactive Chart.js graphs.",
    tags: "NEXT.JS · NODE.JS · MONGODB · CHART.JS",
    role: "Sole developer · Designed, built, deployed",
    links: [
      { label: "Live", href: "https://hustlenote.vercel.app/" },
      { label: "Source", href: "https://github.com/Rajshekar2003/hustlenote" },
    ],
    caseHref: "/work/hustlenote",
    imageSrc: "/img_p3.png",
  },
  {
    index: "04 / 06",
    inner: "Campus · Listings",
    num: "04",
    title: <>Campus <em>Marketplace</em></>,
    description:
      "Student-to-student marketplace platform with optimized frontend performance, real-time listings, and scalable Firebase backend integration.",
    tags: "REACT · FIREBASE · TAILWIND",
    role: "Led frontend + Firebase architecture",
    links: [{ label: "Source", href: "https://github.com/Rajshekar2003/campus-marketplace-project" }],
    caseHref: "/work/campus-marketplace",
    imageSrc: "/img_p4.png",
  },
  {
    index: "05 / 06",
    inner: "Iris Tracker · Live Feed",
    num: "05",
    title: <>Real-Time <em>Iris Detection</em></>,
    description:
      "Real-time iris localization and eye-tracking using MediaPipe and OpenCV with facial landmark extraction. Processes 30+ frames per second for smooth low-latency live-feed performance.",
    tags: "PYTHON · MEDIAPIPE · OPENCV · COMPUTER VISION",
    role: "Computer vision project · 30+ FPS",
    links: [
      { label: "Demo", href: "#" },
      { label: "Source", href: "#" },
    ],
    caseHref: "/work/iris-detection",
    imageSrc: "/img_p5.png",
  },
  {
    index: "06 / 06",
    inner: "KNN Classifier · Output",
    num: "06",
    title: <>Bird Species <em>Identification</em></>,
    description:
      "End-to-end KNN classification model identifying bird species from structured dataset features — preprocessing, cross-validation, accuracy evaluation, and prediction visualization. 90%+ classification accuracy.",
    tags: "PYTHON · KNN · MACHINE LEARNING",
    role: "End-to-end ML pipeline",
    links: [{ label: "Source", href: "#" }],
    caseHref: "/work/bird-species",
    imageSrc: "/img_p6.png",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const handleVisualMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--px", `${px}%`);
    e.currentTarget.style.setProperty("--py", `${py}%`);
  };

  const visual = (
    <div className="project-visual" onMouseMove={handleVisualMove}>
      <Image
        src={project.imageSrc}
        alt={`${typeof project.title === "string" ? project.title : project.inner} preview`}
        fill
        className="project-img"
        style={{ objectFit: "cover" }}
        priority={project.priority}
      />
      <div className="project-index">{project.index}</div>
    </div>
  );

  return (
    <article className="project-card" data-cursor="view">
      {project.caseHref ? (
        <Link href={project.caseHref} className="project-visual-link" tabIndex={-1}>
          {visual}
        </Link>
      ) : visual}
      <div className="project-meta">
        <div className="project-num">{project.num}</div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">{project.tags}</div>
          <div className="project-role">{project.role}</div>
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label} <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".project-card");
    const amount = card ? card.offsetWidth + 16 : 880;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    let idleTimerId: ReturnType<typeof setTimeout> | null = null;
    let inView = false;
    let hovered = false;

    const startScroll = () => {
      if (intervalId) return;
      intervalId = setInterval(() => {
        const atEnd =
          scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2;
        if (atEnd) {
          scroller.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroller.scrollLeft += 1;
        }
      }, 30);
    };

    const stopScroll = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const resetIdleTimer = () => {
      if (idleTimerId) clearTimeout(idleTimerId);
      stopScroll();
      if (inView && !hovered) {
        idleTimerId = setTimeout(startScroll, 3000);
      }
    };

    const onMouseEnter = () => {
      hovered = true;
      stopScroll();
      if (idleTimerId) clearTimeout(idleTimerId);
    };
    const onMouseLeave = () => {
      hovered = false;
      resetIdleTimer();
    };
    const onInteraction = () => resetIdleTimer();

    scroller.addEventListener("mouseenter", onMouseEnter);
    scroller.addEventListener("mouseleave", onMouseLeave);
    scroller.addEventListener("wheel", onInteraction, { passive: true });
    scroller.addEventListener("touchstart", onInteraction, { passive: true });

    const section = scroller.closest(".work-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !hovered) resetIdleTimer();
        else {
          stopScroll();
          if (idleTimerId) clearTimeout(idleTimerId);
        }
      },
      { threshold: 0.2 }
    );
    if (section) observer.observe(section);

    return () => {
      stopScroll();
      if (idleTimerId) clearTimeout(idleTimerId);
      scroller.removeEventListener("mouseenter", onMouseEnter);
      scroller.removeEventListener("mouseleave", onMouseLeave);
      scroller.removeEventListener("wheel", onInteraction);
      scroller.removeEventListener("touchstart", onInteraction);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="work-section">
      <div className="section-header">
        <div className="section-label">
          <span className="num">05</span>Selected Work
        </div>
        <h2 className="section-title">Things I&apos;ve <em>built.</em></h2>
      </div>

      <div className="work-scroller" id="workScroller" ref={scrollerRef}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>

      <div className="work-footer">
        <span>06 selected · scroll to explore</span>
        <div className="scroll-nav">
          <button
            data-cursor="hover"
            onClick={() => scrollBy(-1)}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            data-cursor="hover"
            onClick={() => scrollBy(1)}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
