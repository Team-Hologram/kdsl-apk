"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "94705716717"; // Replace with your WhatsApp number (no + or spaces)
const WHATSAPP_MESSAGE = "Hi! I'm interested in KDSL app."; // Pre-filled message

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50%        { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
        }
        .wa-pulse {
          animation: wa-pulse 2.5s ease-in-out infinite;
        }
        .wa-tooltip {
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        /* Hide tooltip on mobile — no reliable hover on touch screens */
        @media (max-width: 640px) {
          .wa-tooltip { display: none !important; }
          .wa-btn {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "fixed",
          /* Respect notch/home-indicator on iOS & Android */
          bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
          right: "calc(20px + env(safe-area-inset-right, 0px))",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        {/* Tooltip — desktop only */}
        <span
          className="wa-tooltip"
          style={{
            background: "rgba(10, 14, 39, 0.92)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 500,
            padding: "6px 14px",
            borderRadius: "9999px",
            whiteSpace: "nowrap",
            letterSpacing: "0.01em",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(6px)",
            pointerEvents: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          Chat with us
        </span>

        {/* Button */}
        <span
          className={`wa-btn${isHovered ? "" : " wa-pulse"}`}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: isHovered
              ? "linear-gradient(135deg, #25d366 0%, #128c7e 100%)"
              : "linear-gradient(135deg, #25d366 0%, #1da851 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isHovered
              ? "0 8px 30px rgba(37, 211, 102, 0.5)"
              : "0 4px 16px rgba(37, 211, 102, 0.35)",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
            flexShrink: 0,
          }}
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30"
            fill="#ffffff"
            aria-hidden="true"
          >
            <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.343.636 4.608 1.84 6.586L2.667 29.333l6.958-1.815A13.28 13.28 0 0 0 16.002 29.333c7.362 0 13.333-5.97 13.333-13.333S23.364 2.667 16.002 2.667zm0 24.267a11.006 11.006 0 0 1-5.604-1.535l-.402-.238-4.13 1.077 1.1-4.014-.262-.416A10.985 10.985 0 0 1 5.001 16c0-6.073 4.928-11 11.001-11 6.072 0 11 4.927 11 11s-4.928 11-11 11zm6.018-8.24c-.328-.165-1.942-.957-2.243-1.066-.3-.11-.52-.165-.738.165s-.847 1.066-1.04 1.287c-.192.22-.383.246-.71.082-.328-.165-1.384-.51-2.636-1.625-.974-.869-1.63-1.94-1.822-2.269-.192-.328-.02-.505.144-.668.148-.146.328-.383.492-.574.164-.192.219-.329.328-.548.11-.22.055-.41-.027-.574-.082-.165-.739-1.783-1.012-2.442-.267-.64-.54-.554-.738-.565l-.629-.011c-.219 0-.574.082-.875.41-.3.328-1.148 1.12-1.148 2.731s1.175 3.168 1.34 3.387c.164.22 2.311 3.529 5.603 4.947.783.338 1.394.54 1.871.69.786.25 1.502.215 2.067.13.63-.094 1.942-.793 2.216-1.56.273-.766.273-1.422.192-1.559-.082-.136-.3-.218-.629-.382z"/>
          </svg>
        </span>
      </a>
    </>
  );
}
