import React, { useMemo, useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stats = useMemo(
    () => [
      {
        icon: "fas fa-check-circle",
        number: "100+",
        label: "Test Cases",
        color: "text-neon-green",
        glow: "glow-text",
        bgGradient: "from-neon-green/20 to-neon-green/5",
      },
      {
        icon: "fas fa-code-branch",
        number: "10+",
        label: "Projects",
        color: "text-neon-purple",
        glow: "glow-purple",
        bgGradient: "from-neon-purple/20 to-neon-purple/5",
      },
      {
        icon: "fas fa-award",
        number: "2025",
        label: "Graduate",
        color: "text-neon-red",
        glow: "glow-red",
        bgGradient: "from-neon-red/20 to-neon-red/5",
      },
    ],
    []
  );

  const expertise = useMemo(
    () => [
      {
        icon: "fas fa-bug",
        title: "Manual & Functional Testing",
        description:
          "Expert in STLC & SDLC with comprehensive manual and functional testing strategies",
        tags: [
          "Manual Testing",
          "Functional Testing",
          "Regression Testing",
          "UAT",
        ],
        color: "neon-green",
      },
      {
        icon: "fas fa-tools",
        title: "Testing Tools & Frameworks",
        description:
          "Proficient in industry-standard testing tools and automation frameworks",
        tags: ["Selenium", "Postman", "JIRA", "TestNG", "JUnit"],
        color: "neon-purple",
      },
      {
        icon: "fas fa-clipboard-check",
        title: "Test Documentation & Reporting",
        description:
          "Creating detailed test cases, test plans, and comprehensive bug reports",
        tags: ["Test Cases", "Bug Reports", "Test Plans", "Documentation"],
        color: "neon-red",
      },
    ],
    []
  );

  return (
    <section id="about" className="py-20 dark-section relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-neon-red/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div
          className={`section-header transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-white mb-2">About Me</h2>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-neon-green/20 via-neon-purple/20 to-neon-red/20 rounded-full border border-neon-green/30 mb-4">
            <p className="text-neon-green text-sm font-semibold tracking-wide">
              🎯 Software Tester & QA Engineer
            </p>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Passionate about delivering high-quality software through
            comprehensive testing strategies and modern development practices
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`}
              ></div>
              <div className="relative card-dark rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-700/50 hover:border-${stat.color}/50">
                <i
                  className={`${stat.icon} text-4xl ${stat.color} ${stat.glow} mb-3 block transform group-hover:scale-110 transition-transform duration-300`}
                ></i>
                <h3
                  className={`text-3xl sm:text-4xl font-bold ${stat.color} ${stat.glow} mb-1`}
                >
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image & Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Profile Image */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-green via-neon-purple to-neon-red rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-[1.02]">
                <img
                  src="profile-image.jpg"
                  alt="Nader Hani Ali - Software Tester & QA"
                  className="w-full h-auto aspect-square object-cover transition-all duration-700 group-hover:brightness-110"
                  loading="lazy"
                  onError={(e) => {
                    console.error("Failed to load profile image");
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full aspect-square bg-gradient-to-br from-gray-800 to-black flex flex-col items-center justify-center text-gray-300"
                  style={{ display: "none" }}
                >
                  <i className="fas fa-user-tie text-8xl mb-6 text-neon-green animate-pulse glow-text"></i>
                  <p className="text-2xl font-bold text-center text-white glow-text mb-2">
                    Nader Hani Ali
                  </p>
                  <p className="text-sm text-gray-400 px-8 text-center">
                    Save your photo as 'profile-image.jpg' in public folder
                  </p>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-6 mb-6 justify-center">
                      <i className="fas fa-code text-4xl text-neon-green glow-text"></i>
                      <i className="fas fa-bug text-4xl text-neon-purple glow-purple"></i>
                      <i className="fas fa-laptop-code text-4xl text-neon-red glow-red"></i>
                    </div>
                    <p className="text-white font-bold text-2xl text-center tracking-wide">
                      QA & Testing Expert
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Orb */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-neon-green rounded-full blur-md animate-float opacity-60"></div>
            </div>

            {/* Education Badge */}
            <div className="card-dark rounded-xl p-6 border border-neon-green/30 hover:border-neon-green/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-neon-green/10 p-4 rounded-xl">
                  <i className="fas fa-graduation-cap text-3xl text-neon-green glow-text"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-2">
                    Education
                  </h4>
                  <p className="text-neon-green font-semibold mb-1">
                    Computer Science Graduate
                  </p>
                  <p className="text-gray-400 text-sm">
                    El Shorouk Academy • Class of 2025
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs rounded-full border border-neon-green/30">
                      Software Engineering
                    </span>
                    <span className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs rounded-full border border-neon-green/30">
                      Quality Assurance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Expertise Cards */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Professional{" "}
              <span className="text-neon-green glow-text">Expertise</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Detail-oriented QA Specialist with expertise in
              <span className="text-neon-purple font-semibold">
                {" "}
                Manual & Functional Testing
              </span>
              , proficient in
              <span className="text-neon-green font-semibold">
                {" "}
                STLC & SDLC methodologies
              </span>
              . I excel at creating comprehensive test cases, identifying
              critical bugs, and utilizing industry-standard testing tools like
              <span className="text-neon-red font-semibold">
                {" "}
                Selenium, Postman, and JIRA
              </span>{" "}
              to ensure high-quality software delivery.
            </p>

            {/* Expertise Cards */}
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-${item.color}/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}
                  ></div>
                  <div className="relative card-dark rounded-xl p-6 border border-gray-700/50 hover:border-${item.color}/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`bg-${item.color}/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i
                          className={`${item.icon} text-2xl text-${
                            item.color
                          } ${
                            item.color === "neon-green"
                              ? "glow-text"
                              : item.color === "neon-purple"
                              ? "glow-purple"
                              : "glow-red"
                          }`}
                        ></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-${item.color} transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 bg-${item.color}/10 text-${item.color} text-xs rounded-full border border-${item.color}/30 hover:bg-${item.color}/20 transition-all duration-300 cursor-default`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-neon-green/10 via-neon-purple/10 to-neon-red/10 rounded-xl border border-neon-green/30 backdrop-blur-sm">
              <p className="text-gray-300 text-center leading-relaxed">
                <i className="fas fa-rocket text-neon-green mr-2"></i>
                Ready to contribute my analytical skills in designing and
                executing test cases to deliver{" "}
                <span className="text-white font-semibold">
                  high-quality software products
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
