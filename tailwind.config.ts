import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./global.css",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "95p": "95%",
      },
      container: {
        center: true,
        padding: "0rem",
        screens: {
          DEFAULT: "1334px", // 기본 최대 너비를 1334px로 설정
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1334px", // xl 이상의 최대 너비를 1334px로 고정
          "2xl": "1334px", // 2xl도 동일하게 설정
        },
      },
    },
  },
  plugins: [],
};
export default config;
