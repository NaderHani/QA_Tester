import React, { useMemo } from "react";

const Footer = () => {
  const footerLinks = useMemo(
    () => [
      { id: "home", label: "Home", icon: "fas fa-home" },
      { id: "about", label: "About", icon: "fas fa-user" },
      { id: "skills", label: "Skills", icon: "fas fa-code" },
      { id: "projects", label: "Projects", icon: "fas fa-project-diagram" },
      { id: "experience", label: "Experience", icon: "fas fa-briefcase" },
      { id: "contact", label: "Contact", icon: "fas fa-envelope" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        icon: "fab fa-linkedin",
        url: "https://linkedin.com/in/naderhani2302",
        title: "LinkedIn Profile",
        label: "LinkedIn",
        color: "hover:bg-blue-600",
      },
      {
        icon: "fab fa-github",
        url: "https://github.com/NaderHani",
        title: "GitHub Profile",
        label: "GitHub",
        color: "hover:bg-gray-600",
      },
      {
        icon: "fas fa-envelope",
        url: "mailto:Naderhani456@gmail.com",
        title: "Email Contact",
        label: "Email",
        color: "hover:bg-accent",
      },
    ],
    []
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="group mb-6">
                <div className="flex items-center gap-3 text-accent font-bold text-2xl mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  <div className="relative">
                    <i className="fas fa-bug text-3xl"></i>
                    <div className="absolute inset-0 bg-accent blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                    Nader Hani Ali
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Computer Science graduate specializing in{" "}
                <span className="text-accent font-semibold">
                  Quality Assurance
                </span>{" "}
                and{" "}
                <span className="text-accent font-semibold">
                  Software Testing
                </span>
                . Passionate about delivering high-quality software through
                comprehensive testing methodologies and modern development
                practices.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <i className="fas fa-map-marker-alt text-accent"></i>
                  <span className="text-sm text-gray-300">Egypt</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <i className="fas fa-graduation-cap text-accent"></i>
                  <span className="text-sm text-gray-300">
                    Computer Science
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <i className="fas fa-shield-alt text-accent"></i>
                  <span className="text-sm text-gray-300">QA Specialist</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 relative inline-block">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent rounded-full"></div>
              </h4>
              <nav className="space-y-3">
                {footerLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center gap-3 text-gray-300 hover:text-accent transition-all duration-300 w-full text-left"
                  >
                    <i
                      className={`${link.icon} text-accent w-5 group-hover:scale-110 transition-transform`}
                    ></i>
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="text-xl font-bold mb-6 relative inline-block">
                Connect With Me
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent rounded-full"></div>
              </h4>
              <p className="text-gray-400 mb-6 text-sm">
                Let's collaborate and build something amazing together!
              </p>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    title={social.title}
                    target={
                      social.url.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg backdrop-blur-sm transition-all duration-300 ${social.color} hover:translate-x-2 hover:shadow-lg`}
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-transparent transition-colors duration-300 group-hover:scale-110">
                      <i className={`${social.icon} text-xl`}></i>
                    </div>
                    <span className="font-medium">{social.label}</span>
                    <i className="fas fa-arrow-right ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 backdrop-blur-sm">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()}{" "}
                <span className="text-accent font-semibold">
                  Nader Hani Ali
                </span>{" "}
                - Software Tester & QA Engineer. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="flex items-center gap-2 hover:text-accent transition-colors duration-300 group"
                >
                  <span>Back to Top</span>
                  <i className="fas fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
                </button>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Made with ❤️ and React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
