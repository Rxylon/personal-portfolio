import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Linear-inspired "Void" palette
        linear: {
          void: "#08090A",
          surface: "#141517",
          border: "rgba(255, 255, 255, 0.08)",
          text: "#F2F2F3",
          muted: "#8A8F98",
          accent: "#5E6AD2",
          glow: "#5E6AD2",
        },
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        wide: "0.04em",
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        pulse: "pulse 2s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        stars: "stars 100s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(94, 106, 210, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(94, 106, 210, 0.6)" },
        },
        stars: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(180deg, rgba(94, 106, 210, 0.15) 0%, transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, #141517 0%, #0a0b0c 100%)",
        "text-gradient":
          "linear-gradient(180deg, #F2F2F3 0%, #8A8F98 100%)",
        "footer-glow":
          "radial-gradient(ellipse at bottom, rgba(94, 106, 210, 0.2) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
