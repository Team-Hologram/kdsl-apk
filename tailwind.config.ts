import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D9FF",
        secondary: "#6C5CE7",
        dark: "#0A0E27",
        "dark-light": "#1A1F3A",
        "dark-lighter": "#2A2F4A",
        warning: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #00D9FF 0%, #6C5CE7 100%)",
        "gradient-brand-reverse": "linear-gradient(135deg, #6C5CE7 0%, #00D9FF 100%)",
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(0, 217, 255, 0.3)",
        "glow-secondary": "0 0 30px rgba(108, 92, 231, 0.3)",
        "glow-brand": "0 8px 32px rgba(0, 217, 255, 0.2), 0 4px 16px rgba(108, 92, 231, 0.2)",
        "card": "0 4px 16px rgba(0,0,0,0.2)",
        "card-hover": "0 16px 40px rgba(0,0,0,0.4), 0 0 30px rgba(0,217,255,0.1)",
      },
      animation: {
        "mesh-slow": "mesh 22s infinite alternate ease-in-out",
        "phone-float": "phone-float 6s infinite ease-in-out",
        "pulse-glow": "pulse-glow 2.5s infinite",
        "reveal-up": "reveal-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "float": "float 5s infinite alternate ease-in-out",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
};

export default config;
