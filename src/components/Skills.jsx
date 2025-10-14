import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useState,
} from "react";

/**
 * Skills Component - Displays technical expertise with animated progress bars
 * Features professional animations, accessibility, and responsive design
 */
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillBarsRef = useRef([]);
  const sectionRef = useRef(null);

  // Skill categories with enhanced data structure
  const skillCategories = useMemo(
    () => [
      {
        id: "qa-testing",
        icon: "fas fa-flask",
        title: "QA & Testing Skills",
        description: "Comprehensive quality assurance and testing expertise",
        skills: [
          { name: "Manual Testing", level: "90%", years: "4+" },
          { name: "Functional Testing", level: "88%", years: "4+" },
          { name: "Usability Testing", level: "85%", years: "3+" },
          { name: "Regression Testing", level: "87%", years: "4+" },
          { name: "Black-Box Testing", level: "90%", years: "4+" },
          { name: "STLC & SDLC", level: "92%", years: "4+" },
        ],
      },
      {
        id: "frontend-development",
        icon: "fas fa-code",
        title: "Frontend Development",
        description: "Modern frontend technologies and frameworks",
        skills: [
          { name: "HTML & CSS", level: "95%", years: "5+" },
          { name: "JavaScript", level: "88%", years: "4+" },
          { name: "React.js", level: "85%", years: "3+" },
          { name: "Angular", level: "80%", years: "2+" },
          { name: "Bootstrap & Tailwind", level: "90%", years: "4+" },
          { name: "TypeScript", level: "75%", years: "2+" },
        ],
      },
      {
        id: "tools-technologies",
        icon: "fas fa-tools",
        title: "Tools & Technologies",
        description: "Essential development tools and methodologies",
        skills: [
          { name: "Jira & Zephyr", level: "90%", years: "4+" },
          { name: "Git & GitHub", level: "88%", years: "4+" },
          { name: "Microsoft SQL Server", level: "85%", years: "3+" },
          { name: "C++ & Java", level: "87%", years: "4+" },
          { name: "GitHub Actions", level: "80%", years: "2+" },
          { name: "Agile Methodology", level: "85%", years: "3+" },
        ],
      },
    ],
    []
  );

  // Enhanced intersection observer with better performance
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          // Animate skill bars with staggered timing
          skillBarsRef.current.forEach((bar, index) => {
            if (bar) {
              const width = bar.getAttribute("data-width") || "0%";
              bar.style.width = "0%";

              setTimeout(() => {
                if (bar) {
                  bar.style.width = width;
                }
              }, 300 + index * 100);
            }
          });
        }
      });
    }, observerOptions);

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      observer.disconnect();
    };
  }, [isVisible]);

  // Cleanup refs on unmount
  useEffect(() => {
    return () => {
      skillBarsRef.current = [];
    };
  }, []);

  // Get category color scheme
  const getCategoryColors = useCallback((categoryIndex) => {
    const colorSchemes = [
      {
        primary: "text-emerald-400",
        secondary: "text-emerald-300",
        gradient: "from-emerald-400 to-emerald-600",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20",
        glow: "shadow-emerald-400/25",
      },
      {
        primary: "text-blue-400",
        secondary: "text-blue-300",
        gradient: "from-blue-400 to-blue-600",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
        glow: "shadow-blue-400/25",
      },
      {
        primary: "text-purple-400",
        secondary: "text-purple-300",
        gradient: "from-purple-400 to-purple-600",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
        glow: "shadow-purple-400/25",
      },
    ];
    return colorSchemes[categoryIndex] || colorSchemes[0];
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 backdrop-blur-sm border border-white/10">
            <i
              className="fas fa-chart-bar text-2xl text-blue-400"
              aria-hidden="true"
            ></i>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          >
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning quality assurance, modern frontend
            development, and cutting-edge technologies, backed by years of
            hands-on experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getCategoryColors(categoryIndex);
            return (
              <article
                key={category.id}
                className={`group relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2`}
                role="region"
                aria-labelledby={`category-${category.id}`}
              >
                {/* Category Header */}
                <header className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <i
                        className={`${category.icon} text-white text-lg`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="flex-1">
                      <h3
                        id={`category-${category.id}`}
                        className={`text-xl lg:text-2xl font-bold ${colors.primary} mb-2`}
                      >
                        {category.title}
                      </h3>
                      <p
                        className={`text-sm ${colors.secondary} leading-relaxed`}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                </header>

                {/* Skills List */}
                <div className="space-y-6" role="list">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={`${category.id}-skill-${skillIndex}`}
                      className="space-y-3"
                      role="listitem"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-200 text-sm lg:text-base">
                            {skill.name}
                          </h4>
                          {skill.years && (
                            <p className={`text-xs ${colors.secondary} mt-1`}>
                              Experience: {skill.years}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <span
                            className={`text-sm font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
                            aria-label={`Proficiency level: ${skill.level}`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div
                        className="relative h-2.5 bg-slate-700/50 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div
                          ref={(el) => {
                            if (el && !skillBarsRef.current.includes(el)) {
                              skillBarsRef.current.push(el);
                            }
                          }}
                          data-width={skill.level}
                          className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ width: isVisible ? skill.level : "0%" }}
                        >
                          {/* Animated shine effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_2s_ease-in-out_infinite] ${
                              isVisible ? "animate-[shine_3s_ease-in-out]" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover indicator */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />
              </article>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full">
            <i
              className="fas fa-info-circle text-blue-400 text-sm"
              aria-hidden="true"
            ></i>
            <span className="text-sm text-slate-300">
              Proficiency levels are based on practical experience and
              continuous learning
            </span>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `,
        }}
      />
    </section>
  );
};

export default React.memo(Skills);
