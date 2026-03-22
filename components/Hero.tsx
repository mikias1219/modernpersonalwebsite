"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SITE } from "@/lib/site";

const highlights = ["AI Engineer", "Software Developer", "Data Science", "AI-driven products"];

export default function Hero() {
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="mesh-bg absolute inset-0" aria-hidden />
      <div className="grid-overlay pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="space-y-7 sm:space-y-8">
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
            Portfolio
          </p>

          <h1 className="animate-fade-in-up text-balance text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:60ms]">
            {SITE.name}
          </h1>

          <p className="animate-fade-in-up mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg md:text-xl [animation-delay:120ms]">
            {SITE.tagline}
          </p>

          <p className="animate-fade-in-up mx-auto max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 [animation-delay:160ms]">
            End-to-end delivery: models, data pipelines, APIs, and polished web apps—aligned with how
            hiring teams evaluate production AI and software.
          </p>

          <ul className="animate-fade-in-up flex flex-wrap items-center justify-center gap-2 [animation-delay:200ms]">
            {highlights.map((label) => (
              <li key={label}>
                <span className="inline-block rounded-full border border-slate-200 bg-white/95 px-3.5 py-2 text-xs font-medium text-slate-800 shadow-sm dark:border-slate-600 dark:bg-slate-900/95 dark:text-slate-100">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="animate-fade-in-up flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center [animation-delay:240ms]">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-800 active:scale-[0.99] dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
            >
              Contact me
            </Link>
            <Link
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/95 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-teal-400 hover:bg-white active:scale-[0.99] dark:border-slate-600 dark:bg-slate-900/95 dark:text-slate-50 dark:hover:border-teal-500 dark:hover:bg-slate-800"
            >
              View projects
            </Link>
          </div>

          <div className="animate-fade-in-up flex items-center justify-center gap-3 pt-2 [animation-delay:300ms]">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-800 transition hover:border-teal-500/50 hover:text-slate-950 active:scale-[0.98] dark:border-slate-600 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={SITE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-800 transition hover:border-teal-500/50 hover:text-slate-950 active:scale-[0.98] dark:border-slate-600 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-500 dark:text-slate-400">
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-teal-500/80 to-transparent dark:from-teal-400/80" />
      </div>
    </div>
  );
}
