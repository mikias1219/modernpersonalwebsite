export default function Skills() {
  const skillCategories = [
    {
      category: "Backend",
      icon: "⚙️",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
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
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
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
      gradient: "from-indigo-500 via-purple-500 to-violet-500",
      bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
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
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
      ],
    },
  ];

  return (
    <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-purple-50/50 to-pink-50/50 dark:from-gray-800 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl sm:text-5xl animate-float">💻</span>
            <span className="text-4xl sm:text-5xl animate-float" style={{ animationDelay: "1s" }}>🚀</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">Core </span>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Technologies and tools I use to build <span className="text-purple-600 dark:text-purple-400 font-bold">intelligent solutions</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-md p-8 sm:p-10 shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600"
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`} />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-3xl sm:text-4xl mr-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {category.icon}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/item">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-800 dark:text-gray-200 font-bold text-base sm:text-lg">
                          {skill.name}
                        </span>
                        <span className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${category.gradient} text-white font-bold text-sm sm:text-base shadow-lg`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                        <div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-lg group-hover:shadow-xl`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                          <div className={`absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-r ${category.gradient} opacity-50 blur-sm`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative corner with animation */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-20 rounded-bl-full transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
