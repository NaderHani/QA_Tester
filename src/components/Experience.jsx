import React, { useMemo } from "react";

const Experience = () => {
  const experiences = useMemo(
    () => [
      {
        title: "Computer Science Graduate",
        company: "El Shorouk Academy",
        period: "2021 - 2025",
        icon: "fa-graduation-cap",
        color: "green",
        achievements: [
          "Bachelor's Degree in Computer Science with focus on Software Quality Assurance",
          "Applied ISTQB principles in comprehensive testing methodologies",
          "Developed and executed test strategies for complex software systems",
          "Collaborated on cross-functional teams to deliver high-quality software solutions",
        ],
      },
      {
        title: "Quality Assurance Specialist",
        company: "Academic & Professional Projects",
        period: "2024 - Present",
        icon: "fa-clipboard-check",
        color: "purple",
        achievements: [
          "Designed and implemented comprehensive test plans and strategies",
          "Conducted manual and functional testing across multiple platforms",
          "Identified and documented critical software defects and issues",
          "Collaborated with development teams to ensure product quality standards",
        ],
      },
      {
        title: "Frontend Development Consultant",
        company: "Independent Projects",
        period: "2023 - Present",
        icon: "fa-code",
        color: "red",
        achievements: [
          "Developed responsive web applications using modern JavaScript frameworks",
          "Implemented user-centric design principles and accessibility standards",
          "Optimized application performance and user experience",
          "Deployed production-ready applications with CI/CD pipelines",
        ],
      },
    ],
    []
  );

  const getColorClasses = (color) => {
    const colors = {
      green: {
        marker: "bg-neon-green border-neon-green/50 shadow-neon-green/50",
        border: "border-neon-green/20 hover:border-neon-green/50",
        text: "text-neon-green",
        badge: "text-neon-green border-neon-green/50 bg-neon-green/10",
        bullet: "bg-neon-green/20 border border-neon-green/50",
        gradient: "from-neon-green/10 to-transparent",
        glow: "shadow-[0_0_20px_rgba(0,255,157,0.3)]",
      },
      purple: {
        marker: "bg-neon-purple border-neon-purple/50 shadow-neon-purple/50",
        border: "border-neon-purple/20 hover:border-neon-purple/50",
        text: "text-neon-purple",
        badge: "text-neon-purple border-neon-purple/50 bg-neon-purple/10",
        bullet: "bg-neon-purple/20 border border-neon-purple/50",
        gradient: "from-neon-purple/10 to-transparent",
        glow: "shadow-[0_0_20px_rgba(138,43,226,0.3)]",
      },
      red: {
        marker: "bg-neon-red border-neon-red/50 shadow-neon-red/50",
        border: "border-neon-red/20 hover:border-neon-red/50",
        text: "text-neon-red",
        badge: "text-neon-red border-neon-red/50 bg-neon-red/10",
        bullet: "bg-neon-red/20 border border-neon-red/50",
        gradient: "from-neon-red/10 to-transparent",
        glow: "shadow-[0_0_20px_rgba(255,0,127,0.3)]",
      },
    };
    return colors[color] || colors.green;
  };

  return (
    <section
      id="experience"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
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
        <div className="section-header mb-16">
          <div className="inline-block">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-green via-neon-purple to-neon-red bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-neon-green via-neon-purple to-neon-red rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Comprehensive experience in software quality assurance, testing
            methodologies, and modern web development with a proven track record
            of delivering excellence
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Enhanced Timeline Line with Gradient */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-green via-neon-purple to-neon-red rounded-full opacity-60 blur-sm"></div>
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-purple to-neon-red"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);

              return (
                <div
                  key={index}
                  className="relative pl-14 sm:pl-20 lg:pl-24 animate-slide-up group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Enhanced Timeline Marker */}
                  <div
                    className={`absolute left-1.5 sm:left-3.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:rotate-12 ${colors.marker} ${colors.glow} backdrop-blur-sm z-10`}
                  >
                    <i
                      className={`fas ${exp.icon} text-white text-sm sm:text-base transition-transform duration-500 group-hover:scale-110`}
                    ></i>
                  </div>

                  {/* Enhanced Experience Card */}
                  <div
                    className={`relative bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border-2 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden ${colors.border} ${colors.glow}`}
                  >
                    {/* Decorative Gradient Overlay */}
                    <div
                      className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${colors.gradient} opacity-50 blur-2xl pointer-events-none`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className={`w-1 h-8 ${
                                colors.text === "text-neon-green"
                                  ? "bg-neon-green"
                                  : colors.text === "text-neon-purple"
                                  ? "bg-neon-purple"
                                  : "bg-neon-red"
                              } rounded-full`}
                            ></div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white transition-all duration-300 group-hover:translate-x-2">
                              {exp.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <i
                              className={`fas fa-building ${colors.text} text-sm`}
                            ></i>
                            <div
                              className={`text-lg sm:text-xl font-semibold ${colors.text}`}
                            >
                              {exp.company}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`flex items-center gap-2 font-bold text-sm sm:text-base px-5 py-2.5 rounded-full border-2 transition-all duration-500 hover:scale-110 hover:rotate-3 whitespace-nowrap ${colors.badge} backdrop-blur-sm`}
                        >
                          <i className="fas fa-calendar-alt"></i>
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div
                        className={`h-px bg-gradient-to-r ${
                          colors.text === "text-neon-green"
                            ? "from-neon-green/50"
                            : colors.text === "text-neon-purple"
                            ? "from-neon-purple/50"
                            : "from-neon-red/50"
                        } via-transparent to-transparent mb-6 opacity-50`}
                      ></div>

                      {/* Achievements */}
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-4 text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2"
                            style={{
                              animationDelay: `${
                                index * 150 + achIndex * 50
                              }ms`,
                            }}
                          >
                            <div
                              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-all duration-500 hover:scale-125 hover:rotate-180 ${colors.bullet} backdrop-blur-sm`}
                            >
                              <i
                                className={`fas fa-check text-xs ${colors.text}`}
                              ></i>
                            </div>
                            <span className="leading-relaxed font-medium text-base">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Decorative Corner Accent */}
                    <div
                      className={`absolute bottom-0 right-0 w-24 h-24 ${
                        colors.text === "text-neon-green"
                          ? "bg-neon-green"
                          : colors.text === "text-neon-purple"
                          ? "bg-neon-purple"
                          : "bg-neon-red"
                      } opacity-5 rounded-tl-full transition-opacity duration-500 group-hover:opacity-10`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Experience);
