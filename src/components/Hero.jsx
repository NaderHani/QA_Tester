import React, { useEffect, useState, useMemo } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Tester & QA Engineer";

  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const stats = useMemo(
    () => [
      { number: "2025", label: "Graduate", color: "text-accent glow-text" },
      { number: "ISTQB", label: "Principles", color: "text-accent glow-text" },
      { number: "STLC", label: "Expert", color: "text-accent glow-text" },
    ],
    []
  );

  const buttons = useMemo(
    () => [
      {
        onClick: () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" }),
        text: "Get In Touch",
        icon: "fas fa-envelope",
      },
      {
        onClick: () =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" }),
        text: "View Projects",
        icon: "fas fa-briefcase",
      },
    ],
    []
  );

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            {/* Professional Badge */}
            <div
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-green-400">
                Available for QA Opportunities
              </span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block text-white mb-1 sm:mb-2">
                Nader Hani Ali
              </span>
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse text-green-400">|</span>
              </span>
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Detail-oriented{" "}
              <span className="text-green-400 font-semibold">
                Computer Science graduate
              </span>{" "}
              with hands-on experience in{" "}
              <span className="text-green-400 font-semibold">
                Quality Assurance methodologies
              </span>{" "}
              and{" "}
              <span className="text-green-400 font-semibold">
                Software Testing Life Cycle (STLC)
              </span>
              . Passionate about ensuring software quality and delivering
              exceptional user experiences.
            </p>

            {/* Stats */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-0.5 sm:mb-1">
                      {stat.number}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden ${
                    index === 0
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105"
                      : "bg-transparent border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500 hover:scale-105"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <i className={button.icon}></i>
                    {button.text}
                  </span>
                  {index === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Quick Links */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-gray-400 text-xs sm:text-sm">Connect:</span>
              <div className="flex gap-2 sm:gap-3">
                {[
                  {
                    icon: "fab fa-linkedin-in",
                    color: "hover:text-blue-400",
                    href: "https://linkedin.com/in/naderhani2302",
                  },
                  {
                    icon: "fab fa-github",
                    color: "hover:text-gray-300",
                    href: "https://github.com/NaderHani",
                  },
                  {
                    icon: "fab fa-twitter",
                    color: "hover:text-sky-400",
                    href: "https://x.com/0__Nader",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-400 ${social.color} hover:border-current transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <i className={`${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Code Screen */}
          <div
            className={`relative transition-all duration-700 delay-400 mt-6 sm:mt-8 lg:mt-0 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 blur-3xl animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-green-500/30">
              {/* Screen Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-green-500/20">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <i className="fas fa-file-code text-green-400 text-xs sm:text-sm"></i>
                    <span className="text-green-400 text-xs sm:text-sm font-mono font-semibold">
                      test-automation.js
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500/20 rounded-md">
                    <span className="text-[10px] sm:text-xs text-green-400 font-mono">
                      ✓ All Tests
                    </span>
                  </div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 font-mono text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed bg-gradient-to-b from-black to-gray-900 overflow-x-auto">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="flex items-start gap-1.5 sm:gap-2 md:gap-4">
                    <span className="text-gray-600 select-none w-5 sm:w-6 md:w-8 text-right text-[9px] sm:text-xs">
                      1
                    </span>
                    <div className="text-gray-300">
                      <span className="text-green-400 font-semibold">
                        describe
                      </span>
                      <span className="text-gray-400">(</span>
                      <span className="text-amber-400">
                        'User Authentication'
                      </span>
                      <span className="text-gray-400">, () =&gt; &#123;</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-2 md:gap-4">
                    <span className="text-gray-600 select-none w-5 sm:w-6 md:w-8 text-right text-[9px] sm:text-xs">
                      2
                    </span>
                    <div className="text-gray-300 ml-1 sm:ml-2 md:ml-4">
                      <span className="text-green-400 font-semibold">it</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-amber-400">
                        'should login successfully'
                      </span>
                      <span className="text-gray-400">, </span>
                      <span className="text-purple-400 font-semibold">
                        async
                      </span>
                      <span className="text-gray-400"> () =&gt; &#123;</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-2 md:gap-4">
                    <span className="text-gray-600 select-none w-5 sm:w-6 md:w-8 text-right text-[9px] sm:text-xs">
                      3
                    </span>
                    <div className="text-gray-300 ml-2 sm:ml-4 md:ml-8">
                      <span className="text-purple-400 font-semibold">
                        await
                      </span>
                      <span className="text-blue-300"> loginPage</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-blue-300">enterUsername</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-amber-400">'testuser'</span>
                      <span className="text-gray-400">);</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-2 md:gap-4">
                    <span className="text-gray-600 select-none w-5 sm:w-6 md:w-8 text-right text-[9px] sm:text-xs">
                      4
                    </span>
                    <div className="text-gray-300 ml-2 sm:ml-4 md:ml-8">
                      <span className="text-purple-400 font-semibold">
                        await
                      </span>
                      <span className="text-blue-300"> loginPage</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-blue-300">enterPassword</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-amber-400">'••••••••'</span>
                      <span className="text-gray-400">);</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-2 md:gap-4 bg-gradient-to-r from-green-500/10 to-transparent border-l-2 sm:border-l-4 border-green-500 py-1 sm:py-2 -ml-1 sm:-ml-2 pl-1 sm:pl-2">
                    <span className="text-gray-600 select-none w-5 sm:w-6 md:w-8 text-right text-[9px] sm:text-xs">
                      5
                    </span>
                    <div className="text-gray-300 ml-2 sm:ml-4 md:ml-8">
                      <span className="text-green-400 font-semibold">
                        expect
                      </span>
                      <span className="text-gray-400">(</span>
                      <span className="text-purple-400 font-semibold">
                        await
                      </span>
                      <span className="text-blue-300"> dashboard</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-blue-300">isVisible</span>
                      <span className="text-gray-400">()).</span>
                      <span className="text-green-400 font-semibold">toBe</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-green-300">true</span>
                      <span className="text-gray-400">);</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-2 md:gap-4">
                    <span className="text-gray-600 select-none w-5 sm:w-6 md:w-8 text-right text-[9px] sm:text-xs">
                      6
                    </span>
                    <div className="text-gray-300 ml-1 sm:ml-2 md:ml-4">
                      <span className="text-gray-400">&#125;);</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-2 md:gap-4">
                    <span className="text-gray-600 select-none w-5 sm:w-6 md:w-8 text-right text-[9px] sm:text-xs">
                      7
                    </span>
                    <div className="text-gray-300">
                      <span className="text-gray-400">&#125;);</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block">
              {/* Top Right - Check Icon */}
              <div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 lg:-top-6 lg:-right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20 animate-float border border-green-500/30"
                style={{ animationDelay: "0s" }}
              >
                <i className="fas fa-check-circle text-base sm:text-lg md:text-xl lg:text-2xl text-green-400"></i>
              </div>
              {/* Middle Right - Bug Icon */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 md:-right-8 lg:-right-6 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 animate-float border border-blue-500/30"
                style={{ animationDelay: "1s" }}
              >
                <i className="fas fa-bug text-sm sm:text-base md:text-lg lg:text-xl text-blue-400"></i>
              </div>
              {/* Bottom Right - Flask Icon */}
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 lg:-bottom-6 lg:-right-6 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20 animate-float border border-purple-500/30"
                style={{ animationDelay: "2s" }}
              >
                <i className="fas fa-flask text-sm sm:text-base md:text-lg lg:text-xl text-purple-400"></i>
              </div>
              {/* Middle Left - Code Icon */}
              <div
                className="absolute top-1/3 -translate-y-1/2 -left-4 sm:-left-6 md:-left-8 lg:-left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-500/30 to-orange-500/30 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20 animate-float border border-amber-500/30"
                style={{ animationDelay: "1.5s" }}
              >
                <i className="fas fa-code text-xs sm:text-sm md:text-base lg:text-lg text-amber-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute hidden md:block bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 animate-bounce">
            <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-medium">
              Scroll Down
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border-2 border-green-500/50 flex items-center justify-center hover:border-green-500 transition-colors cursor-pointer">
              <i className="fas fa-chevron-down text-green-400 text-xs sm:text-sm"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default React.memo(Hero);
