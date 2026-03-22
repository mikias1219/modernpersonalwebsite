import SectionHeader from "./SectionHeader";

export default function Skills() {
  const skillCategories = [
    {
      category: "Backend",
      accent: "from-sky-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
      ],
    },
    {
      category: "Frontend",
      accent: "from-violet-500 to-fuchsia-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Data and AI",
      accent: "from-indigo-500 to-purple-500",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Azure Data Science", level: 85 },
        { name: "Data Engineering", level: 85 },
        { name: "Machine Learning", level: 85 },
      ],
    },
    {
      category: "Data and tooling",
      accent: "from-emerald-500 to-teal-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="border-t border-slate-200 bg-white px-4 py-20 dark:border-slate-700 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Capabilities"
          title="Core"
          emphasis="technologies"
          description="Tools I use to design, train, deploy, and operate software at scale."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 dark:border-slate-600 dark:bg-slate-900/70"
            >
              <h3
                className={`mb-6 inline-block bg-gradient-to-r ${cat.accent} bg-clip-text text-xl font-semibold tracking-tight text-transparent`}
              >
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs tabular-nums text-slate-600 dark:text-slate-300">
                        {skill.level}%
                      </span>
                    </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.accent} transition-[width] duration-700`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
