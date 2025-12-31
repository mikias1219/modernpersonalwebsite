export default function Projects() {
  const projects = [
    {
      name: "Azure AI Engineer Projects",
      description: "Comprehensive Azure AI solutions including computer vision, NLP, and cognitive services. Demonstrates expertise in Azure AI services and cloud-based ML solutions.",
      tech: ["Python", "Azure", "AI/ML", "Computer Vision"],
      link: "https://github.com/mikias1219/AI-102-Exercise",
      highlight: "Azure Certified",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Data Engineering Pipeline",
      description: "Scalable data pipeline for ETL processes, data transformation, and analytics. Built with best practices for production data workflows.",
      tech: ["Python", "Data Engineering", "ETL", "Analytics"],
      link: "https://github.com/mikias1219/Data_pipeline",
      highlight: "Production Ready",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Bangla AI Customer Care",
      description: "AI-powered multilingual customer support system using NLP for Bangla language. Demonstrates advanced AI/NLP capabilities and language processing.",
      tech: ["Python", "AI", "NLP", "Machine Learning"],
      link: "https://github.com/mikias1219/bangla-ai-customer-care",
      highlight: "AI Innovation",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Secure Auth System",
      description: "Enterprise-grade authentication system with role-based access control (RBAC), CRUD operations, and permission management. Full-stack security implementation.",
      tech: ["Vue.js", "Laravel", "PHP", "JWT", "RBAC"],
      link: "https://github.com/mikias1219/AuthenticationwithCrudandAssigningRoleandPermission",
      highlight: "Enterprise Security",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "OKR Management System",
      description: "Objectives and Key Results (OKR) tracking platform for organizational goal management. Modern React/TypeScript application with real-time updates.",
      tech: ["TypeScript", "React", "Next.js", "State Management"],
      link: "https://github.com/mikias1219/okr-feature",
      highlight: "Business Application",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "HR Management System",
      description: "Enterprise organizational structure and employee information management system. Features hierarchical organization charts and employee data management.",
      tech: ["TypeScript", "React", "Data Visualization"],
      link: "https://github.com/mikias1219/organizational-structure-and-employee-information-frontend",
      highlight: "Enterprise Solution",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 flex-1 pr-2">
                    {project.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300 flex-shrink-0 transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
                
                {project.highlight && (
                  <span className={`inline-block mb-4 px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-bold w-fit border border-transparent group-hover:border-opacity-20 transition-all duration-300`}>
                    {project.highlight}
                  </span>
                )}
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700 group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full`} />
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/mikias1219?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Projects on GitHub
            <svg
              className="w-5 h-5 ml-2"
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
          </a>
        </div>
      </div>
    </div>
  );
}
