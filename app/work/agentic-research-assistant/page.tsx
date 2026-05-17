import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Agentic Research Assistant — Case Study · Rajshekar RC",
  description:
    "How I shipped a production 5-agent LangGraph research pipeline with 35% F1 gain over single-pass RAG.",
};

export default function AgenticResearchCaseStudy() {
  return (
    <div className="case-page">

      {/* ── META TOP ─────────────────────────────────── */}
      <a href="/#projects" className="case-back">← Back to portfolio</a>

      {/* ── HERO ─────────────────────────────────────── */}
      <div className="case-hero">
        <p className="case-kicker">Case Study · 01 / Flagship Project</p>

        <h1 className="case-title">
          Agentic <em>Research Assistant</em>
        </h1>

        <p className="case-subtitle">
          A 5-agent LangGraph pipeline that cuts hallucination by 46% over single-pass RAG — with fact-checking, revision loops, and graceful provider failover.
        </p>
      </div>

      {/* ── META TABLE ───────────────────────────────── */}
      <div className="case-meta">
        <div className="col">
          <span className="k">Role</span>
          <span className="v">Sole Developer</span>
        </div>
        <div className="col">
          <span className="k">Timeline</span>
          <span className="v">6 weeks · May 2026</span>
        </div>
        <div className="col">
          <span className="k">Stack</span>
          <span className="v">Python · FastAPI · LangGraph · Next.js · Groq · Tavily</span>
        </div>
        <div className="col">
          <span className="k">Status</span>
          <span className="v">
            <a href="https://agentic-research-assistant-frontend.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
            <a href="https://github.com/Rajshekar2003/agentic-research-assistant" target="_blank" rel="noopener noreferrer">Source ↗</a>
          </span>
        </div>
      </div>

      {/* ── HERO IMAGE ───────────────────────────────── */}
      <div className="case-image">
        <Image
          src="/img_p7.png"
          alt="Agentic Research Assistant"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="(max-width: 900px) 100vw, 980px"
        />
      </div>

      {/* ── BODY ─────────────────────────────────────── */}

      {/* 01 — Problem */}
      <section className="case-section">
        <p className="case-section-label">01 — Problem</p>
        <h2 className="case-section-title">
          Standard RAG hallucinates when sources disagree.
        </h2>
        <p>
          Standard RAG — retrieve once, generate once — frequently{" "}
          <em>hallucinates</em> when retrieved sources are weak, speculative, or
          contradictory. A model handed three search snippets and asked to synthesize
          will confidently produce an answer even when the underlying evidence
          doesn&apos;t support one.
        </p>
        <p>
          For research-style multi-hop questions — the kind that require reasoning
          across multiple pieces of evidence — this failure mode is even worse. The
          model needs to decompose the question, retrieve evidence for each part,
          verify the parts agree, and only then synthesize. Single-pass RAG does
          none of that.
        </p>
        <p>
          The question I wanted to answer:{" "}
          <em>does adding agent-level structure to RAG actually reduce hallucination?</em>{" "}
          Not &apos;is the output prettier?&apos; — does the system give measurably more
          correct, more grounded answers? The only way to know was to build both — a
          single-pass RAG baseline AND a multi-agent pipeline — and run them
          head-to-head on the same benchmark.
        </p>
      </section>

      {/* 02 — Approach */}
      <section className="case-section">
        <p className="case-section-label">02 — Approach</p>
        <h2 className="case-section-title">
          Five agents, one bounded revision loop.
        </h2>
        <p>
          The system runs <em>two backends side-by-side</em>: a single-pass RAG
          baseline at /research and a 5-agent LangGraph pipeline at /research/graph.
          Same model (Groq Llama 3.3 70B). Same search provider (Tavily). Same
          Pydantic schema. The only difference is the orchestration. This kept the
          evaluation comparison clean — every quality difference is attributable to
          the agent structure, not to confounding variables.
        </p>
        <p>
          The 5 agents each have one job: <em>Planner</em> decomposes the query into
          sub-questions. <em>Searcher</em> fetches and ranks evidence via Tavily.{" "}
          <em>FactChecker</em> verifies claims against the retrieved sources.{" "}
          <em>Writer</em> drafts a grounded answer with citations. <em>Critic</em>{" "}
          reviews the draft, and if the grounding is weak, routes back to Writer for a
          revision. Bounded at 2 revisions to prevent infinite loops.
        </p>
        <p>
          Each agent is a thin async function returning a state delta. LangGraph merges
          deltas into a TypedDict state. This means every agent can be unit-tested in
          isolation with a minimal state dict — no graph wiring required. That
          decoupling paid off across 134 tests and 6 weeks of changes.
        </p>
      </section>

      {/* 03 — Results */}
      <section className="case-section">
        <p className="case-section-label">03 — Results</p>
        <h2 className="case-section-title">
          Measured against a HotpotQA pilot.
        </h2>
        <p>
          Day 21 evaluation on a stratified HotpotQA sample (N=32 successful pairs
          after free-tier Tavily quota exhausted). Both endpoints ran on identical
          infrastructure — same model, same search, same machine, same questions in
          the same order. The comparison is internally consistent.
        </p>
        <p>
          <em>35% F1 improvement</em> (0.055 → 0.074). The graph version produces
          more token-overlap-correct answers than the baseline.
        </p>
        <p>
          <em>Refusal rate cut nearly in half</em> — from 41% (13/32) to 22% (7/32).
          The graph is materially more willing to commit to an answer when evidence
          supports one, and better at producing that answer when it commits. This was
          the result that mattered most: not just &apos;fewer wrong answers,&apos; but
          &apos;more confident correct answers.&apos;
        </p>
        <p>
          <em>Bridge-question F1 improved 31%</em> (0.058 → 0.076). Bridge questions
          are the harder multi-hop subset — they require reasoning across two pieces of
          evidence. The graph&apos;s stronger performance on this subset suggests the
          architecture matters most where naive RAG struggles most.
        </p>
        <p>
          <em>Tradeoff:</em> mean latency went from 3.6s baseline to 9.5s graph. P95
          latency reaches 57s on complex multi-hop questions. That&apos;s the cost of
          the extra agents — every node adds an LLM call. Worth it for quality-sensitive
          use cases; not worth it where speed dominates correctness.
        </p>
      </section>

      {/* 04 — Engineering decisions */}
      <section className="case-section">
        <p className="case-section-label">04 — Engineering decisions worth defending</p>
        <h2 className="case-section-title">
          The choices I&apos;d defend in an interview.
        </h2>
        <p>
          <em>Groq primary + Gemini fallback.</em> Groq is the fastest free-tier
          inference for Llama-3. The Gemini fallback provides provider diversity — a
          Groq outage doesn&apos;t take down the system. On any Groq error the client
          switches providers immediately rather than retrying a degraded one. Two API
          contracts to maintain, but the reliability wins outweigh the integration cost.
        </p>
        <p>
          <em>Tavily for search, no fallback.</em> Tavily is purpose-built for LLM
          retrieval — clean snippets, relevance scores, async-native client. Search is
          treated as must-succeed: a Tavily failure returns 503 rather than fabricating
          an ungrounded answer. Single-vendor dependency, but DuckDuckGo is scrape-only
          and SerpAPI requires HTML parsing. The bet is that Tavily&apos;s uptime is
          high enough.
        </p>
        <p>
          <em>Searcher parallelized via asyncio.gather.</em> Before Day 12, search ran
          sequentially — three sub-questions meant ~6s before fact-checking could start.
          Day 12 parallelized this with a 20s outer timeout. Search now takes ~2s
          regardless of plan size, bounded by the slowest single call. This cut
          multi-hop graph latency by roughly 40%.
        </p>
        <p>
          <em>FactChecker → Writer split.</em> Separating claim extraction from
          synthesis means each LLM prompt has one job, and quality failures can be
          attributed to the right step. One extra LLM call per query, but the diagnostic
          clarity was worth it for an evaluation-driven project.
        </p>
        <p>
          <em>Critic falls back to &apos;approve&apos; on parse failure.</em> Safety
          over strictness. Shipping an unreviewed draft is no worse than having no Critic
          at all; an infinite loop or uncaught exception would be catastrophic. Parse
          failures are logged separately so bugs in the Critic prompt can be inspected
          without crashing the request.
        </p>
      </section>

      {/* 05 — Engineering practices */}
      <section className="case-section">
        <p className="case-section-label">05 — Engineering practices</p>
        <h2 className="case-section-title">
          134 tests, structured logs, explicit timeouts.
        </h2>
        <p>
          <em>134 mocked tests run in 4 seconds with no network and no API keys.</em>{" "}
          Mocks are scoped at the module-attribute level via monkeypatch.setattr,
          targeting the specific import path where each function is called. This catches
          binding bugs that broader mocking would miss. Trade-off: mocks don&apos;t catch
          SDK-level parsing bugs — those are caught by the eval harness which is excluded
          from CI.
        </p>
        <p>
          <em>Every agent emits one structured log line.</em> Node name, latency, model,
          token counts. This makes filtering trivial — by node, by query, by time. The
          eval harness writes these telemetry fields alongside answers to JSONL, so
          per-query performance is queryable later.
        </p>
        <p>
          <em>Every I/O boundary has an explicit timeout</em> with an HTTP status code
          that distinguishes our-side failures (504) from downstream failures (503).
          On-call diagnosis knows immediately whether to look at Tavily/Groq status pages
          or at query complexity. That clarity took two refactors to get right.
        </p>
      </section>

      {/* 06 — Honest limitations */}
      <section className="case-section">
        <p className="case-section-label">06 — Honest limitations</p>
        <h2 className="case-section-title">
          What this system doesn&apos;t do — yet.
        </h2>
        <p>
          <em>No streaming.</em> Responses block until generation completes. Long answers
          feel slow even when correct.
        </p>
        <p>
          <em>No caching, no rate limiting, no auth.</em> Each query is a fresh
          round-trip. A runaway client can exhaust quotas. The endpoints are public. Fine
          for a portfolio demo; not production-ready.
        </p>
        <p>
          <em>Soft hallucinations still possible.</em> The Critic evaluates the draft
          against retrieved facts, not against ground truth. A misleading source that
          makes it through the Searcher can persist into the final answer. All Tavily
          results are treated as equally credible — there&apos;s no source-quality signal
          yet.
        </p>
        <p>
          <em>Planner entity-resolution failures propagate.</em> Day 21 example:
          &apos;Hawker Hurricane / No. 1455 Flight&apos; got resolved to Southwest
          Airlines flight 1455 instead of an RAF unit. Once the Planner mis-resolves an
          entity, every downstream node operates on the wrong concept with no recovery
          path.
        </p>
        <p>
          <em>Graph latency varies widely.</em> 3–26s across smoke queries, P95 reaching
          57s on complex multi-hop. No short-circuit path for simple queries that
          don&apos;t benefit from the full pipeline. The right fix is a router that
          chooses baseline-or-graph by query complexity. That&apos;s a v2 feature.
        </p>
      </section>

      {/* 07 — What I learned */}
      <section className="case-section">
        <p className="case-section-label">07 — What I learned</p>
        <h2 className="case-section-title">Three lessons I&apos;m taking forward.</h2>
        <p>
          <em>Build the eval before building the system.</em> I had the agent graph
          running before the eval harness — which meant several days of &apos;is it
          actually better?&apos; anxiety before I had numbers. Building the eval first
          would have given me a per-day quality signal.
        </p>
        <p>
          <em>Deploy earlier.</em> I built for 4 weeks before the first deployment
          attempt. When Vercel&apos;s monorepo detection broke in Week 5, I had to do
          real archaeology to figure out which code, which config, which platform setting
          was at fault. A &apos;deploy at Week 2&apos; rule would have surfaced that
          issue when there was less to disentangle.
        </p>
        <p>
          <em>Per-step UI feedback matters more than I expected.</em> The 5-step agent
          progress simulator on the frontend started as a polish item. It ended up being
          the single biggest qualitative improvement — recruiters and users understand a
          30-second wait when they can see five steps progressing instead of staring at a
          spinner. Visible work feels faster than invisible work.
        </p>
      </section>

      {/* ── END NAVIGATION ───────────────────────────── */}
      <div className="case-end">
        <div className="case-end-next">
          <span className="lbl">Next project ↗</span>
          <a href="/work/resumeiq">Resume<em>IQ</em></a>
        </div>
        <a href="/" className="case-end-back">↑ Back to portfolio</a>
      </div>

    </div>
  );
}
