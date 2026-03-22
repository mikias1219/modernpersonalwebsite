type SectionHeaderProps = {
  kicker: string;
  title: string;
  emphasis?: string;
  description: string;
};

export default function SectionHeader({
  kicker,
  title,
  emphasis,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300 sm:text-xs">
        {kicker}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-[2.75rem] md:leading-tight">
        {title}
        {emphasis ? (
          <>
            <span className="text-slate-300 dark:text-slate-500"> · </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">
              {emphasis}
            </span>
          </>
        ) : null}
      </h2>
      <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
