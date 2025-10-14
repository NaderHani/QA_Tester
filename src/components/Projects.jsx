import React, { useMemo, useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = useMemo(
    () => [
      {
        id: 1,
        category: "manual",
        icon: "fas fa-clipboard-check",
        type: "Manual Testing",
        title: "E-Commerce Platform Testing",
        subtitle: "Comprehensive QA Testing",
        description:
          "End-to-end manual testing of e-commerce platform including functional testing, UI/UX validation, payment gateway testing, and user acceptance testing.",
        technologies: [
          "Test Cases",
          "Bug Tracking",
          "Jira",
          "Excel",
          "Test Plans",
          "UAT",
        ],
        features: [
          "Functional testing",
          "Regression testing",
          "Payment gateway validation",
          "Cross-browser testing",
        ],
        metrics: [
          { icon: "fas fa-check", label: "Test Cases", value: "200+" },
          { icon: "fas fa-bug", label: "Bugs Found", value: "45" },
          { icon: "fas fa-tasks", label: "Test Scenarios", value: "150+" },
          { icon: "fas fa-trophy", label: "Quality Score", value: "98%" },
        ],
        github: "#",
        demo: "#",
        status: "completed",
        featured: true,
      },
      {
        id: 2,
        category: "mobile",
        icon: "fas fa-mobile-alt",
        type: "Mobile App Testing",
        title: "Mobile Application QA",
        subtitle: "iOS & Android Testing",
        description:
          "Comprehensive manual testing for mobile applications across iOS and Android platforms including usability testing, device compatibility, and performance validation.",
        technologies: [
          "Mobile Testing",
          "TestFlight",
          "Android Studio",
          "Device Testing",
          "Bug Reports",
        ],
        features: [
          "Device compatibility testing",
          "UI/UX validation",
          "Performance testing",
          "Usability testing",
        ],
        metrics: [
          { icon: "fas fa-mobile", label: "Devices Tested", value: "25+" },
          { icon: "fas fa-check", label: "Test Cases", value: "150+" },
          { icon: "fas fa-bug", label: "Issues Found", value: "32" },
          { icon: "fas fa-star", label: "User Rating", value: "4.8" },
        ],
        github: "#",
        demo: "#",
        status: "completed",
        featured: true,
      },
      {
        id: 3,
        category: "api",
        icon: "fas fa-cloud",
        type: "API Testing",
        title: "REST API Testing Suite",
        subtitle: "Backend Validation",
        description:
          "Manual and exploratory API testing for microservices including endpoint validation, data integrity checks, error handling, and response time monitoring.",
        technologies: [
          "Postman",
          "API Testing",
          "JSON",
          "REST",
          "Documentation",
          "Test Reports",
        ],
        features: [
          "Endpoint testing",
          "Response validation",
          "Error handling checks",
          "Performance monitoring",
        ],
        metrics: [
          {
            icon: "fas fa-exchange-alt",
            label: "API Endpoints",
            value: "100+",
          },
          { icon: "fas fa-check", label: "Test Cases", value: "300+" },
          { icon: "fas fa-bug", label: "Issues Found", value: "28" },
          { icon: "fas fa-chart-line", label: "Coverage", value: "95%" },
        ],
        github: "#",
        demo: "#",
        status: "completed",
        featured: false,
      },
      {
        id: 4,
        category: "functional",
        icon: "fas fa-tasks",
        type: "Functional Testing",
        title: "Banking System Testing",
        subtitle: "Financial Software QA",
        description:
          "Comprehensive functional testing for banking application including transaction validation, security testing, data accuracy, and compliance verification.",
        technologies: [
          "Test Plans",
          "Test Cases",
          "Security Testing",
          "Compliance",
          "Bug Tracking",
        ],
        features: [
          "Transaction testing",
          "Security validation",
          "Data accuracy checks",
          "Compliance testing",
        ],
        metrics: [
          { icon: "fas fa-shield-alt", label: "Security Tests", value: "80+" },
          { icon: "fas fa-check", label: "Test Cases", value: "250+" },
          { icon: "fas fa-bug", label: "Critical Bugs", value: "12" },
          { icon: "fas fa-lock", label: "Security Score", value: "99%" },
        ],
        github: "#",
        demo: "#",
        status: "completed",
        featured: false,
      },
      {
        id: 5,
        category: "regression",
        icon: "fas fa-redo-alt",
        type: "Regression Testing",
        title: "ERP System Testing",
        subtitle: "Enterprise Software QA",
        description:
          "Systematic regression testing for enterprise resource planning system ensuring new updates don't break existing functionality across multiple modules.",
        technologies: [
          "Regression Testing",
          "Test Management",
          "Jira",
          "Test Execution",
          "Defect Tracking",
        ],
        features: [
          "Module testing",
          "Integration testing",
          "Smoke testing",
          "Sanity testing",
        ],
        metrics: [
          { icon: "fas fa-sync", label: "Test Cycles", value: "50+" },
          { icon: "fas fa-check", label: "Test Cases", value: "180+" },
          { icon: "fas fa-bug", label: "Bugs Found", value: "35" },
          { icon: "fas fa-chart-bar", label: "Pass Rate", value: "94%" },
        ],
        github: "#",
        demo: "#",
        status: "completed",
        featured: false,
      },
      {
        id: 6,
        category: "exploratory",
        icon: "fas fa-search",
        type: "Exploratory Testing",
        title: "Healthcare Portal Testing",
        subtitle: "Ad-hoc Testing & Bug Discovery",
        description:
          "Exploratory testing of healthcare management portal focusing on user workflows, edge cases, usability issues, and uncovering hidden defects.",
        technologies: [
          "Exploratory Testing",
          "Bug Reports",
          "Test Charters",
          "Session-Based Testing",
          "Mind Maps",
        ],
        features: [
          "User workflow testing",
          "Edge case discovery",
          "Usability assessment",
          "Critical path testing",
        ],
        metrics: [
          { icon: "fas fa-search", label: "Sessions", value: "40+" },
          { icon: "fas fa-bug", label: "Bugs Found", value: "52" },
          {
            icon: "fas fa-exclamation-triangle",
            label: "Critical Issues",
            value: "8",
          },
          { icon: "fas fa-users", label: "User Scenarios", value: "60+" },
        ],
        github: "#",
        demo: "#",
        status: "completed",
        featured: false,
      },
    ],
    []
  );

  const categories = [
    { id: "all", label: "All Testing Projects", icon: "fas fa-th-large" },
    { id: "manual", label: "Manual Testing", icon: "fas fa-clipboard-check" },
    { id: "mobile", label: "Mobile Testing", icon: "fas fa-mobile-alt" },
    { id: "api", label: "API Testing", icon: "fas fa-cloud" },
    { id: "functional", label: "Functional", icon: "fas fa-tasks" },
    { id: "regression", label: "Regression", icon: "fas fa-redo-alt" },
    { id: "exploratory", label: "Exploratory", icon: "fas fa-search" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="py-20 dark-section relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern
              id="grid-pattern"
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
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="section-header">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Testing Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive manual testing projects showcasing expertise in
            quality assurance, bug detection, and software validation across
            different platforms and applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                filter === category.id
                  ? "bg-neon-green text-black shadow-lg shadow-neon-green/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30"
              }`}
            >
              <i className={category.icon}></i>
              {category.label}
            </button>
          ))}
        </div>

        {filter === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              <i className="fas fa-star text-yellow-400 mr-2"></i>
              Featured Testing Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative flex"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`card-dark rounded-2xl overflow-hidden shadow-2xl hover:shadow-neon-green/20 transition-all duration-500 animate-slide-up border-2 flex flex-col w-full border-neon-green/30 hover:border-neon-green/60`}
                  >
                    <div className="h-32 flex items-center justify-between p-6 relative overflow-hidden bg-gradient-to-r from-green-900 to-green-800">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl bg-neon-green/20 text-neon-green">
                          <i className={project.icon}></i>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 mb-1">
                            {project.type}
                          </div>
                          <h4 className="text-xl font-bold text-white">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === "completed"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-300 mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4 min-h-[36px]">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-sm font-medium rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-700/50 text-gray-300">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <i className="fas fa-list-check text-neon-green"></i>
                          Key Features
                        </h5>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features
                            .slice(0, 4)
                            .map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2 text-sm text-gray-300"
                              >
                                <i className="fas fa-check text-xs text-neon-green"></i>
                                {feature}
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-800/30 rounded-xl">
                        {project.metrics
                          .slice(0, 4)
                          .map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="text-lg font-bold text-neon-green">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                                <i className={metric.icon}></i>
                                {metric.label}
                              </div>
                            </div>
                          ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <button className="flex-1 btn bg-neon-green hover:bg-neon-green/90 text-black font-bold">
                          <i className="fas fa-external-link-alt mr-2"></i>
                          View Details
                        </button>
                        <button className="btn btn-secondary px-4">
                          <i className="fas fa-file-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            filter === "all"
              ? "lg:grid-cols-3"
              : "lg:grid-cols-2 xl:grid-cols-3"
          } gap-6 lg:gap-8`}
        >
          {filteredProjects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <div
                key={project.id}
                className="group relative animate-slide-up flex"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border flex flex-col w-full border-neon-green/30 hover:border-neon-green/60">
                  <div className="h-32 flex items-center justify-center relative bg-gradient-to-br from-green-900 to-green-800">
                    <i
                      className={`${project.icon} text-3xl text-neon-green`}
                    ></i>

                    <div className="absolute top-2 right-2">
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          project.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      {project.type} • {project.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 transition-colors duration-300 group-hover:text-neon-green">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <button className="flex-1 text-sm btn bg-neon-green/10 text-neon-green hover:bg-neon-green/20 border border-neon-green/30">
                        <i className="fas fa-eye mr-1"></i>
                        Details
                      </button>
                      <button className="btn btn-secondary text-sm px-3">
                        <i className="fas fa-file-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
