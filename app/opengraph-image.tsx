import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f5f2eb",
          color: "#1a1a1a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          Hilal Safwan.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 36,
            fontWeight: 600,
            color: "#1a1a1a",
          }}
        >
          Builder. Vibecoder. Optimist.
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: "#6b6b6b",
          }}
        >
          Sri Lanka → Internet.
        </div>
      </div>
    ),
    { ...size }
  );
}
