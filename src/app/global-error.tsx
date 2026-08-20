"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "Manrope, system-ui, sans-serif",
          background: "#F8F7F2",
          color: "#121212",
          textAlign: "center",
          padding: 24,
        }}
      >
        <div>
          <p style={{ letterSpacing: "0.22em", color: "#C9A227", fontSize: 12, fontWeight: 700 }}>
            ERROR
          </p>
          <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 48, margin: "16px 0" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#6B6B6B" }}>{error.message || "Unexpected application error."}</p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              background: "#C9A227",
              color: "#121212",
              border: 0,
              borderRadius: 10,
              padding: "12px 20px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
