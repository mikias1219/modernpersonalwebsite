"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        alert("Thank you for your message! I'll get back to you soon.");
      } else {
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      Icon: HiMail,
      label: "Email",
      value: "mikiyasabate1219@gmail.com",
      link: "mailto:mikiyasabate1219@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      value: "mikiyas-abate",
      link: "https://www.linkedin.com/in/mikiyas-abate",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      Icon: FaGithub,
      label: "GitHub",
      value: "mikias1219",
      link: "https://github.com/mikias1219",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      Icon: FaGlobe,
      label: "Portfolio",
      value: "mikiasabate.tech",
      link: "https://www.mikiasabate.tech",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-pink-50/30 to-purple-50/30 dark:from-gray-900 dark:via-pink-900/10 dark:to-purple-900/10 overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-l from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-4xl sm:text-5xl animate-float">📬</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Let&apos;s collaborate on <span className="text-purple-600 dark:text-purple-400 font-bold">AI & Data Science</span> projects!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Contact <span className="gradient-text">Information</span>
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center space-x-5 p-6 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-md border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${method.gradient} bg-opacity-10 dark:bg-opacity-20 group-hover:bg-opacity-20 dark:group-hover:bg-opacity-30 transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-12`}>
                    {method.gradient.includes('blue') ? (
                      <method.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                    ) : method.gradient.includes('purple') ? (
                      <method.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                    ) : (
                      <method.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>
                  <div className="relative z-10 flex-1">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{method.label}</p>
                    <p className={`text-lg font-bold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}>
                      {method.value}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transform group-hover:translate-x-2 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-blue-500/20 backdrop-blur-md border-2 border-purple-200/50 dark:border-purple-700/50">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-3xl sm:text-4xl">📍</span>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Location</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Send a <span className="gradient-text">Message</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500 dark:focus:border-purple-400 transition-all shadow-lg hover:shadow-xl"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500 dark:focus:border-purple-400 transition-all shadow-lg hover:shadow-xl"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500 dark:focus:border-purple-400 transition-all resize-none shadow-lg hover:shadow-xl"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl font-bold text-lg sm:text-xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
