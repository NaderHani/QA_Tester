/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        accent: "#4ade80",
        neon: {
          green: "#4ade80",
          purple: "#a855f7",
          red: "#f87171",
          blue: "#60a5fa",
        },
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        bounce: "bounce 2s infinite",
        scroll: "scroll 2s infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scroll: {
          "0%": { transform: "translateX(-50%) translateY(0)", opacity: 1 },
          "100%": {
            transform: "translateX(-50%) translateY(20px)",
            opacity: 0,
          },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      boxShadow: {
        lg: "0 10px 25px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 40px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
