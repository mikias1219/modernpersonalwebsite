import type { ReactNode } from "react";

type ProjectCoverProps = {
  /** Short line shown on the card (e.g. product name). */
  label: string;
  /** Tailwind gradient utility classes, e.g. from-violet-600 to-fuchsia-600 */
  gradient: string;
  /** Decorative pattern variant for visual variety */
  pattern: "grid" | "dots" | "diagonal";
};

const patterns: Record<ProjectCoverProps["pattern"], ReactNode> = {
  grid: (
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
      aria-hidden
    />
  ),
  dots: (
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
      aria-hidden
    />
  ),
  diagonal: (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -28deg,
          rgba(255,255,255,0.08) 0,
          rgba(255,255,255,0.08) 1px,
          transparent 1px,
          transparent 16px
        )`,
      }}
      aria-hidden
    />
  ),
};

/** Deterministic “hero” image for each project — readable in light and dark page themes. */
export default function ProjectCover({ label, gradient, pattern }: ProjectCoverProps) {
  return (
    <div
      className={`relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br ${gradient} shadow-inner ring-1 ring-black/5 dark:ring-white/10`}
    >
      {patterns[pattern]}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent dark:from-black/65" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
          Case study
        </p>
        <p className="mt-1 line-clamp-2 text-left text-sm font-semibold leading-snug text-white drop-shadow-md sm:text-base">
          {label}
        </p>
      </div>
    </div>
  );
}
