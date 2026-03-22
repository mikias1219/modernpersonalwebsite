export type NavLink = {
  href: string;
  label: string;
};

/** Main sections — use in navbar and drawer (Contact is only the header CTA, not duplicated here). */
export const primaryNavLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
];

/** Full list including Contact — footer and sitemap-style navigation. */
export const siteNavLinks: NavLink[] = [
  ...primaryNavLinks,
  { href: "#contact", label: "Contact" },
];
