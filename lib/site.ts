/** Public site constants — single place for URLs and copy. */

/** Default when no NEXT_PUBLIC_SITE_URL (Vercel project production URL). */
export const DEFAULT_SITE_URL = "https://mikiasabatesite.vercel.app";

function resolveSiteUrl(): string {
  const v = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (v || DEFAULT_SITE_URL).replace(/\/$/, "");
}

export const SITE = {
  /** Short project / site id (tab title, OG siteName, npm package name). */
  shortName: "mikiasabatesite",
  name: "Mikias Abate",
  /** One-line positioning for hero + metadata. */
  tagline:
    "AI Engineer | Software Developer | Data Science | Building AI-Driven Solutions",
  /** Your public LinkedIn profile (update if the vanity URL changes). */
  linkedInUrl: "https://www.linkedin.com/in/mikiasabate/",
  githubUrl: "https://github.com/mikias1219",
  /** Canonical public URL (override with NEXT_PUBLIC_SITE_URL). */
  siteUrl: resolveSiteUrl(),
  email: "mikiyasabate1219@gmail.com",
  location: "Addis Ababa, Ethiopia",
} as const;

/** Hostname for UI labels (e.g. contact card). */
export function siteHostname(): string {
  try {
    return new URL(SITE.siteUrl).hostname;
  } catch {
    return new URL(DEFAULT_SITE_URL).hostname;
  }
}
