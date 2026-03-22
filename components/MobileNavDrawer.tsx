"use client";

import Link from "next/link";
import { Drawer } from "vaul";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { primaryNavLinks } from "@/lib/site-nav";
import { SITE } from "@/lib/site";

type MobileNavDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function MobileNavDrawer({ open, onOpenChange }: MobileNavDrawerProps) {
  return (
    <Drawer.Root
      direction="right"
      open={open}
      onOpenChange={onOpenChange}
      shouldScaleBackground={false}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[60] bg-slate-950/55 backdrop-blur-[2px]" />
        <Drawer.Content className="fixed right-0 top-0 z-[61] flex h-full w-[min(100%,20rem)] flex-col border-l border-slate-200 bg-slate-50 shadow-2xl outline-none dark:border-slate-600 dark:bg-slate-950">
          <Drawer.Title className="sr-only">Menu</Drawer.Title>
          <Drawer.Description className="sr-only">
            Jump to a section of this site.
          </Drawer.Description>
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-600">
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Navigate
            </span>
            <Drawer.Close className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100">
              <span className="sr-only">Close menu</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Drawer.Close>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Primary">
            {primaryNavLinks.map((link) => (
              <Drawer.Close key={link.href} asChild>
                <Link
                  href={link.href}
                  className="min-h-11 rounded-xl px-3 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-200/80 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </Drawer.Close>
            ))}
          </nav>

          <div className="border-t border-slate-200 p-5 dark:border-slate-700">
            <Drawer.Close asChild>
              <Link
                href="#contact"
                className="flex min-h-12 w-full items-center justify-center rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                Contact me
              </Link>
            </Drawer.Close>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href={SITE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={SITE.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
