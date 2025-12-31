export default function Certifications() {
  const certifications = [
    {
      provider: "Microsoft",
      icon: "☁️",
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
      icon: "📊",
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
      icon: "🎯",
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
      icon: "🚀",
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
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {certifications.map((provider, providerIndex) => (
            <div key={providerIndex} className="mb-8 sm:mb-10">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl mr-3 sm:mr-4">{provider.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {provider.provider}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {provider.items.map((cert, certIndex) => (
                  <div
                    key={certIndex}
                    className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
                    
                    <div className="relative z-10">
                      {/* Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-4">
                        Certified
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                        {cert.name}
                      </h4>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">Issued:</span>
                          <span className="ml-2">{cert.issued}</span>
                        </div>
                        {cert.expires && (
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">Expires:</span>
                            <span className="ml-2">{cert.expires}</span>
                          </div>
                        )}
                        {cert.credentialId && (
                          <div className="flex items-start text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                            <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                            <div>
                              <span className="font-medium">ID:</span>
                              <span className="ml-2 font-mono text-xs break-all">{cert.credentialId}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-bl-full" />
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
