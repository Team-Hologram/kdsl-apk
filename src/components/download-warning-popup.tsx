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
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes dlw-backdrop-out {
          to { opacity: 0; }
        }
        @keyframes dlw-card-out {
          to { opacity: 0; transform: translateY(24px) scale(0.96); }
        }

        .dlw-backdrop {
          animation: ${leaving ? "dlw-backdrop-out" : "dlw-backdrop-in"} 0.32s ease forwards;
        }
        .dlw-card {
          animation: ${leaving ? "dlw-card-out" : "dlw-card-in"} 0.32s cubic-bezier(0.34,1.28,0.64,1) forwards;
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

      {/* Card */}
      <div
        className="dlw-card"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(92vw, 420px)",
          background:
            "linear-gradient(145deg, rgba(15,18,48,0.98) 0%, rgba(10,14,39,0.98) 100%)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "20px",
          padding: "24px 20px 20px",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          zIndex: 99991,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
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
              Download කරන්නේ බැරිද?
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
          ඔබේ Chrome browser එකෙන් APK file download කරන්නේ{" "}
          <span style={{ color: "#fbbf24", fontWeight: 600 }}>
            block වෙන්නේ
          </span>{" "}
          ඇති. ගැටලුවක් ආවොත් පහළ WhatsApp button එකෙන් අපිට message
          එකක් දනවා — ඉක්මනින්ම help කරන්නම්! 🙏
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)",
          }}
        />

        {/* WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
          className="dlw-wa-btn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            background:
              "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
            borderRadius: "12px",
            padding: "13px 20px",
            textDecoration: "none",
            color: "#fff",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "-0.01em",
            boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
          }}
        >
          {/* Animated WA icon */}
          <span className="dlw-wa-icon" style={{ display: "flex" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="22"
              height="22"
              fill="#ffffff"
              aria-hidden="true"
            >
              <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.343.636 4.608 1.84 6.586L2.667 29.333l6.958-1.815A13.28 13.28 0 0 0 16.002 29.333c7.362 0 13.333-5.97 13.333-13.333S23.364 2.667 16.002 2.667zm0 24.267a11.006 11.006 0 0 1-5.604-1.535l-.402-.238-4.13 1.077 1.1-4.014-.262-.416A10.985 10.985 0 0 1 5.001 16c0-6.073 4.928-11 11.001-11 6.072 0 11 4.927 11 11s-4.928 11-11 11zm6.018-8.24c-.328-.165-1.942-.957-2.243-1.066-.3-.11-.52-.165-.738.165s-.847 1.066-1.04 1.287c-.192.22-.383.246-.71.082-.328-.165-1.384-.51-2.636-1.625-.974-.869-1.63-1.94-1.822-2.269-.192-.328-.02-.505.144-.668.148-.146.328-.383.492-.574.164-.192.219-.329.328-.548.11-.22.055-.41-.027-.574-.082-.165-.739-1.783-1.012-2.442-.267-.64-.54-.554-.738-.565l-.629-.011c-.219 0-.574.082-.875.41-.3.328-1.148 1.12-1.148 2.731s1.175 3.168 1.34 3.387c.164.22 2.311 3.529 5.603 4.947.783.338 1.394.54 1.871.69.786.25 1.502.215 2.067.13.63-.094 1.942-.793 2.216-1.56.273-.766.273-1.422.192-1.559-.082-.136-.3-.218-.629-.382z" />
            </svg>
          </span>
          WhatsApp එකෙන් Message කරන්න
        </a>

        {/* Dismiss link */}
        <button
          onClick={handleClose}
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.35)",
            fontSize: "12px",
            cursor: "pointer",
            padding: "4px",
            margin: "0 auto",
            letterSpacing: "0.01em",
          }}
        >
          නැහැ, මම download කරගත්තා
        </button>
      </div>
    </>
  );
}
