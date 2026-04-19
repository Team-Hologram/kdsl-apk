import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0A0E27",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "KDSL — Stream & Download Korean Dramas Free | KDramaSL App",
  description:
    "Download the KDSL Android app — your ultimate destination for K-Dramas, Asian movies, and exclusive content. Offline downloads, HD streaming, multi-language subtitles. Free APK download.",
  keywords: [
    "Korean drama app",
    "K-Drama streaming",
    "KDrama download",
    "KDSL app",
    "KDramaSL",
    "watch Korean drama free",
    "K-Drama APK",
  ],
  authors: [{ name: "KDramaSL" }],
  openGraph: {
    title: "KDSL — Stream & Download Korean Dramas Free",
    description:
      "Download the KDSL Android app. 2000+ episodes, offline downloads, HD streaming.",
    type: "website",
    siteName: "KDramaSL",
    images: [{ url: "/kdsl.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KDSL — Stream & Download Korean Dramas Free",
    description: "Download the KDSL Android app. 2000+ episodes, offline downloads, HD streaming.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-dark text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
