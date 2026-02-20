/**
 * Tailwind CSS Configuration
 * Extracted from hero-sections.html
 *
 * This configuration can be used with Tailwind CLI or PostCSS
 */

module.exports = {
  content: ["./index.html", "./src/components/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0b0b0b",
          dark: "#121212",
          orange: "#ff6a00",
          orangeHover: "#e65f00",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(255, 106, 0, 0.4)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
