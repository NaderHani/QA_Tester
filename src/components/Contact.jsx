import React, { useState, useMemo } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showNotification("Please fix the errors in the form", "error");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      showNotification(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const contactInfo = useMemo(
    () => [
      {
        icon: "fas fa-envelope",
        title: "Email",
        value: "Naderhani456@gmail.com",
        displayValue: "Naderhani456@gmail.com",
        link: "mailto:Naderhani456@gmail.com",
        color: "neon-green",
        index: 0,
      },
      {
        icon: "fas fa-phone",
        title: "Phone",
        value: "+201203620019",
        displayValue: "+20 120 362 0019",
        link: "tel:+201203620019",
        color: "neon-purple",
        index: 1,
      },
      {
        icon: "fas fa-map-marker-alt",
        title: "Location",
        value: "Sharkia, Egypt",
        displayValue: "Sharkia, Egypt",
        link: "https://maps.google.com/?q=Sharkia,Egypt",
        color: "neon-red",
        index: 2,
      },
      {
        icon: "fab fa-linkedin",
        title: "LinkedIn",
        value: "linkedin.com/in/naderhani2302",
        displayValue: "/naderhani2302",
        link: "https://linkedin.com/in/naderhani2302",
        color: "neon-green",
        index: 3,
      },
    ],
    []
  );

  const handleContactClick = (info) => {
    if (info.link) {
      window.open(info.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 dark-section relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-green rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Get In Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or need quality assurance expertise? Let's
            collaborate and create something amazing together!
          </p>
        </div>

        {/* Notification */}
        {notification && (
          <div
            className={`fixed top-8 right-8 z-50 animate-slide-up ${
              notification.type === "success"
                ? "neon-border"
                : "neon-border-red"
            } card-dark rounded-xl shadow-2xl max-w-md`}
          >
            <div className="p-4 flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  notification.type === "success"
                    ? "bg-neon-green/20 text-neon-green"
                    : "bg-neon-red/20 text-neon-red"
                }`}
              >
                <i
                  className={`fas ${
                    notification.type === "success"
                      ? "fa-check-circle glow-text"
                      : "fa-exclamation-circle glow-red"
                  } text-xl`}
                ></i>
              </div>
              <p className="text-white font-medium flex-1">
                {notification.message}
              </p>
              <button
                onClick={() => setNotification(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info) => (
              <button
                key={info.index}
                onClick={() => handleContactClick(info)}
                className={`w-full card-dark p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 animate-slide-up flex items-start gap-4 group cursor-pointer hover:scale-105 ${
                  info.index === 0
                    ? "neon-border hover:shadow-neon-green/50"
                    : info.index === 1
                    ? "neon-border-purple hover:shadow-neon-purple/50"
                    : info.index === 2
                    ? "neon-border-red hover:shadow-neon-red/50"
                    : "neon-border hover:shadow-neon-green/50"
                }`}
                style={{ animationDelay: `${info.index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                    info.index === 0
                      ? "bg-neon-green/20 text-neon-green neon-border"
                      : info.index === 1
                      ? "bg-neon-purple/20 text-neon-purple neon-border-purple"
                      : info.index === 2
                      ? "bg-neon-red/20 text-neon-red neon-border-red"
                      : "bg-neon-green/20 text-neon-green neon-border"
                  }`}
                >
                  <i
                    className={`${info.icon} text-2xl ${
                      info.index === 0
                        ? "glow-text"
                        : info.index === 1
                        ? "glow-purple"
                        : info.index === 2
                        ? "glow-red"
                        : "glow-text"
                    }`}
                  ></i>
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-white mb-2 text-lg group-hover:text-neon-green transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors break-all">
                    {info.displayValue}
                  </p>
                </div>
                <i className="fas fa-arrow-right text-gray-500 group-hover:text-neon-green transition-all duration-300 transform group-hover:translate-x-1 mt-2"></i>
              </button>
            ))}

            {/* Social Media Section */}
            <div
              className="card-dark p-6 rounded-xl neon-border animate-slide-up"
              style={{ animationDelay: "400ms" }}
            >
              <h4 className="font-bold text-white mb-4 text-lg glow-text">
                Connect With Me
              </h4>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/NaderHani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-neon-green hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-green/50"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/naderhani2302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-neon-purple hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-purple/50"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="https://x.com/0__Nader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-neon-red hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-red/50"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className="card-dark p-6 sm:p-8 lg:p-10 rounded-xl shadow-md animate-slide-up neon-border-purple hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: "200ms" }}
            >
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2 glow-purple">
                  Send Me a Message
                </h3>
                <p className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as
                  possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-white font-medium mb-2 text-sm">
                      <i className="fas fa-user mr-2 text-neon-green"></i>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 bg-gray-800/50 border-2 text-white rounded-lg focus:outline-none transition-all duration-300 placeholder-gray-500 ${
                        errors.name
                          ? "border-neon-red focus:border-neon-red"
                          : focusedField === "name"
                          ? "border-neon-green shadow-lg shadow-neon-green/20"
                          : "border-gray-600 focus:border-neon-green"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-neon-red text-sm mt-1 flex items-center gap-1">
                        <i className="fas fa-exclamation-circle"></i>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-white font-medium mb-2 text-sm">
                      <i className="fas fa-envelope mr-2 text-neon-purple"></i>
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 bg-gray-800/50 border-2 text-white rounded-lg focus:outline-none transition-all duration-300 placeholder-gray-500 ${
                        errors.email
                          ? "border-neon-red focus:border-neon-red"
                          : focusedField === "email"
                          ? "border-neon-purple shadow-lg shadow-neon-purple/20"
                          : "border-gray-600 focus:border-neon-purple"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-neon-red text-sm mt-1 flex items-center gap-1">
                        <i className="fas fa-exclamation-circle"></i>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-white font-medium mb-2 text-sm">
                    <i className="fas fa-tag mr-2 text-neon-red"></i>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="What's this about?"
                    className={`w-full px-4 py-3 bg-gray-800/50 border-2 text-white rounded-lg focus:outline-none transition-all duration-300 placeholder-gray-500 ${
                      errors.subject
                        ? "border-neon-red focus:border-neon-red"
                        : focusedField === "subject"
                        ? "border-neon-red shadow-lg shadow-neon-red/20"
                        : "border-gray-600 focus:border-neon-red"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-neon-red text-sm mt-1 flex items-center gap-1">
                      <i className="fas fa-exclamation-circle"></i>
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-white font-medium mb-2 text-sm">
                    <i className="fas fa-comment-dots mr-2 text-neon-green"></i>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project or question..."
                    rows="6"
                    className={`w-full px-4 py-3 bg-gray-800/50 border-2 text-white rounded-lg focus:outline-none transition-all duration-300 resize-none placeholder-gray-500 ${
                      errors.message
                        ? "border-neon-red focus:border-neon-red"
                        : focusedField === "message"
                        ? "border-neon-green shadow-lg shadow-neon-green/20"
                        : "border-gray-600 focus:border-neon-green"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-neon-red text-sm mt-1 flex items-center gap-1">
                      <i className="fas fa-exclamation-circle"></i>
                      {errors.message}
                    </p>
                  )}
                  <div className="text-right mt-1">
                    <span
                      className={`text-xs ${
                        formData.message.length >= 10
                          ? "text-neon-green"
                          : "text-gray-500"
                      }`}
                    >
                      {formData.message.length} / 10 characters minimum
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative bg-gradient-to-r from-neon-green to-neon-purple text-black px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 w-full justify-center flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 text-lg group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                <div className="text-center mt-6">
                  <p className="text-gray-400 text-sm">
                    <i className="fas fa-shield-alt mr-2 text-neon-green"></i>
                    Your information is safe and will never be shared
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
