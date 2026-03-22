import SectionHeader from "./SectionHeader";

export default function About() {
  const pillars = [
    {
      title: "Education",
      body: "BSc in Information Systems, Addis Ababa University",
    },
    {
      title: "Role",
      body: "AI and Data Science at IE Network Solutions",
    },
    {
      title: "Certification",
      body: "Microsoft Certified: Azure Data Scientist Associate",
    },
    {
      title: "Stack",
      body: "Python, Django, Node, React, Next.js, cloud and data tooling",
    },
  ];

  const focus = [
    "Machine learning and deep learning",
    "Data engineering and analytics",
    "AI R&D and applied systems",
    "Cloud-native AI delivery",
  ];

  return (
    <section
      id="about"
      className="section-alt border-t border-slate-200 px-4 py-20 dark:border-slate-700 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Profile"
          title="About"
          emphasis="me"
          description="I design and ship data-heavy and AI-driven products—bridging research intuition with production-ready software. For recruiters: Azure-certified data science background, full-stack delivery, and clear written communication."
        />

        <div className="mb-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm dark:border-slate-600 dark:bg-slate-900/80"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                {p.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-600 dark:bg-slate-900/80 sm:p-10">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Focus areas
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {focus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
