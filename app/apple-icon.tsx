import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#080808",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontSize: 80,
          fontStyle: "italic",
          color: "#f5f0e8",
          letterSpacing: "-0.04em",
        }}
      >
        RC
      </div>
    ),
    { ...size }
  );
}
