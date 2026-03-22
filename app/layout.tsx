import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { SITE } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: SITE.shortName,
  title: {
    default: `${SITE.shortName} · ${SITE.name}`,
    template: `%s · ${SITE.shortName}`,
  },
  description: `${SITE.tagline} · Azure-certified · Python, React, Next.js, cloud AI and data systems.`,
  keywords: [
    "AI Engineer",
    "Data Science",
    "Software Developer",
    "Full-Stack",
    "Python",
    "React",
    "Next.js",
    "Azure",
    "Machine Learning",
  ],
  authors: [{ name: SITE.name }],
  metadataBase: new URL("https://www.mikiasabate.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE.shortName} · ${SITE.name}`,
    description: SITE.tagline,
    type: "website",
    url: "https://www.mikiasabate.tech",
    siteName: SITE.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.shortName} · ${SITE.name}`,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
