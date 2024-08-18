/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "hsl(14, 86%, 42%)",
      green: "hsl(159, 69%, 38%)",
      "rose-50": "hsl(20, 50%, 98%)",
      "rose-100": "hsl(13, 31%, 94%)",
      "rose-300": "hsl(14, 25%, 72%)",
      "rose-400": "hsl(7, 20%, 60%)",
      "rose-500": "hsl(12, 20%, 44%)",
      "rose-900": "hsl(14, 65%, 9%)",
    },

    fontFamily: {
      sans: ["Red Hat Text", "sans-serif"],
    },

    fontWeight: {
      regular: "400",
      semibold: "600",
      bold: "700",
    },

    screens: {
      sm: "768px",
      md: "1074px",
      lg: "1440px",
    },

    extend: {
      keyframes: {
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        slideInUp: "slideInUp 0.5s ease-out forwards",
        zoomIn: "zoomIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
