import { ScrollProgress } from "@/components/scroll-progress";
import { StickyHeader } from "@/components/sticky-header";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { InstallGuideSection } from "@/components/sections/install-guide-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark selection:bg-primary/30 selection:text-white">
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Sticky Header */}
      <StickyHeader />

      {/* Page Sections */}
      <HeroSection />
      <FeaturesSection />
      <InstallGuideSection />
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
