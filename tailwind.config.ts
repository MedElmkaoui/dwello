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
        primary : '#2A1B12',
        secondary : '#DDC7BB',
        light : '#FBF5F1',
        forground : '#695346',
      },
    },
  },
  plugins: [],
};
export default config;
