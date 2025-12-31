import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mikias Abate | AI & Data Science Professional | Full-Stack Developer",
  description: "AI & Data Science Professional at IE Network Solutions | Azure Certified | Full-Stack Developer specializing in Python, Django, React, and Next.js",
  keywords: ["AI", "Data Science", "Full-Stack Developer", "Python", "Django", "React", "Next.js", "Azure"],
  authors: [{ name: "Mikias Abate" }],
  openGraph: {
    title: "Mikias Abate | AI & Data Science Professional",
    description: "AI & Data Science Professional | Azure Certified | Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
