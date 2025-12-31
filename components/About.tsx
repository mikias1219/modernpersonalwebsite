export default function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "BSc in Information Systems from Addis Ababa University",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💼",
      title: "Current Role",
      description: "AI & Data Science Professional at IE Network Solutions",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "☁️",
      title: "Certification",
      description: "Microsoft Certified: Azure Data Scientist Associate",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: "💻",
      title: "Expertise",
      description: "Full-Stack Developer (Python/Django, MERN, Next.js)",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about Machine Learning, Deep Learning & Data Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${highlight.gradient} opacity-10 rounded-bl-full`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
