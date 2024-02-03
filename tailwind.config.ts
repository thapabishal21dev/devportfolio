import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    screens:{
      'sm': {'min': '0px', 'max': '567px'},
  
      'md': {'min': '568px', 'max': '799px'},

      'lg': {'min': '800px',},
    }
  },
  plugins: [],
};
export default config;
