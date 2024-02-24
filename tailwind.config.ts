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
        primary: "#1DAAC8",
        secondary: "#FBB116",
        kuningmuda: "#fffaeb",
        tertiary: "#3C9950",
        hijaumuda: "#f2fbf4",
        forthly: "#FECF07",
        fifthly: "#f9fafb",
        gelap: "#111827",
        dongker: "#005E7F",
        dongkermuda: "#e7ffff",
        blueshade20: "#136678",
        greenshade20: "#377a48",
        yellowshade20: "#cba607",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Adjust this based on your duplication
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
