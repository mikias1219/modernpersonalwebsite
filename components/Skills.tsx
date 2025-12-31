export default function Skills() {
  const skillCategories = [
    {
      category: "Backend",
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Data & AI",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Azure Data Science", level: 85 },
        { name: "Data Engineering", level: 85 },
        { name: "Machine Learning", level: 85 },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
      ],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Core <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
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
    </div>
  );
}

