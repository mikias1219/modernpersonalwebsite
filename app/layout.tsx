import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeScript from "./theme-script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mikias Abate | AI & Data Science Professional | Full-Stack Developer",
  description: "AI & Data Science Professional at IE Network Solutions | Azure Certified | Full-Stack Developer specializing in Python, Django, React, and Next.js",
  keywords: ["AI", "Data Science", "Full-Stack Developer", "Python", "Django", "React", "Next.js", "Azure"],
  authors: [{ name: "Mikias Abate" }],
  metadataBase: new URL("https://www.mikiasabate.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mikias Abate | AI & Data Science Professional",
    description: "AI & Data Science Professional | Azure Certified | Full-Stack Developer",
    type: "website",
    url: "https://www.mikiasabate.tech",
    siteName: "Mikias Abate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikias Abate | AI & Data Science Professional",
    description: "AI & Data Science Professional | Azure Certified | Full-Stack Developer",
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
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-200`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
