import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/mikias1219",
      Icon: FaGithub,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mikiyas-abate",
      Icon: FaLinkedin,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Email",
      href: "mailto:mikiyasabate1219@gmail.com",
      Icon: HiMail,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Portfolio",
      href: "https://www.mikiasabate.tech",
      Icon: FaGlobe,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-purple-50/50 to-pink-50/50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 border-t-2 border-purple-200/50 dark:border-purple-800/50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold gradient-text mb-4 sm:mb-6">
              Mikias Abate
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium mb-3">
              🤖 AI & Data Science Professional
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              Full-Stack Developer | Azure Certified
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2">
              Transforming data into intelligent solutions
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-gray-900 dark:text-white mb-5 sm:mb-6 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="#about" className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                  <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">→</span>
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                  <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">→</span>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                  <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">→</span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                  <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-gray-900 dark:text-white mb-5 sm:mb-6 text-base sm:text-lg">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-2.5 sm:p-3 rounded-xl bg-gradient-to-r ${social.gradient} bg-opacity-10 dark:bg-opacity-20 hover:bg-opacity-20 dark:hover:bg-opacity-30 border border-transparent hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                  aria-label={social.name}
                >
                  {social.gradient.includes('purple') ? (
                    <social.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                  ) : social.gradient.includes('blue') ? (
                    <social.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  ) : social.gradient.includes('emerald') ? (
                    <social.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <social.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10`} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t-2 border-purple-200/50 dark:border-purple-800/50 text-center">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
            &copy; {currentYear} <span className="font-bold gradient-text">Mikias Abate</span>. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Built with <span className="text-purple-600 dark:text-purple-400 font-semibold">Next.js</span> & 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> Tailwind CSS</span> | 
            <span className="text-pink-600 dark:text-pink-400 font-semibold"> AI-Powered</span> Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
