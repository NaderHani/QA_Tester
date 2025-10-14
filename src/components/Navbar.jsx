import React, { useState, useEffect, useMemo } from "react";

const Navbar = ({ activeSection, isScrolled, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", icon: "fas fa-home" },
      { id: "about", label: "About", icon: "fas fa-user" },
      { id: "skills", label: "Skills", icon: "fas fa-code" },
      { id: "projects", label: "Projects", icon: "fas fa-folder-open" },
      { id: "experience", label: "Experience", icon: "fas fa-briefcase" },
      { id: "contact", label: "Contact", icon: "fas fa-envelope" },
    ],
    []
  );

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl shadow-2xl border-b border-neon-green/20"
          : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
          >
            <div className="relative">
              <i className="fas fa-bug text-xl sm:text-2xl text-neon-green transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"></i>
              <div className="absolute inset-0 bg-neon-green/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-white via-gray-100 to-neon-green bg-clip-text text-transparent group-hover:from-neon-green group-hover:to-white transition-all duration-300">
              Nader Hani
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-black/30 backdrop-blur-md rounded-full px-2 py-2 border border-white/10">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 group overflow-hidden ${
                  activeSection === item.id
                    ? "text-black"
                    : "text-gray-300 hover:text-white"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* Active/Hover Background */}
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-neon-green to-green-400 opacity-100 scale-100"
                      : hoveredItem === item.id
                      ? "bg-white/10 opacity-100 scale-100"
                      : "bg-transparent opacity-0 scale-95"
                  }`}
                  style={{
                    boxShadow:
                      activeSection === item.id
                        ? "0 0 20px rgba(74, 222, 128, 0.5), 0 0 40px rgba(74, 222, 128, 0.3)"
                        : "none",
                  }}
                ></span>

                {/* Icon (visible on hover) */}
                <span className="relative flex items-center gap-2">
                  <i
                    className={`${item.icon} text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300`}
                  ></i>
                  <span className="relative z-10">{item.label}</span>
                </span>

                {/* Shine Effect */}
                <span
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    transform:
                      hoveredItem === item.id
                        ? "translateX(100%)"
                        : "translateX(-100%)",
                    transition: "transform 0.7s ease-in-out",
                  }}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer group z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? "bg-neon-green" : "bg-white"
              } ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-2 bg-neon-green"
                  : "group-hover:w-7"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? "bg-neon-green" : "bg-white"
              } ${isMobileMenuOpen ? "opacity-0 scale-0" : "group-hover:w-5"}`}
            ></span>
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? "bg-neon-green" : "bg-white"
              } ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-neon-green"
                  : "group-hover:w-7"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-neon-green/20 shadow-2xl transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="flex flex-col py-6 px-6 gap-3 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-left text-base font-medium py-3.5 px-5 rounded-xl transition-all duration-300 overflow-hidden group ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-neon-green to-green-400 text-black shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: isMobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(-20px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  boxShadow:
                    activeSection === item.id
                      ? "0 0 20px rgba(74, 222, 128, 0.4)"
                      : "none",
                }}
              >
                {/* Gradient Border */}
                <span
                  className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                    activeSection !== item.id
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.2), transparent)",
                    backgroundSize: "200% 100%",
                    animation:
                      activeSection !== item.id && hoveredItem === item.id
                        ? "shimmer 2s infinite"
                        : "none",
                  }}
                ></span>

                <span className="relative flex items-center gap-3">
                  <i
                    className={`${item.icon} text-lg ${
                      activeSection === item.id
                        ? "text-black"
                        : "text-neon-green"
                    }`}
                  ></i>
                  <span>{item.label}</span>
                </span>

                {/* Active Indicator */}
                {activeSection === item.id && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
