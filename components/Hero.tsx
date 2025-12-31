"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/mikias1219",
      Icon: FaGithub,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mikiyas-abate",
      Icon: FaLinkedin,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const aiTags = ["🤖 AI/ML", "📊 Data Science", "☁️ Azure", "💻 Full-Stack"];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 via-blue-500 to-cyan-400 dark:from-purple-900 dark:via-pink-900 dark:via-blue-900 dark:to-cyan-900 animate-gradient opacity-20 dark:opacity-30" />
      
      {/* AI Pattern Overlay */}
      <div className="absolute inset-0 ai-pattern" />
      
      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Neural network effect */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          {[...Array(15)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 400}
              cy={Math.random() * 400}
              r="3"
              fill="url(#gradient)"
              className="animate-neural"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#f093fb" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div
          className={`space-y-6 sm:space-y-8 animate-fade-in-up ${
            mounted ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 border border-purple-400/30 dark:border-purple-400/50 backdrop-blur-sm">
            <span className="text-2xl animate-float">🤖</span>
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              AI & Data Science Professional
            </span>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
              <span className="text-white dark:text-gray-100 drop-shadow-lg">Hi, I&apos;m </span>
              <span className="gradient-text drop-shadow-2xl">Mikias Abate</span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {aiTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50 text-white dark:text-gray-200 font-medium text-sm sm:text-base shadow-lg hover:scale-110 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 dark:text-gray-200 font-medium max-w-3xl mx-auto px-4 drop-shadow-lg">
              Transforming Data into <span className="text-yellow-300 dark:text-yellow-400 font-bold">Intelligent Solutions</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6 px-4">
            <Link
              href="#contact"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-full font-bold text-lg sm:text-xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-2 animate-pulse-glow overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-center border-3 border-white/50 dark:border-gray-300/50 rounded-full font-bold text-lg sm:text-xl text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/50 backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              View Projects
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 pt-8 sm:pt-10">
            {socialLinks.map((social, index) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-full bg-gradient-to-r ${social.color} bg-opacity-20 dark:bg-opacity-30 backdrop-blur-md border border-white/20 dark:border-gray-700/50 hover:scale-125 transition-all duration-300 shadow-lg hover:shadow-xl`}
                aria-label={social.name}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <social.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-gray-200 group-hover:rotate-12 transition-transform" />
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10`} />
              </Link>
            ))}
          </div>

          <div className="pt-12 sm:pt-16">
            <div className="inline-block animate-bounce">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white/80 dark:text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
