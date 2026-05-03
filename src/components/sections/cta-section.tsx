"use client";

import { useEffect, useRef } from "react";

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <span className="text-lg flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="download"
      className="relative pt-10 md:pt-14 pb-28 md:pb-36 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden"
      aria-label="Download call to action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light/30 to-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Live Now — Free to Download
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 text-balance">
          Download Free.
          <br />
          <span className="text-gradient">Watch Everything.</span>
        </h2>

        {/* Sub */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Join thousands of K-Drama fans streaming their favorite shows with KDSL.{" "}
          No subscription, no hidden fees, no limits.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://images.kdramasl.site/apk/kdsl_v1.0.apk"
            download="KDSL_v1.0.apk"
            id="cta-primary-download"
            className="btn-download w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg shadow-glow-brand animate-pulse-glow"
            aria-label="Download KDSL APK"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download APK — Free</span>
          </a>
          <a
            href="#install"
            id="cta-secondary-install"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/40 text-white font-semibold text-lg transition-all duration-300"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Install Guide
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8">
          <TrustBadge icon="🛡️" text="Safe & Verified APK" />
          <TrustBadge icon="🆓" text="100% Free Forever" />
          <TrustBadge icon="📵" text="No Root Needed" />
          <TrustBadge icon="⚡" text="Quick Install" />
        </div>

        {/* Version info */}
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          Compatible with Android 7.0+ · APK Download · KDrama SL
        </p>
      </div>
    </section>
  );
}
