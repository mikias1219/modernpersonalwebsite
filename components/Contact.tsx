"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { CONTACT_DEV_MODE_MESSAGE } from "@/lib/contact-dev";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error" | "dev";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage(null);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await response.json()) as { error?: string; message?: string; dev?: boolean };
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        if (data.dev) {
          setFormMessage({
            type: "dev",
            text: typeof data.message === "string" ? data.message : CONTACT_DEV_MODE_MESSAGE,
          });
        } else {
          setFormMessage({
            type: "success",
            text:
              typeof data.message === "string" && data.message.length > 0
                ? data.message
                : "Message sent. I will reply as soon as I can.",
          });
        }
      } else {
        setFormMessage({
          type: "error",
          text: data.error || "Something went wrong. Please try again or email directly.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage({
        type: "error",
        text: "Network error. Please try again or use the email link below.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { Icon: HiMail, label: "Email", value: SITE.email, link: `mailto:${SITE.email}` },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      value: "mikiasabate",
      link: SITE.linkedInUrl,
    },
    { Icon: FaGithub, label: "GitHub", value: "mikias1219", link: SITE.githubUrl },
    { Icon: FaGlobe, label: "Site", value: "mikiasabate.tech", link: SITE.siteUrl },
  ];

  return (
    <section
      id="contact"
      className="section-alt border-t border-slate-200 px-4 py-20 dark:border-slate-700 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Contact"
          title="Let us"
          emphasis="work together"
          description="Hiring teams and collaborators: send a short note about the role or project—I typically respond within a few business days."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Direct lines
            </h3>
            <ul className="mt-6 space-y-3">
              {contactMethods.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.link}
                    target={m.link.startsWith("mailto:") ? undefined : "_blank"}
                    rel={m.link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex min-h-14 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 active:scale-[0.99] dark:border-slate-600 dark:bg-slate-900 dark:hover:border-slate-500"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                      <m.Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {m.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {m.value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-600 dark:text-slate-300">
              Based in{" "}
              <span className="font-medium text-slate-900 dark:text-slate-100">{SITE.location}</span>.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {formMessage ? (
                <div
                  role="status"
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    formMessage.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-100"
                      : formMessage.type === "dev"
                        ? "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100"
                        : "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-100"
                  }`}
                >
                  {formMessage.type === "dev" ? (
                    <>
                      <p className="font-semibold">Dev mode — not emailed</p>
                      <p className="mt-1 text-amber-900/90 dark:text-amber-100/90">{formMessage.text}</p>
                    </>
                  ) : (
                    formMessage.text
                  )}
                </div>
              ) : null}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 min-h-[8rem] w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500"
                  placeholder="Role, stack, timeline, or project context…"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="min-h-12 w-full rounded-xl bg-teal-700 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
