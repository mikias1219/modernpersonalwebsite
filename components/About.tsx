export default function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "BSc in Information Systems from Addis Ababa University",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: "💼",
      title: "Current Role",
      description: "AI & Data Science Professional at IE Network Solutions",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      icon: "☁️",
      title: "Certification",
      description: "Microsoft Certified: Azure Data Scientist Associate",
      gradient: "from-indigo-500 via-purple-500 to-violet-500",
      bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
    },
    {
      icon: "💻",
      title: "Expertise",
      description: "Full-Stack Developer (Python/Django, MERN, Next.js)",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
    },
  ];

  const aiHighlights = [
    { icon: "🧠", text: "Machine Learning & Deep Learning" },
    { icon: "📈", text: "Data Engineering & Analytics" },
    { icon: "🔬", text: "AI Research & Development" },
    { icon: "⚡", text: "Cloud AI Solutions" },
  ];

  return (
    <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-5xl sm:text-6xl animate-float">🤖</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Passionate about <span className="text-purple-600 dark:text-purple-400 font-bold">Machine Learning</span>, 
            <span className="text-blue-600 dark:text-blue-400 font-bold"> Deep Learning</span> & 
            <span className="text-pink-600 dark:text-pink-400 font-bold"> Data Engineering</span>
          </p>
        </div>

        {/* AI Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {aiHighlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-md border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-4xl sm:text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                {highlight.icon}
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 text-center">
                {highlight.text}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Glowing border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl sm:text-7xl mb-5 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {highlight.icon}
                </div>
                <h3 className={`text-2xl font-extrabold mb-4 bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {highlight.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  {highlight.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${highlight.gradient} opacity-20 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
