import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajshekar RC — Resume",
  description:
    "Resume of Rajshekar RC, AI Engineer and Full Stack Developer based in Bangalore.",
};

export default function ResumePage() {
  return (
    <div className="resume-page">

      {/* ── HEADER ───────────────────────────────────── */}
      <a href="/" className="resume-back">← Back to portfolio</a>

      <div className="resume-header">
        <div>
          <h1 className="resume-name">
            Rajshekar <em>RC</em>
          </h1>
          <p className="resume-tagline">
            Full Stack Developer · AI Engineer · GenAI Developer
          </p>
        </div>

        <div className="resume-actions">
          <a
            href="/Rajshekar_RC_Resume.pdf"
            download
            className="resume-download"
            data-cursor="hover"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* ── CONTACT STRIP ────────────────────────────── */}
      <div className="resume-contact">
        <span>Bangalore, India</span>
        <span className="resume-contact-sep">·</span>
        <a href="tel:+917483731783">+91-7483731783</a>
        <span className="resume-contact-sep">·</span>
        <a href="mailto:rajshekar.r.c2003@gmail.com">rajshekar.r.c2003@gmail.com</a>
        <span className="resume-contact-sep">·</span>
        <a href="https://github.com/Rajshekar2003" target="_blank" rel="noopener noreferrer">
          github.com/Rajshekar2003
        </a>
        <span className="resume-contact-sep">·</span>
        <a href="https://www.linkedin.com/in/rajshekarrc" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/rajshekarrc
        </a>
      </div>

      {/* ── SUMMARY ──────────────────────────────────── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Summary</h2>
        <p className="resume-summary">
          Full Stack Developer and AI Engineer who ships{" "}
          <em>production AI systems end-to-end</em>. Built a 5-agent LangGraph research
          pipeline (35% F1 over RAG baseline) and a production AI resume analyzer with 5
          LLM endpoints. Strong in Python, FastAPI, React, Next.js, LLMs, RAG, and
          multi-agent systems. Seeking AI Engineering, GenAI, and Full Stack roles.
        </p>
      </section>

      {/* ── SKILLS ───────────────────────────────────── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Skills</h2>
        <div className="resume-skills">
          <span className="k">Programming Languages</span>
          <span className="v">Python · JavaScript · TypeScript · SQL · Java</span>

          <span className="k">Frontend</span>
          <span className="v">React · Next.js · Tailwind · HTML5 · CSS3</span>

          <span className="k">Backend</span>
          <span className="v">Node.js · Express · Flask · FastAPI · REST APIs</span>

          <span className="k">Databases</span>
          <span className="v">MongoDB · MySQL · ChromaDB · Vector Databases</span>

          <span className="k">AI / ML</span>
          <span className="v">LLMs · RAG · LangGraph · LangChain · Multi-Agent Systems · Prompt Engineering · Embeddings · Groq · Gemini · OpenAI · Anthropic Claude · Pydantic · NumPy</span>

          <span className="k">Computer Vision</span>
          <span className="v">MediaPipe · OpenCV · Real-Time Tracking</span>

          <span className="k">Tools &amp; Platforms</span>
          <span className="v">Git · GitHub · Vercel · Render · Linux</span>

          <span className="k">Core Concepts</span>
          <span className="v">DSA · OOP · System Design · Eval-Driven Development · Authentication</span>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Experience</h2>

        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Global Quest Technologies</h3>
            <span className="dates">May 2025 — Aug 2025</span>
          </div>
          <p className="resume-entry-role">
            Full Stack Developer Intern · Bangalore, Karnataka
          </p>
          <ul className="resume-bullets">
            <li>
              Engineered a production-ready e-commerce platform with product catalog,
              user authentication, cart management, and order processing using React,
              Express, and MongoDB — delivering 5+ core features end to end.
            </li>
            <li>
              Designed and optimized 10+ RESTful backend APIs improving database query
              efficiency and eliminating redundant server-side operations across the
              application.
            </li>
            <li>
              Built a fully responsive mobile-first UI across 8+ pages ensuring seamless
              and consistent UX across all screen sizes and devices.
            </li>
          </ul>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Projects</h2>

        {/* Agentic Research Assistant */}
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Agentic <em>Research Assistant</em></h3>
            <span className="tech">Python · FastAPI · LangGraph · Next.js · Groq · Tavily · Pytest · Render · Vercel</span>
          </div>
          <p className="resume-entry-desc">Production multi-agent research system · Live Demo</p>
          <ul className="resume-bullets">
            <li>
              Shipped a 5-agent LangGraph research system (Planner, Searcher, FactChecker, Writer, Critic)
              with a Critic→Writer revision loop, deployed across Render (FastAPI) and Vercel (Next.js)
              with Groq→Gemini failover and live health monitoring.
            </li>
            <li>
              Delivered 35% F1 gain (0.055→0.074) over RAG baseline on HotpotQA, cut hallucination 41%→22%
              via fact-checking, and trimmed multi-hop latency ~40% via parallel asyncio.gather search;
              validated by a 134-test pytest suite (4s CI).
            </li>
          </ul>
        </div>

        {/* ResumeIQ */}
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Resume<em>IQ</em></h3>
            <span className="tech">Python · Flask · React · Groq · ChromaDB · Pydantic</span>
          </div>
          <p className="resume-entry-desc">Production AI resume analyzer — Live Demo</p>
          <ul className="resume-bullets">
            <li>
              Shipped a production-grade AI resume analyzer in 15 days with 5
              LLM-powered endpoints — ATS scoring, JD matching, keyword extraction,
              bullet rewriting, and a 2-stage RAG pipeline indexing 53 real job
              descriptions via ChromaDB and Llama 3.3 70B on Groq (25× latency gain,
              avg 1.25s).
            </li>
            <li>
              Engineered structured output reliability using Pydantic v2 schema
              validation with auto-retry logic, achieving 100% schema validity across
              15 eval test cases and verified prompt injection defense against
              adversarial resume inputs.
            </li>
          </ul>
        </div>

        {/* Esophageal Cancer Detection */}
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Esophageal <em>Cancer Detection</em></h3>
            <span className="tech">Python · Machine Learning · Pandas · NumPy</span>
          </div>
          <p className="resume-entry-desc">Medical ML classification system</p>
          <ul className="resume-bullets">
            <li>
              Built a medical ML classification system with full pipeline across 5+
              stages: data preprocessing, feature engineering, model training, and
              accuracy benchmarking — achieving measurable improvement over baseline
              using production-level data science practices.
            </li>
          </ul>
        </div>

        {/* Real-Time Iris Detection */}
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Real-Time <em>Iris Detection</em></h3>
            <span className="tech">Python · MediaPipe · OpenCV · Computer Vision</span>
          </div>
          <p className="resume-entry-desc">Real-time eye-tracking system</p>
          <ul className="resume-bullets">
            <li>
              Developed a real-time iris localization and eye-tracking system using
              MediaPipe and OpenCV with facial landmark extraction, processing 30+
              frames per second for smooth low-latency live-feed performance.
            </li>
          </ul>
        </div>

      </section>

      {/* ── EDUCATION ────────────────────────────────── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Education</h2>

        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>P.E.S. Institute of Technology &amp; Management</h3>
            <span className="dates">Dec 2021 — Jun 2025</span>
          </div>
          <p className="resume-entry-role">
            Bachelor of Engineering in Computer Science · Shivamogga, Karnataka
          </p>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Certifications</h2>
        <div className="resume-certs">
          <div>Generative AI Mastermind <span className="resume-cert-sep">·</span> Outskill <span className="resume-cert-sep">·</span> Mar 2025</div>
          <div>Python Using AI <span className="resume-cert-sep">·</span> AI For Techies <span className="resume-cert-sep">·</span> Aug 2025</div>
          <div>Detect, Analyze, and Recognize Faces <span className="resume-cert-sep">·</span> Microsoft Learn <span className="resume-cert-sep">·</span> Nov 2025</div>
          <div>Generate Images with AI <span className="resume-cert-sep">·</span> Microsoft Learn <span className="resume-cert-sep">·</span> Oct 2025</div>
          <div>Introduction to Microsoft Excel <span className="resume-cert-sep">·</span> Microsoft <span className="resume-cert-sep">·</span> Sep 2024</div>
        </div>
      </section>

      {/* ── LANGUAGES ────────────────────────────────── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Languages</h2>
        <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6 }}>
          English · Kannada · Hindi
        </p>
      </section>

    </div>
  );
}
