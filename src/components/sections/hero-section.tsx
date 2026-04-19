"use client";
import Image from "next/image";

// ── Download Buttons ──────────────────────────────────────────
function DownloadButtons({ size = "lg" }: { size?: "lg" | "md" }) {
  const isLg = size === "lg";
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      <a
        href="/kdsl_v1.0.apk"
        id="hero-apk-download"
        className={`btn-download inline-flex items-center justify-center gap-3 rounded-2xl text-white font-bold shadow-glow-brand animate-pulse-glow ${isLg ? "px-8 py-4 text-base" : "px-6 py-3.5 text-sm"
          }`}
        aria-label="Download KDSL APK for Android"
      >
        <svg width={isLg ? 22 : 18} height={isLg ? 22 : 18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <div className="text-left">
          <div className={`leading-none ${isLg ? "text-xs mb-0.5 font-medium opacity-80" : "hidden"}`}>Free Download</div>
          <div>Download APK</div>
        </div>
      </a>
      <a
        href="#install"
        id="hero-install-guide"
        className={`inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/40 text-white font-semibold transition-all duration-300 backdrop-blur-sm ${isLg ? "px-8 py-4 text-base" : "px-6 py-3.5 text-sm"
          }`}
        aria-label="View install guide"
      >
        <svg width={isLg ? 20 : 16} height={isLg ? 20 : 16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        How to Install
      </a>
    </div>
  );
}

// ── Animated Stat ─────────────────────────────────────────────
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-gradient leading-none mb-1">{value}</div>
      <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}

// ── Hero Section ──────────────────────────────────────────────
export function HeroSection() {
  const particles = Array.from({ length: 16 }).map((_, i) => ({
    size: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 4,
    color: i % 2 === 0 ? "#00D9FF" : "#6C5CE7",
  }));

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      aria-label="Hero section"
    >
      {/* Ambient gradient mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-mesh-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-secondary/15 blur-[140px] animate-mesh-slow" style={{ animationDelay: "-8s" }} />
        <div className="absolute top-[50%] left-[40%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] animate-mesh-slow" style={{ animationDelay: "-4s" }} />
        {/* Particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: p.color,
              opacity: 0.35,
              animation: `float ${p.duration}s ${p.delay}s infinite alternate ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-primary uppercase tracking-widest mb-8 animate-reveal-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Free Android App — No Subscription
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 animate-reveal-up delay-100">
              K-Dramas.{" "}
              <span className="block">
                <span className="text-gradient">Anytime.</span>{" "}
                <span className="text-gradient-reverse">Anywhere.</span>
              </span>
            </h1>

            {/* Sub */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-reveal-up delay-200">
              Stream and download thousands of Korean dramas — in HD, with subtitles,
              even without internet. All for <strong className="text-white">absolutely free.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="animate-reveal-up delay-300 w-full sm:w-auto">
              <DownloadButtons size="lg" />
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6 animate-reveal-up delay-400">
              {["✓ Safe APK", "✓ No Root Required", "✓ Android 7.0+", "✓ Always Free"].map((t) => (
                <span key={t} className="text-xs text-gray-400 font-medium flex items-center gap-1">
                  {t}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10 animate-reveal-up delay-500">
              <StatItem value="2000+" label="Episodes" />
              <div className="w-px h-10 bg-white/10" />
              <StatItem value="100+" label="K-Dramas" />
              <div className="w-px h-10 bg-white/10" />
              <StatItem value="Free" label="Forever" />
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/30 blur-[60px] rounded-full scale-90" />

              {/* Phone frame */}
              <div
                className="relative w-[280px] xl:w-[320px] animate-phone-float"
                style={{ perspective: "1000px" }}
              >
                <div className="relative h-[520px] xl:h-[603px] overflow-hidden">
                  <Image
                    src="/app-hero1.png"
                    alt="KDSL app showing Perfect Crown K-Drama with trending shows"
                    fill
                    sizes="320px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge — Downloads */}
              <div className="absolute -left-6 top-1/4 bg-glass border border-white/10 rounded-2xl px-4 py-3 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⬇️</span>
                  <div>
                    <div className="text-white font-bold text-sm">Offline Ready</div>
                    <div className="text-gray-400 text-xs">Download & Watch</div>
                  </div>
                </div>
              </div>

              {/* Floating badge — Free */}
              <div className="absolute -right-4 bottom-1/3 bg-glass border border-primary/20 rounded-2xl px-4 py-3 shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🆓</span>
                  <div>
                    <div className="text-white font-bold text-sm">100% Free</div>
                    <div className="text-gray-400 text-xs">No subscription</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center justify-center gap-2 text-gray-500 animate-bounce-subtle">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
