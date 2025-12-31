export default function Certifications() {
  const certifications = [
    {
      provider: "Microsoft",
      items: [
        {
          name: "Azure Data Scientist Associate",
          issued: "Jun 2025",
          expires: "Jun 2026",
          credentialId: "E13F0127DECF94B4",
        },
      ],
    },
    {
      provider: "DataCamp",
      items: [
        {
          name: "Data Engineer — Professional",
          issued: "Sep 2025",
          expires: "Sep 2027",
          credentialId: "DE0012274611368",
        },
        {
          name: "AI Engineer for Data Scientists — Associate",
          issued: "Aug 2025",
          expires: "Aug 2027",
          credentialId: "AEDS0019404147147",
        },
        {
          name: "AI Engineer for Developers — Associate",
          issued: "Aug 2025",
          expires: "Aug 2027",
          credentialId: "AIEDA0015379738598",
        },
        {
          name: "Data Engineer — Associate",
          issued: "Aug 2025",
          expires: "Aug 2027",
          credentialId: "DEA0012533890898",
        },
      ],
    },
    {
      provider: "Skillsoft",
      items: [
        {
          name: "Fundamentals of AI & ML: Introduction to Artificial Intelligence",
          issued: "Mar 2025",
          expires: null,
          credentialId: "13656141",
        },
      ],
    },
    {
      provider: "Udacity",
      items: [
        {
          name: "Data Analysis Fundamentals",
          issued: "Aug 2024",
          expires: null,
          credentialId: null,
        },
      ],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((provider, providerIndex) => (
            <div key={providerIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🎓</span>
                {provider.provider}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {provider.items.map((cert, certIndex) => (
                  <div
                    key={certIndex}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-purple-100 dark:border-gray-600 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {cert.name}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>
                        <span className="font-medium">Issued:</span> {cert.issued}
                      </p>
                      {cert.expires && (
                        <p>
                          <span className="font-medium">Expires:</span> {cert.expires}
                        </p>
                      )}
                      {cert.credentialId && (
                        <p>
                          <span className="font-medium">Credential ID:</span>{" "}
                          <span className="font-mono text-xs">{cert.credentialId}</span>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

