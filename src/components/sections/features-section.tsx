"use client";

import { useEffect, useRef } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
  delay: number;
}

function FeatureCard({ icon, title, desc, delay }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.15, rootMargin: "-5%" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal group bg-dark-light/80 backdrop-blur-sm border border-white/5 hover:border-primary/30 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover text-left flex flex-col h-full relative overflow-hidden cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background glow */}
      <div className="absolute -right-8 -top-8 w-36 h-36 bg-primary/8 rounded-full blur-[50px] group-hover:bg-primary/18 transition-colors duration-500" />
      <div className="absolute -left-8 -bottom-8 w-36 h-36 bg-secondary/8 rounded-full blur-[50px] group-hover:bg-secondary/18 transition-colors duration-500" />

      {/* Icon */}
      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-400 origin-bottom-left filter drop-shadow-lg relative z-10">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h3>
      <p className="text-gray-400 leading-relaxed flex-1 text-sm md:text-base relative z-10">{desc}</p>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(0,217,255,0.04) 0%, rgba(108,92,231,0.04) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,217,255,0.15)" }} />
    </div>
  );
}

const FEATURES = [
  {
    icon: "📺",
    title: "Vast K-Drama Library",
    desc: "Thousands of K-Dramas with new titles added regularly. Always something new to discover.",
  },
  {
    icon: "⬇️",
    title: "Offline Downloads",
    desc: "Download full episodes and movies to watch completely offline — no Wi-Fi, no data, no problem. Perfect for commutes.",
  },
  {
    icon: "🌐",
    title: "Multi-Language Subtitles",
    desc: "Subtitles in English, Sinhala languages for every show.",
  },
  {
    icon: "🎬",
    title: "HD & Crystal Clear",
    desc: "Stream in stunning HD quality with adaptive bitrate — automatically adjusts to your connection speed.",
  },
  {
    icon: "📱",
    title: "Lightweight & Fast",
    desc: "Optimized for Android with a small APK size. Runs smoothly on mid-range and older devices too.",
  },
  {
    icon: "❤️",
    title: "Watchlist & Favourites",
    desc: "Save dramas to your personal watchlist, mark favourites, and pick up exactly where you left off — across any session.",
  },
];

function ComingSoonBanner() {
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
    <div
      ref={ref}
      className="reveal mt-10 relative overflow-hidden rounded-3xl border border-primary/20 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
      style={{
        background: "linear-gradient(135deg, rgba(0,217,255,0.06) 0%, rgba(108,92,231,0.08) 60%, rgba(0,0,0,0) 100%)",
      }}
    >
      {/* Animated glow orbs */}
      <div className="absolute -top-12 -left-12 w-56 h-56 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Icon */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-5xl md:text-6xl"
          style={{ background: "linear-gradient(135deg, rgba(0,217,255,0.15), rgba(108,92,231,0.15))", border: "1px solid rgba(0,217,255,0.2)" }}>
          ✨
        </div>
      </div>

      {/* Text */}
      <div className="relative z-10 flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Coming Soon</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
          Smart Recommendations
        </h3>
        <p className="text-gray-400 text-base leading-relaxed max-w-xl">
          We&apos;re building an AI-powered engine that learns your taste and surfaces personalized K-Drama picks just for you. Stay tuned — it&apos;s going to be a game changer.
        </p>
      </div>

      {/* Right pulse decoration */}
      <div className="hidden md:flex flex-shrink-0 items-center justify-center relative z-10">
        <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center">
          <div className="w-9 h-9 rounded-full border border-primary/50 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-primary/70 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden" aria-label="Features">
      {/* Subtle section separator glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="reveal text-center mb-16 md:mb-20 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest mb-6">
            Why KDSL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Everything You Need to{" "}
            <span className="text-gradient">Enjoy K-Dramas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Packed with features that make your Korean drama experience seamless, enjoyable, and always accessible.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mt-8" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 80} />
          ))}
        </div>

        {/* Smart Recommendations — Coming Soon Banner */}
        <ComingSoonBanner />

        {/* Mid-section CTA Strip */}
        <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-r from-dark-light via-dark-light to-dark-light border border-white/8 p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Bg glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Ready to Start Watching?
            </h3>
            <p className="text-gray-400 text-base">Free download. No sign-up required. Start streaming in minutes.</p>
          </div>
          <a
            href="#download"
            id="features-cta-btn"
            className="btn-download flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold text-base whitespace-nowrap"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Free APK</span>
          </a>
        </div>
      </div>
    </section>
  );
}
