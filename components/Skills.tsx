export default function Skills() {
  const skillCategories = [
    {
      category: "Backend",
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
      ],
    },
    {
      category: "Frontend",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Data & AI",
      icon: "🤖",
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Azure Data Science", level: 85 },
        { name: "Data Engineering", level: 85 },
        { name: "Machine Learning", level: 85 },
      ],
    },
    {
      category: "Database & Tools",
      icon: "🛠️",
      gradient: "from-green-500 to-emerald-500",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-bl-full`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
