export default function Certifications() {
  // Flatten all certifications into a single array
  const allCertifications = [
    {
      name: "Azure Data Scientist Associate",
      provider: "Microsoft",
      icon: "☁️",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      issued: "Jun 2025",
      expires: "Jun 2026",
      credentialId: "E13F0127DECF94B4",
    },
    {
      name: "Data Engineer — Professional",
      provider: "DataCamp",
      icon: "📊",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      issued: "Sep 2025",
      expires: "Sep 2027",
      credentialId: "DE0012274611368",
    },
    {
      name: "AI Engineer for Data Scientists — Associate",
      provider: "DataCamp",
      icon: "📊",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      issued: "Aug 2025",
      expires: "Aug 2027",
      credentialId: "AEDS0019404147147",
    },
    {
      name: "AI Engineer for Developers — Associate",
      provider: "DataCamp",
      icon: "📊",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      issued: "Aug 2025",
      expires: "Aug 2027",
      credentialId: "AIEDA0015379738598",
    },
    {
      name: "Data Engineer — Associate",
      provider: "DataCamp",
      icon: "📊",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      issued: "Aug 2025",
      expires: "Aug 2027",
      credentialId: "DEA0012533890898",
    },
    {
      name: "Fundamentals of AI & ML: Introduction to Artificial Intelligence",
      provider: "Skillsoft",
      icon: "🎯",
      gradient: "from-indigo-500 via-purple-500 to-violet-500",
      issued: "Mar 2025",
      expires: null,
      credentialId: "13656141",
    },
    {
      name: "Data Analysis Fundamentals",
      provider: "Udacity",
      icon: "🚀",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      issued: "Aug 2024",
      expires: null,
      credentialId: null,
    },
  ];

  return (
    <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-l from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-4xl sm:text-5xl animate-float">🏆</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">Licenses & </span>
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Professional <span className="text-purple-600 dark:text-purple-400 font-bold">AI & Data Science</span> certifications
          </p>
        </div>

        {/* Single unified grid for all certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allCertifications.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-md p-8 shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600"
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-15 dark:group-hover:opacity-25 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 -z-10`} />
              
              <div className="relative z-10">
                {/* Provider Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {cert.icon}
                  </span>
                  <span className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r ${cert.gradient} bg-opacity-10 dark:bg-opacity-20 text-xs font-bold text-gray-700 dark:text-gray-300`}>
                    {cert.provider}
                  </span>
                </div>

                {/* Certified Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${cert.gradient} text-white text-xs sm:text-sm font-bold mb-5 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certified
                </div>
                
                <h4 className={`text-lg sm:text-xl font-extrabold mb-5 leading-tight bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {cert.name}
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.gradient} bg-opacity-10 dark:bg-opacity-20 mr-3`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold">Issued:</span>
                      <span className="ml-2">{cert.issued}</span>
                    </div>
                  </div>
                  {cert.expires && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.gradient} bg-opacity-10 dark:bg-opacity-20 mr-3`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Expires:</span>
                        <span className="ml-2">{cert.expires}</span>
                      </div>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="flex items-start text-gray-700 dark:text-gray-300 pt-3 border-t-2 border-gray-200 dark:border-gray-700">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.gradient} bg-opacity-10 dark:bg-opacity-20 mr-3 flex-shrink-0`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold">Credential ID:</span>
                        <span className="ml-2 font-mono text-xs break-all bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative corner with animation */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.gradient} opacity-20 rounded-bl-full transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-500`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
