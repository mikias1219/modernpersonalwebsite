import SectionHeader from "./SectionHeader";
import ProjectCover from "./ProjectCover";

type Pattern = "grid" | "dots" | "diagonal";

const projects: {
  name: string;
  coverLabel: string;
  coverGradient: string;
  pattern: Pattern;
  description: string;
  tech: string[];
  link: string;
  highlight: string;
  accent: string;
}[] = [
  {
    name: "OKDE SaaS — RAG and AI Agents",
    coverLabel: "OKDE · RAG & AI agents",
    coverGradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    pattern: "grid",
    description:
      "Multi-tenant B2B SaaS for operational knowledge: RAG, workflows, and AI agents. Express and Next.js, Prisma, Azure, Terraform, Docker, CI/CD.",
    tech: ["TypeScript", "Next.js", "Express", "Prisma", "Azure", "RAG"],
    link: "https://github.com/mikias1219/RAG",
    highlight: "Full-stack AI SaaS",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Bangla AI Customer Care",
    coverLabel: "BanglaChatPro · NLP",
    coverGradient: "from-indigo-600 via-violet-600 to-purple-700",
    pattern: "dots",
    description:
      "BanglaChatPro: NLU, speech and TTS, dialogue management, human handoff, messaging channels, e-commerce flows, and admin analytics.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "Redis", "NLP"],
    link: "https://github.com/mikias1219/bangla-ai-customer-care",
    highlight: "Multilingual AI",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    name: "MusicApp — full stack",
    coverLabel: "Music API · real-time",
    coverGradient: "from-rose-600 via-orange-500 to-amber-500",
    pattern: "diagonal",
    description:
      "React, TypeScript, Vite, Express, MongoDB, and WebSocket updates—typed APIs and responsive UI.",
    tech: ["TypeScript", "React", "Vite", "Express", "MongoDB"],
    link: "https://github.com/mikias1219/MusicApp",
    highlight: "Real-time API",
    accent: "from-rose-500 to-orange-500",
  },
  {
    name: "Data engineering pipeline",
    coverLabel: "ETL · analytics",
    coverGradient: "from-purple-600 via-fuchsia-600 to-pink-600",
    pattern: "grid",
    description:
      "ETL-oriented workflows for ingestion, transformation, and analytics with a production mindset.",
    tech: ["Python", "ETL", "Data Engineering", "Analytics"],
    link: "https://github.com/mikias1219/Data_pipeline",
    highlight: "Data pipelines",
    accent: "from-purple-500 to-pink-500",
  },
  {
    name: "Azure AI engineer labs",
    coverLabel: "Azure AI · cognitive",
    coverGradient: "from-sky-600 via-cyan-500 to-teal-600",
    pattern: "dots",
    description:
      "Azure AI workloads aligned with AI-102 style skills: cognitive services, language, and vision.",
    tech: ["Python", "Azure", "AI Services", "ML"],
    link: "https://github.com/mikias1219/AI-102-Exercise",
    highlight: "Azure certified",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    name: "Auth, RBAC & CRUD — Vue + Laravel",
    coverLabel: "Enterprise security",
    coverGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    pattern: "diagonal",
    description:
      "Full-stack auth with role-based access, permissions, and CRUD workflows—Vue.js and Laravel with JWT-focused API patterns.",
    tech: ["Vue.js", "Laravel", "PHP", "JWT", "RBAC"],
    link: "https://github.com/mikias1219/AuthenticationwithCrudandAssigningRoleandPermission",
    highlight: "Enterprise auth",
    accent: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-white px-4 py-20 dark:border-slate-700 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Selected work"
          title="Featured"
          emphasis="projects"
          description="Representative builds across AI systems, data engineering, and full-stack delivery—each card links to the GitHub repository."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm ring-0 transition active:scale-[0.99] hover:-translate-y-1 hover:border-teal-300/80 hover:shadow-lg dark:border-slate-600 dark:bg-slate-900/85 dark:hover:border-teal-500/40"
            >
              <ProjectCover
                label={project.coverLabel}
                gradient={project.coverGradient}
                pattern={project.pattern}
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900 dark:text-slate-50">
                    {project.name}
                  </h3>
                  <svg
                    className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-700 dark:text-slate-400 dark:group-hover:text-teal-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <span
                  className={`mt-3 inline-flex w-fit rounded-lg bg-gradient-to-r ${project.accent} px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white`}
                >
                  {project.highlight}
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/mikias1219?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 min-w-[12rem] items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99] dark:border-slate-500 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
          >
            All repositories on GitHub
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
