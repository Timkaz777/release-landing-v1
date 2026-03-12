import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#0a0a0a",
        carbon: "#0d120f",
        panel: "#0d1110",
        panelSoft: "#121917",
        line: "#1b2b22",
        lineSoft: "#122019",
        emerald: "#00ff6a",
        emeraldSoft: "#66b98a",
        mist: "#f5f5f5",
        frost: "#d1dad4",
        slate: "#8a978f",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px rgba(0, 255, 106, 0.14)",
      },
      fontFamily: {
        sans: [
          "\"Avenir Next\"",
          "\"Segoe UI\"",
          "\"Helvetica Neue\"",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        overline: "0.18em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(0, 255, 106, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 106, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
