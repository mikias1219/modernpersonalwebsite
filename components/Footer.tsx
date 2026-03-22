import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { siteNavLinks } from "@/lib/site-nav";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const social = [
    { name: "GitHub", href: SITE.githubUrl, Icon: FaGithub },
    { name: "LinkedIn", href: SITE.linkedInUrl, Icon: FaLinkedin },
    { name: "Email", href: `mailto:${SITE.email}`, Icon: HiMail },
    { name: "Site", href: SITE.siteUrl, Icon: FaGlobe },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white dark:bg-teal-500 dark:text-slate-950">
                MA
              </span>
              <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-teal-900 dark:text-teal-200/90">
              {SITE.tagline}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Full-stack delivery with Python, cloud, and modern frontends—systems built for production
              and hiring-team review.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {social.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-teal-400/50 hover:text-slate-900 active:scale-[0.98] dark:border-slate-600 dark:text-slate-300 dark:hover:border-teal-500/50 dark:hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {siteNavLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-10 items-center text-slate-700 transition hover:text-teal-800 dark:text-slate-300 dark:hover:text-teal-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Colophon
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Built with{" "}
              <span className="font-medium text-slate-900 dark:text-slate-100">Next.js</span>,{" "}
              <span className="font-medium text-slate-900 dark:text-slate-100">React 19</span>, and{" "}
              <span className="font-medium text-slate-900 dark:text-slate-100">Tailwind CSS</span>.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400 sm:flex-row">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.location}</p>
        </div>
      </div>
    </footer>
  );
}
