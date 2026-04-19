import Link from "next/link";
import Image from "next/image";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-glass-header border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Back to KDSL Home">
            <div className="w-8 h-8 flex-shrink-0">
              <Image src="/kdsl.png" alt="KDSL" width={32} height={32} className="rounded-md" />
            </div>
            <span className="text-white font-bold text-lg">
              KDrama SL
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">{title}</h1>
          <p className="text-gray-500 text-sm">Last updated: {lastUpdated}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-5" />
        </div>

        <article className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
          prose-p:text-gray-400 prose-p:leading-relaxed
          prose-li:text-gray-400
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-200
          prose-hr:border-white/10
        ">
          {children}
        </article>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-white/5 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} KDramaSL. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">Terms</Link>
            <Link href="/dmca" className="text-gray-500 hover:text-gray-300 transition-colors">DMCA</Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
