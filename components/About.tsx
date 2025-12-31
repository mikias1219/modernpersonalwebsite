export default function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "BSc in Information Systems from Addis Ababa University",
    },
    {
      icon: "💼",
      title: "Current Role",
      description: "AI & Data Science Professional at IE Network Solutions",
    },
    {
      icon: "☁️",
      title: "Certification",
      description: "Microsoft Certified: Azure Data Scientist Associate",
    },
    {
      icon: "💻",
      title: "Expertise",
      description: "Full-Stack Developer (Python/Django, MERN, Next.js)",
    },
  ];

  const focusAreas = [
    "🔭 Building high-performance Django & Node.js backends",
    "📈 Advanced Data Engineering & ML pipelines",
    "👨‍💻 Full-stack development with Next.js 15",
    "🔐 Learning network security fundamentals",
    "🧪 Developing AI-powered business solutions",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-purple-100 dark:border-gray-600 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Current Focus
          </h3>
          <ul className="space-y-4">
            {focusAreas.map((area, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 flex items-start"
              >
                <span className="mr-3">{area.split(" ")[0]}</span>
                <span>{area.substring(area.indexOf(" ") + 1)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

