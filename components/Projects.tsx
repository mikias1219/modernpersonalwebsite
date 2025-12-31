export default function Projects() {
  const projects = [
    {
      name: "Azure AI Engineer Projects",
      description: "Comprehensive Azure AI solutions including computer vision, NLP, and cognitive services. Demonstrates expertise in Azure AI services and cloud-based ML solutions.",
      tech: ["Python", "Azure", "AI/ML", "Computer Vision"],
      link: "https://github.com/mikias1219/AI-102-Exercise",
      highlight: "Azure Certified",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: "☁️",
    },
    {
      name: "Data Engineering Pipeline",
      description: "Scalable data pipeline for ETL processes, data transformation, and analytics. Built with best practices for production data workflows.",
      tech: ["Python", "Data Engineering", "ETL", "Analytics"],
      link: "https://github.com/mikias1219/Data_pipeline",
      highlight: "Production Ready",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      icon: "📊",
    },
    {
      name: "Bangla AI Customer Care",
      description: "AI-powered multilingual customer support system using NLP for Bangla language. Demonstrates advanced AI/NLP capabilities and language processing.",
      tech: ["Python", "AI", "NLP", "Machine Learning"],
      link: "https://github.com/mikias1219/bangla-ai-customer-care",
      highlight: "AI Innovation",
      gradient: "from-indigo-500 via-purple-500 to-violet-500",
      icon: "🤖",
    },
    {
      name: "Secure Auth System",
      description: "Enterprise-grade authentication system with role-based access control (RBAC), CRUD operations, and permission management. Full-stack security implementation.",
      tech: ["Vue.js", "Laravel", "PHP", "JWT", "RBAC"],
      link: "https://github.com/mikias1219/AuthenticationwithCrudandAssigningRoleandPermission",
      highlight: "Enterprise Security",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      icon: "🔐",
    },
    {
      name: "OKR Management System",
      description: "Objectives and Key Results (OKR) tracking platform for organizational goal management. Modern React/TypeScript application with real-time updates.",
      tech: ["TypeScript", "React", "Next.js", "State Management"],
      link: "https://github.com/mikias1219/okr-feature",
      highlight: "Business Application",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: "🎯",
    },
    {
      name: "HR Management System",
      description: "Enterprise organizational structure and employee information management system. Features hierarchical organization charts and employee data management.",
      tech: ["TypeScript", "React", "Data Visualization"],
      link: "https://github.com/mikias1219/organizational-structure-and-employee-information-frontend",
      highlight: "Enterprise Solution",
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      icon: "👥",
    },
  ];

  return (
    <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-l from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl sm:text-5xl animate-float">🚀</span>
            <span className="text-4xl sm:text-5xl animate-float" style={{ animationDelay: "1s" }}>💡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Showcasing <span className="text-purple-600 dark:text-purple-400 font-bold">AI Innovation</span> and 
            <span className="text-blue-600 dark:text-blue-400 font-bold"> Technical Excellence</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-md p-8 shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600 flex flex-col"
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 dark:group-hover:opacity-25 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 -z-10`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-3xl sm:text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {project.icon}
                    </span>
                    <h3 className={`text-lg sm:text-xl font-extrabold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {project.name}
                    </h3>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300 flex-shrink-0 transform group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125"
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
                
                {/* Highlight Badge */}
                {project.highlight && (
                  <span className={`inline-block mb-5 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs sm:text-sm font-bold w-fit shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {project.highlight}
                  </span>
                )}
                
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-10 dark:bg-opacity-20 text-gray-800 dark:text-gray-200 rounded-lg text-xs sm:text-sm font-semibold border border-transparent group-hover:border-opacity-50 transition-all duration-300 transform group-hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative corner with animation */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 rounded-bl-full transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-500`} />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://github.com/mikias1219?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-full font-bold text-lg sm:text-xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View All Projects on GitHub
              <svg
                className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform"
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
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
