import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 40px -20px rgba(20, 14, 9, 0.35)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(255, 150, 95, 0.4), transparent 45%), radial-gradient(circle at 80% 30%, rgba(255, 205, 184, 0.35), transparent 45%), linear-gradient(140deg, #fff8f3 0%, #ffffff 55%, #fff1e7 100%)"
      }
    }
  },
  plugins: []
};

export default config;
