// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initNavbar();
  initScrollEffects();
  initSkillBars();
  initContactForm();
  initSmoothScrolling();
  initTypingEffect();
});

// Navbar functionality
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active link on scroll
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Scroll effects and animations
function initScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  document
    .querySelectorAll(
      ".skill-category, .project-card, .timeline-item, .contact-item, .highlight-item"
    )
    .forEach((el) => {
      observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width") || "0%";
          bar.style.width = "0%";
          setTimeout(() => {
            bar.style.width = width;
          }, 200);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => observer.observe(bar));
}

// Typing effect for hero title
function initTypingEffect() {
  const heroTitle = document.querySelector(".hero-title");
  const text = heroTitle.textContent;
  heroTitle.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };

  // Start typing effect after a delay
  setTimeout(typeWriter, 1000);
}

// Contact form handling
function initContactForm() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      showNotification("Please fill in all fields", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    // Simulate form submission
    showNotification(
      "Message sent successfully! I'll get back to you soon.",
      "success"
    );

    // Reset form
    form.reset();
  });
}

// Notification system
function showNotification(message, type) {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${
              type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
            }"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

  // Add to page
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Auto hide after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);

  // Close button functionality
  notification
    .querySelector(".notification-close")
    .addEventListener("click", function () {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    });
}

// Parallax effect for hero section
function initParallax() {
  const hero = document.querySelector(".hero");
  const codeScreen = document.querySelector(".code-screen");

  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    if (codeScreen) {
      codeScreen.style.transform = `translateY(${rate * 0.1}px)`;
    }
  });
}

// Particle effect for background (optional)
function initParticles() {
  const hero = document.querySelector(".hero");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    hero.appendChild(particle);
  }
}

// Intersection Observer for fade-in animations
function initFadeInAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
}

// Counter animation for stats
function initCounterAnimation() {
  const counters = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.innerText.replace(/,/g, ""));
          let count = 0;
          const increment = target / 100;

          const timer = setInterval(() => {
            count += increment;
            counter.innerText = Math.floor(count).toLocaleString();

            if (count >= target) {
              counter.innerText = target.toLocaleString();
              clearInterval(timer);
            }
          }, 30);

          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

// Initialize additional features
window.addEventListener("load", function () {
  initParallax();
  initCounterAnimation();

  // Add loading class removal for smooth transitions
  document.body.classList.add("loaded");
});

// Add CSS for notifications and particles
const additionalStyles = `
<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
}

.notification.show {
    transform: translateX(0);
}

.notification.success .notification-content {
    border-left: 4px solid #10b981;
}

.notification.error .notification-content {
    border-left: 4px solid #ef4444;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
}

.notification-content i {
    font-size: 1.5rem;
}

.notification.success .notification-content i {
    color: #10b981;
}

.notification.error .notification-content i {
    color: #ef4444;
}

.notification-close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: #64748b;
    transition: color 0.3s ease;
}

.notification-close:hover {
    color: #334155;
}

.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    pointer-events: none;
    animation: particleFloat linear infinite;
}

@keyframes particleFloat {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
    }
}

.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.animate-in {
    animation: slideInUp 0.6s ease forwards;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.skill-category.animate-in,
.project-card.animate-in,
.timeline-item.animate-in,
.contact-item.animate-in,
.highlight-item.animate-in {
    animation: slideInUp 0.6s ease forwards;
}

body.loaded {
    opacity: 1;
}

body {
    opacity: 0;
    transition: opacity 0.3s ease;
}

/* Mobile menu styles */
.nav-menu.active {
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.hamburger.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}

@media (min-width: 769px) {
    .nav-menu.active {
        display: flex;
        position: static;
        background: transparent;
        backdrop-filter: none;
        flex-direction: row;
        padding: 0;
        box-shadow: none;
        border-top: none;
    }
}
</style>
`;

// Add additional styles to head
document.head.insertAdjacentHTML("beforeend", additionalStyles);

// Prevent form submission on enter for better UX
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Enter" &&
    e.target.tagName === "INPUT" &&
    e.target.type !== "submit"
  ) {
    e.preventDefault();
    const inputs = Array.from(document.querySelectorAll("input, textarea"));
    const currentIndex = inputs.indexOf(e.target);
    const nextInput = inputs[currentIndex + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }
});
