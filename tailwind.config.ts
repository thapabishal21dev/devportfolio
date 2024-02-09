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
    },
    extend:{
      keyframes:{
        slidein:{
          from:{
            opacity:"0",
            transform:"traslateY-(0px)",

          },
          to:{
            opacity:"1",
            transform:"translateY(8px)",

          }
        }
      },
      animation:{
        slidein:"slidein 2s ease-in-out var(--slidein-delay,0) forwards",
       
      }
    }
  },
  plugins: [],
};
export default config;
