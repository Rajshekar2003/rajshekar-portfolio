import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#080808",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontSize: 16,
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
