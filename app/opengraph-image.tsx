import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rajshekar RC — AI Engineer · Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#666",
            fontSize: 18,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: "#444",
            }}
          />
          Portfolio · 2026
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 120,
              fontStyle: "italic",
              color: "#f5f0e8",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
            }}
          >
            AI Engineer.
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#888",
              fontFamily: "sans-serif",
              fontWeight: 300,
              letterSpacing: "0.02em",
            }}
          >
            Rajshekar RC · Full Stack · GenAI · Bangalore
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              color: "#555",
              fontSize: 16,
              fontFamily: "sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Python · React · Next.js · Groq · RAG · OpenCV
          </div>
          <div
            style={{
              fontSize: 28,
              fontStyle: "italic",
              color: "#f5f0e8",
              opacity: 0.4,
            }}
          >
            RC
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
