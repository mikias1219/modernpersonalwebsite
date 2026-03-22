import SectionHeader from "./SectionHeader";

export default function Certifications() {
  const allCertifications = [
    {
      name: "Azure Data Scientist Associate",
      provider: "Microsoft",
      issued: "Jun 2025",
      expires: "Jun 2026",
      credentialId: "E13F0127DECF94B4",
    },
    {
      name: "Data Engineer — Professional",
      provider: "DataCamp",
      issued: "Sep 2025",
      expires: "Sep 2027",
      credentialId: "DE0012274611368",
    },
    {
      name: "AI Engineer for Data Scientists — Associate",
      provider: "DataCamp",
      issued: "Aug 2025",
      expires: "Aug 2027",
      credentialId: "AEDS0019404147147",
    },
    {
      name: "AI Engineer for Developers — Associate",
      provider: "DataCamp",
      issued: "Aug 2025",
      expires: "Aug 2027",
      credentialId: "AIEDA0015379738598",
    },
    {
      name: "Data Engineer — Associate",
      provider: "DataCamp",
      issued: "Aug 2025",
      expires: "Aug 2027",
      credentialId: "DEA0012533890898",
    },
    {
      name: "Fundamentals of AI and ML: Introduction to Artificial Intelligence",
      provider: "Skillsoft",
      issued: "Mar 2025",
      expires: null,
      credentialId: "13656141",
    },
    {
      name: "Data Analysis Fundamentals",
      provider: "Udacity",
      issued: "Aug 2024",
      expires: null,
      credentialId: null,
    },
  ];

  return (
    <section
      id="certifications"
      className="section-alt border-t border-slate-200 px-4 py-20 dark:border-slate-700 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Credentials"
          title="Licenses"
          emphasis="and certifications"
          description="Formal training and cloud credentials that back hands-on delivery."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allCertifications.map((cert) => (
            <article
              key={cert.name + cert.issued}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 dark:border-slate-600 dark:bg-slate-900/80 dark:hover:border-slate-500"
            >
              <span className="inline-flex w-fit rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {cert.provider}
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-slate-900 dark:text-white">
                {cert.name}
              </h3>
              <dl className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex justify-between gap-2">
                  <dt className="text-slate-500 dark:text-slate-500">Issued</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200">{cert.issued}</dd>
                </div>
                {cert.expires ? (
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-500 dark:text-slate-500">Expires</dt>
                    <dd className="font-medium text-slate-800 dark:text-slate-200">{cert.expires}</dd>
                  </div>
                ) : null}
                {cert.credentialId ? (
                  <div className="border-t border-slate-100 pt-3 dark:border-slate-800">
                    <dt className="text-slate-500 dark:text-slate-500">Credential ID</dt>
                    <dd className="mt-1 break-all font-mono text-xs text-slate-700 dark:text-slate-300">
                      {cert.credentialId}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
