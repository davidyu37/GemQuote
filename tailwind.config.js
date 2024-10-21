// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair-display)", "Georgia", "serif"], // Luxury serif font
      },
      colors: {
        primary: {
          DEFAULT: "#FFD700", // Rich gold
          light: "#FFE55C", // Light gold
          dark: "#B29700", // Dark gold
          50: "#FFFDF0", // Softest gold - for subtle backgrounds
          100: "#FFF9C4", // Very light gold
          200: "#FFE57F", // Light gold
          300: "#FFD740", // Medium light gold
          400: "#FFC400", // Medium gold
          500: "#FFD700", // Base gold (same as DEFAULT)
          600: "#FFB300", // Medium dark gold
          700: "#B29700", // Dark gold (same as dark)
          800: "#856E00", // Darker gold
          900: "#3A3000", // Darkest gold
        },
        neutral: {
          50: "#FFFFFF",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0908", // Deeper black for more contrast
        },
      },
      backgroundImage: {
        gradient:
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
        "gold-gradient":
          "linear-gradient(45deg, var(--tw-colors-primary-dark), var(--tw-colors-primary-DEFAULT), var(--tw-colors-primary-light))",
        "gold-radial":
          "radial-gradient(circle at center, var(--tw-colors-primary-light), var(--tw-colors-primary-DEFAULT), var(--tw-colors-primary-dark))",
        "gold-shimmer":
          "linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)",
        "dark-gradient":
          "linear-gradient(to bottom, rgba(10,9,8,0.9), rgba(10,9,8,0.95))",
      },
      animation: {
        "gold-shimmer": "shimmer 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        reveal: "reveal 0.7s ease-out forwards",
        "reveal-delayed": "reveal 0.7s ease-out forwards 0.2s",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        scale: "scale 0.3s ease-out",
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        reveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            visibility: "hidden",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            visibility: "visible",
          },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scale: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
          "100%": { opacity: 1, transform: "translate(0);" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": { transform: "rotate(0deg)" },
          "30%, 60%": { transform: "rotate(-2deg)" },
          "40%, 70%": { transform: "rotate(2deg)" },
          "45%": { transform: "rotate(-4deg)" },
          "55%": { transform: "rotate(4deg)" },
        },
      },
      boxShadow: {
        "gold-sm": "0 0 10px rgba(255, 215, 0, 0.1)",
        gold: "0 0 15px rgba(255, 215, 0, 0.15)",
        "gold-lg": "0 0 30px rgba(255, 215, 0, 0.2)",
        "gold-xl": "0 0 50px rgba(255, 215, 0, 0.25)",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        jewelryLight: {
          primary: "#FFD700",
          secondary: "#997D00",
          accent: "#FFE55C",
          neutral: "#171717",
          "base-100": "#FFFFFF",
          info: "#A3A3A3",
          success: "#B29700",
          warning: "#FFD700",
          error: "#991B1B",
        },
        jewelryDark: {
          primary: "#FFD700",
          secondary: "#997D00",
          accent: "#FFE55C",
          neutral: "#FFFFFF",
          "base-100": "#0A0908",
          info: "#A3A3A3",
          success: "#B29700",
          warning: "#FFD700",
          error: "#991B1B",
        },
      },
    ],
  },
};
