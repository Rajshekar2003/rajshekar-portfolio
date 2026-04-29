import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface TechDecision {
  title: string;
  description: string;
}

interface ProjectPageProps {
  num: string;
  title: ReactNode;
  subtitle: string;
  role: string;
  year: string;
  stack: string;
  liveUrl?: string;
  sourceUrl?: string;
  imageAlt?: string;
  imagePlaceholder: string;
  imageSrc?: string;
  overview: ReactNode[];
  features: string[];
  techDecisions: TechDecision[];
  contributions: string[];
  nextSlug: string;
  nextName: ReactNode;
}

export default function ProjectPage({
  num,
  title,
  subtitle,
  role,
  year,
  stack,
  liveUrl,
  sourceUrl,
  imageAlt,
  imagePlaceholder,
  imageSrc,
  overview,
  features,
  techDecisions,
  contributions,
  nextSlug,
  nextName,
}: ProjectPageProps) {
  return (
    <div className="case-page">
      <a href="/#projects" className="case-back">← Back to portfolio</a>

      <div className="case-hero">
        <p className="case-kicker">Project · {num}</p>
        <h1 className="case-title">{title}</h1>
        <p className="case-subtitle">{subtitle}</p>
      </div>

      <div className="case-meta">
        <div className="col">
          <span className="k">Role</span>
          <span className="v">{role}</span>
        </div>
        <div className="col">
          <span className="k">Year</span>
          <span className="v">{year}</span>
        </div>
        <div className="col">
          <span className="k">Stack</span>
          <span className="v">{stack}</span>
        </div>
        <div className="col">
          <span className="k">Status</span>
          <span className="v">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live ↗
              </a>
            )}
            {sourceUrl && (
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                Source ↗
              </a>
            )}
          </span>
        </div>
      </div>

      {imageSrc ? (
        <div className="case-image">
          <Image
            src={imageSrc}
            alt={imageAlt || "Project preview"}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 900px) 100vw, 980px"
          />
        </div>
      ) : (
        <div className="case-image">{imagePlaceholder}</div>
      )}

      <section className="case-section">
        <p className="case-section-label">01 — Overview</p>
        <h2 className="case-section-title">What this project is</h2>
        {overview.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <section className="case-section">
        <p className="case-section-label">02 — Key Features</p>
        <h2 className="case-section-title">What it does</h2>
        <ul className="case-list">
          {features.map((f, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: f }} />
          ))}
        </ul>
      </section>

      <section className="case-section">
        <p className="case-section-label">03 — Tech Decisions</p>
        <h2 className="case-section-title">Why these tools</h2>
        {techDecisions.map((td, i) => (
          <div key={i} className="case-tech-item">
            <h4>{td.title}</h4>
            <p>{td.description}</p>
          </div>
        ))}
      </section>

      <section className="case-section">
        <p className="case-section-label">04 — What I built</p>
        <h2 className="case-section-title">My contributions</h2>
        <ul className="case-list">
          {contributions.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      <div className="case-end">
        <div className="case-end-next">
          <span className="lbl">Next project ↗</span>
          <Link href={`/work/${nextSlug}`}>{nextName}</Link>
        </div>
        <a href="/" className="case-end-back">↑ Back to portfolio</a>
      </div>
    </div>
  );
}
