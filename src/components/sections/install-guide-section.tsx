"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Step {
  number: number;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  warning?: string;
  tip?: string;
  optional?: boolean;
  optionalNote?: string;
  branch?: { skip: string; next: string };
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "Tap the Download Button",
    description:
      "Open this page on your Android phone browser and tap the \"Download APK\" button. The APK file will start downloading to your phone.",
    image: "/step1.png",
    imageAlt: "Android browser showing the KDSL download page with the Download APK button",
    tip: "Use Chrome or Firefox browser for the best experience.",
  },
  {
    number: 2,
    title: "Open the Downloaded APK File",
    description:
      "When the download finishes, open your Downloads or File manager. Find the file named \"kdsl_v1.0.apk\" and tap on it to begin the install.",
    bullets: [
      "Open your Downloads",
      "Find \"kdsl_v1.0.apk\" in the list",
      "Tap on the file to open it",
    ],
    image: "/step6-portrait.png",
    imageAlt: "Android Downloads screen showing kdsl_v1.0.apk file ready to open",
  },
  {
    number: 3,
    title: "Choose \"Package Installer\" to Open",
    description:
      "Some phones will ask how you want to open the APK file. Select \"Package Installer\" from the list. You can tap \"Just once\" or \"Always\" — either is fine.",
    bullets: [
      "Tap \"Package Installer\"",
      "Tap \"Just once\" or \"Always\"",
    ],
    image: "/step7-portrait.png",
    imageAlt: "Android Complete action using dialog showing App Market and Package Installer options",
    optional: true,
    optionalNote: "This screen only appears on some phones that have a manufacturer app store installed.",
  },
  {
    number: 4,
    title: "Tap \"Install\" to Install the App",
    description:
      "A pop-up will appear asking if you want to install KDrama SL. Tap the blue \"Install\" button. If you see a warning about unknown sources, tap Settings and allow installs from your browser first.",
    image: "/step7_1-portrait.png",
    imageAlt: "Google Play Protect screen showing This app looks safe with Install and Don't install buttons",
  },
  {
    number: 5,
    title: "Scan App if Google Play Protect Asks",
    description:
      "A few phones will show a \"App scan recommended\" screen. Tap \"Scan app\" — Google will quickly check the app and then let you install it. The app is completely safe.",
    bullets: [
      "Read the Google Play Protect message",
      "it says \"Scan app\" — tap Scan app, then Install",
    ],
    image: "/step8-portrait.png",
    imageAlt: "Android dialog asking Do you want to install this app with Cancel and Install buttons",
    warning:
      "⚠️ If Android asks for permission to install from unknown sources — tap Settings, turn ON \"Allow from this source\", then go back and tap Install. This is normal for all APK installs.",
    optional: true,
    optionalNote: "This screen appears on phones that have never seen this app before. It is a one-time security scan — completely normal.",
  },
  {
    number: 6,
    title: "Google Play Protect Says \"Safe\" — Tap Install",
    description:
      "Some phones will show a Google Play Protect screen. If it says \"This app looks safe\", just tap \"Install\" to continue. This means Google has checked the app and it is safe.",
    bullets: [
      "After the scan, tap \"Install\"",
      "Do NOT tap \"Don't install app\"",
    ],
    image: "/step8_1-portrait.png",
    imageAlt: "Google Play Protect App scan recommended screen showing KDrama SL app with Scan app button",
    optional: true,
    optionalNote: "This screen appears on phones that have never seen this app before. It is a one-time security scan — completely normal.",
  },
  {
    number: 7,
    title: "KDrama SL is on Your Home Screen!",
    description:
      "The KDrama SL app icon is now on your home screen. Tap it anytime to open the app. You can also find it in your app drawer by searching \"KDrama SL\".",
    bullets: [
      "Look for the \"KDrama SL\" icon on your home screen",
      "Tap the icon to open the app",
      "No login needed — start watching right away!",
    ],
    image: "/step9_2-portrait.png",
    imageAlt: "Android home screen showing the KDrama SL app icon installed alongside other apps",
  },
  {
    number: 8,
    title: "Allow Notifications",
    description:
      "When you first open the app, a notification pop-up will also appear — tap \"Allow\" to get updates.",
    bullets: [
      "Tap \"Allow\" to receive app notifications (recommended)",
    ],
    image: "/step9_3-portrait.png",
    imageAlt: "KDSL app first launch showing privacy notice and notification permission dialog",
    tip: "Allowing notifications lets the app tell you when new K-Dramas are added.",
    optional: true,
  },
  {
    number: 9,
    title: "Close the Privacy Screen",
    description:
      "Some phones will show the privacy message as a full screen without the notification pop-up. Just tap the green \"Close\" button and the app will open normally.",
    bullets: [
      "You will see a \"We care about your privacy\" screen",
      "Tap the green \"Close\" button at the top",
      "The app home screen will load",
    ],
    image: "/step9_4-portrait.png",
    imageAlt: "KDSL app showing full privacy notice screen with green Close button",
    optional: true,
    optionalNote: "This full-screen privacy notice appears on some Android versions instead of the small pop-up. Simply tap Close to continue.",
  },
  {
    number: 10,
    title: "Welcome Screen — Tap Next or Skip",
    description:
      "The app will show a welcome screen. Tap the blue \"Next\" button to see a quick tour of the app features (Steps 11–13). If you already know the app, tap \"Skip\" to go straight to the home screen.",
    bullets: [
      "Tap \"Next\" to see the app tour (recommended for first time)",
      "Tap \"Skip\" to go straight to the home screen",
      "The tour only takes a few seconds",
    ],
    image: "/step9_5-portrait.png",
    imageAlt: "KDSL app welcome onboarding screen with Skip and Next buttons",
    tip: "Press Next to learn about the app features before you start.",
    branch: {
      skip: "Tap \"Skip\" → Go straight to Step 14 (home screen)",
      next: "Tap \"Next\" → Continue to Step 11 (app tour)",
    },
  },
  {
    number: 11,
    title: "Learn About HD Streaming",
    description:
      "The second screen shows the streaming quality feature. The app streams K-Dramas in HD with multiple resolution options. Tap \"Next\" to continue.",
    bullets: [
      "Read about HD quality streaming",
      "The app supports multiple resolution options",
      "Tap \"Next\" to go to the next screen",
    ],
    image: "/step9_6-portrait.png",
    imageAlt: "KDSL onboarding screen showing High Quality Streaming feature with TV icon",
  },
  {
    number: 12,
    title: "Learn About Offline Downloads",
    description:
      "The third screen shows the offline download feature. You can download episodes and watch them without the internet. Tap \"Next\" to continue.",
    bullets: [
      "Read about downloading episodes",
      "You can watch downloaded episodes without Wi-Fi",
      "Tap \"Next\" to go to the last screen",
    ],
    image: "/step9_7-portrait.png",
    imageAlt: "KDSL onboarding screen showing Download and Watch Offline feature with download box icon",
  },
  {
    number: 13,
    title: "Learn About Sinhala Subtitles — Tap Get Started",
    description:
      "The last onboarding screen shows the subtitle feature. The app has both Sinhala and English subtitles. Tap the \"Get Started\" button to go to the home screen.",
    bullets: [
      "Read about Sinhala and English subtitles",
      "Tap the blue \"Get Started\" button",
      "The app home screen will now open",
    ],
    image: "/step9_8-portrait.png",
    imageAlt: "KDSL onboarding screen showing Sinhala Subtitles feature with Get Started button",
  },
  {
    number: 14,
    title: "You're In — Start Watching K-Dramas!",
    description:
      "The app home screen is ready! You can see trending K-Dramas, search for shows, download episodes, and more. Tap any show to start watching right now. No login needed!",
    bullets: [
      "Tap any drama to start watching",
      "Use the Search tab to find your favourite show",
      "Tap the Downloads tab to watch offline",
    ],
    image: "/steplast-portrait.png",
    imageAlt: "KDSL app home screen showing Perfect Crown drama and trending K-Dramas list",
    tip: "Tap the ⬇️ Download button on any episode to save it for offline viewing.",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.08, rootMargin: "-3%" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${isEven ? "reveal-left" : "reveal-right"} relative`}
      style={{ transitionDelay: "80ms" }}
    >
      {/* Optional badge ribbon */}
      {step.optional && (
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            Only on some phones — may not appear on yours
          </span>
        </div>
      )}

      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${step.optional ? "p-6 rounded-3xl border border-yellow-500/10 bg-yellow-500/[0.03]" : ""}`}>
        {/* Text side — alternates left/right on desktop */}
        <div className={`flex flex-col ${!isEven ? "lg:order-2" : ""}`}>
          {/* Step badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-shrink-0">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-glow-brand ${step.optional ? "bg-yellow-500/20 border border-yellow-500/30" : "animate-shimmer"}`}>
                <span className={`font-bold text-xl relative z-10 ${step.optional ? "text-yellow-300" : "text-white"}`}>{step.number}</span>
              </div>
            </div>
            <div className={`h-px flex-1 bg-gradient-to-r ${step.optional ? "from-yellow-500/30" : "from-primary/40"} to-transparent`} />
          </div>

          {/* Content */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            {step.title}
          </h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Bullet points */}
          {step.bullets && step.bullets.length > 0 && (
            <ul className="space-y-2 mb-5">
              {step.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary text-[11px] font-bold">{i + 1}</span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {/* Optional note */}
          {step.optionalNote && (
            <div className="bg-yellow-500/8 border border-yellow-500/20 rounded-xl p-4 mb-4">
              <p className="text-yellow-300/90 text-sm leading-relaxed">
                <span className="font-semibold">ℹ️ Note: </span>{step.optionalNote}
              </p>
            </div>
          )}

          {/* Warning box */}
          {step.warning && (
            <div className="warning-box p-4 rounded-xl mb-4" role="alert">
              <p className="text-yellow-300 text-sm leading-relaxed font-medium">{step.warning}</p>
            </div>
          )}

          {/* Branch choice box */}
          {step.branch && (
            <div className="rounded-xl border border-primary/20 overflow-hidden mb-4">
              <div className="bg-primary/8 px-4 py-2 border-b border-primary/15">
                <p className="text-primary text-xs font-bold uppercase tracking-widest">↪ Choose your path</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
                <div className="px-4 py-3 flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 text-gray-400 text-lg">⏭</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.branch.skip}</p>
                </div>
                <div className="px-4 py-3 flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 text-primary text-lg">▶</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.branch.next}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tip box */}
          {step.tip && (
            <div className="bg-primary/8 border border-primary/20 rounded-xl p-4">
              <p className="text-primary text-sm font-medium">💡 Tip: {step.tip}</p>
            </div>
          )}
        </div>

        {/* Image side */}
        <div className={`flex justify-center relative ${!isEven ? "lg:order-1" : ""}`}>
          {/* Glow behind phone */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`w-52 h-52 rounded-full blur-[60px] ${
              step.optional ? "bg-yellow-500/10" : step.number % 2 === 0 ? "bg-secondary/20" : "bg-primary/15"
            }`} />
          </div>
          {/* Phone frame mockup */}
          <div className="relative w-48 sm:w-56 md:w-64 lg:w-[240px] xl:w-[260px] rounded-[32px] overflow-hidden">
            <Image
              src={step.image}
              alt={step.imageAlt}
              width={260}
              height={520}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 200px, 260px"
              loading={index < 2 ? "eager" : "lazy"}
            />
          </div>
          {/* Step number watermark */}
          <div className={`absolute -top-3 right-0 lg:-right-3 w-10 h-10 rounded-full bg-dark border-2 flex items-center justify-center font-bold text-sm ${
            step.optional ? "border-yellow-500/40 text-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.3)]" : "border-primary/40 text-primary shadow-glow-primary"
          }`}>
            {step.number}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstallGuideSection() {
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
    <section
      id="install"
      className="relative pt-28 md:pt-36 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark via-dark-light/20 to-dark z-10 overflow-hidden"
      aria-label="Installation guide"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="reveal text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            Step-by-Step Guide
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 text-balance">
            Install KDSL in Under{" "}
            <span className="text-gradient">3 Minutes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Follow these simple steps to get KDSL running on your Android device.
            Works on all Android phones 7.0 and above.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mt-8 mx-auto" />

          {/* Legend */}
          <div className="mt-8 inline-flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-3 h-3 rounded-full bg-primary/70" />
              Always shown
            </div>
            <div className="flex items-center gap-2 text-sm text-yellow-400/80">
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              Only on some phones
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-28">
          {STEPS.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom CTA after steps */}
        <div className="mt-10 text-center reveal" style={{ transitionDelay: "200ms" }}>
          <p className="text-gray-400 mb-6 text-lg">All done! Ready to start your K-Drama journey?</p>
          <a
            href="#download"
            id="install-guide-cta"
            className="btn-download inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg shadow-glow-brand"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download KDSL APK Free
          </a>
        </div>
      </div>
    </section>
  );
}
