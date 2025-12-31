export default function Projects() {
  const projects = [
    {
      name: "Azure AI Engineer Projects",
      description: "Comprehensive Azure AI solutions including computer vision, NLP, and cognitive services. Demonstrates expertise in Azure AI services and cloud-based ML solutions.",
      tech: ["Python", "Azure", "AI/ML", "Computer Vision"],
      link: "https://github.com/mikias1219/AI-102-Exercise",
      featured: true,
      highlight: "Azure Certified",
    },
    {
      name: "Data Engineering Pipeline",
      description: "Scalable data pipeline for ETL processes, data transformation, and analytics. Built with best practices for production data workflows.",
      tech: ["Python", "Data Engineering", "ETL", "Analytics"],
      link: "https://github.com/mikias1219/Data_pipeline",
      featured: true,
      highlight: "Production Ready",
    },
    {
      name: "Bangla AI Customer Care",
      description: "AI-powered multilingual customer support system using NLP for Bangla language. Demonstrates advanced AI/NLP capabilities and language processing.",
      tech: ["Python", "AI", "NLP", "Machine Learning"],
      link: "https://github.com/mikias1219/bangla-ai-customer-care",
      featured: true,
      highlight: "AI Innovation",
    },
    {
      name: "Secure Auth System",
      description: "Enterprise-grade authentication system with role-based access control (RBAC), CRUD operations, and permission management. Full-stack security implementation.",
      tech: ["Vue.js", "Laravel", "PHP", "JWT", "RBAC"],
      link: "https://github.com/mikias1219/AuthenticationwithCrudandAssigningRoleandPermission",
      featured: true,
      highlight: "Enterprise Security",
    },
    {
      name: "OKR Management System",
      description: "Objectives and Key Results (OKR) tracking platform for organizational goal management. Modern React/TypeScript application with real-time updates.",
      tech: ["TypeScript", "React", "Next.js", "State Management"],
      link: "https://github.com/mikias1219/okr-feature",
      featured: true,
      highlight: "Business Application",
    },
    {
      name: "HR Management System",
      description: "Enterprise organizational structure and employee information management system. Features hierarchical organization charts and employee data management.",
      tech: ["TypeScript", "React", "Data Visualization"],
      link: "https://github.com/mikias1219/organizational-structure-and-employee-information-frontend",
      featured: true,
      highlight: "Enterprise Solution",
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
            A selection of projects I&apos;ve worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-1">
                  {project.name}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0 ml-2"
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
                <span className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold w-fit">
                  {project.highlight}
                </span>
              )}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/mikias1219?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300"
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

