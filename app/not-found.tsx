import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Lost in transit · Rajshekar RC",
};

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found-kicker">404</p>
      <h1 className="not-found-title">Lost in transit.</h1>
      <p className="not-found-subtitle">
        This page doesn&apos;t exist — or it used to and I shipped it somewhere else.
      </p>
      <a href="/" className="not-found-link">← Back to portfolio</a>
    </div>
  );
}
