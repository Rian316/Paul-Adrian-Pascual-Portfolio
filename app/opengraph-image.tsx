import { ImageResponse } from "next/og";
import { siteConfig, siteUrl } from "@/lib/site";

// Applies site-wide (and to nested routes that don't define their own).
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const domain = siteUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f7f8fa",
        padding: 72,
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -220,
          left: -120,
          width: 760,
          height: 760,
          display: "flex",
          background:
            "radial-gradient(circle, rgba(15,118,110,0.16), rgba(15,118,110,0) 70%)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 76,
            height: 76,
            borderRadius: 18,
            backgroundColor: "#0f766e",
            color: "#ffffff",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          PP
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 22,
            color: "#64748b",
            fontSize: 26,
            fontWeight: 500,
          }}
        >
          Portfolio
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            color: "#0f1729",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.04,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 18,
            fontSize: 36,
            fontWeight: 500,
          }}
        >
          <span style={{ color: "#475569" }}>{"Full-Stack Developer "}</span>
          <span style={{ color: "#0f766e" }}>
            {" & AI Integration Engineer"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 44,
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          <span>{domain}</span>
          <span style={{ margin: "0 14px" }}>•</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
