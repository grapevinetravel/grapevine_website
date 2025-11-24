import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Grapevine - AI-Powered Travel Assistant";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141C25",
          backgroundImage: "linear-gradient(135deg, #141C25 0%, #1E2A38 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#00D4AA",
              textAlign: "center",
            }}
          >
            Grapevine
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#ffffff",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            AI-Powered Travel Assistant for TMCs & Corporates
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#94A3B8",
              textAlign: "center",
              maxWidth: "700px",
            }}
          >
            Drive in-platform bookings with intelligent traveller communications
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
