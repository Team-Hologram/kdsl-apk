"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "94705716717";
const WHATSAPP_MESSAGE =
  "හලෝ! APK download කරන්න help කරන්න පුළුවන්ද?";

export function DownloadWarningPopup() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Show the popup on every page load after a short delay
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setLeaving(true);
    setTimeout(() => setVisible(false), 320);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes dlw-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes dlw-card-in {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   }
        }
        @keyframes dlw-backdrop-out {
          to { opacity: 0; }
        }
        @keyframes dlw-card-out {
          to { opacity: 0; transform: translateY(16px) scale(0.95); }
        }

        .dlw-backdrop {
          animation: ${leaving ? "dlw-backdrop-out" : "dlw-backdrop-in"} 0.32s ease forwards;
        }
        .dlw-card {
          animation: ${leaving ? "dlw-card-out" : "dlw-card-in"} 0.36s cubic-bezier(0.34,1.2,0.64,1) forwards;
        }

        .dlw-wa-btn {
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .dlw-wa-btn:active {
          transform: scale(0.96) !important;
        }

        /* WhatsApp icon bounce */
        @keyframes dlw-wa-bounce {
          0%, 100% { transform: scale(1);    }
          50%       { transform: scale(1.14); }
        }
        .dlw-wa-icon {
          animation: dlw-wa-bounce 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="dlw-backdrop"
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.72)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 99990,
        }}
      />

      {/* Full-screen centering wrapper */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99991,
          pointerEvents: "none",
          padding: "16px",
        }}
      >
        {/* Card — animation only uses translateY/scale, no centering conflict */}
        <div
          className="dlw-card"
          style={{
            width: "min(92vw, 420px)",
            background:
              "linear-gradient(145deg, rgba(15,18,48,0.98) 0%, rgba(10,14,39,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "20px",
            padding: "24px 20px 20px",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            position: "relative",
            pointerEvents: "all",
          }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              background: "rgba(255,255,255,0.08)",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "rgba(255,255,255,0.6)",
              fontSize: "16px",
              lineHeight: 1,
              transition: "background 0.18s",
            }}
          >
            ✕
          </button>

          {/* Warning icon */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "32px",
                lineHeight: 1,
                filter: "drop-shadow(0 0 8px rgba(250,204,21,0.5))",
              }}
            >
              ⚠️
            </span>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                Download කරගන්න බැරි වුනොත්?
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                }}
              >
                සියලු Browsers · සියලු Devices
              </p>
            </div>
          </div>

          {/* Sinhala message */}
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.80)",
            }}
          >
            ඔයා​ගේ browser එකෙන් App එ​ක download කරද්​දි{" "}
            <span style={{ color: "#fbbf24", fontWeight: 700 }}>
              Block වෙන (Download කරන්න දෙන්නැති)
            </span>{" "}
            ගැටලුවක් ආවොත් පහළ WhatsApp button එකෙන් අපිට message
            එකක් දාන්න. — අපි ඉක්මනින්ම help කරන්නම්! 🙏
          </p>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)",
            }}
          />
        </div> {/* end card */}
      </div> {/* end centering wrapper */}
    </>
  );
}
