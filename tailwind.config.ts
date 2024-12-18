import type { Config } from "tailwindcss";

function animationDelay({
  matchUtilities,
  theme,
}: {
  matchUtilities: any;
  theme: any;
}) {
  matchUtilities(
    {
      "animation-delay": (value: string) => ({
        "animation-delay": `calc(${value} * 130ms)`,
      }),
    },
    { values: theme("animationDelay") }
  );
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    screens: {
      xs: "500px",
      sm: { min: "0px", max: "567px" },
      md: { min: "568px", max: "799px" },
      lg: "1024px",
      xl: { min: "800px" },
    },
    fontFamily: {
      sans: ["var(--font-sans)", "var(--font-noto)"],
      RobotoMono: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animationDelay: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
      },
      keyframes: ({ theme }) => ({
        "fade-in": {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        mutation: {
          "0%": {
            background: theme("colors.blue.200 / 3%"),
          },
          "10%": {
            background: theme("colors.blue.200 / 15%"),
            color: theme("colors.blue.200 / 75%"),
          },
          "100%": {
            background: theme("colors.blue.200 / 0%"),
          },
        },
        loading: {
          "0%": { opacity: ".2" },
          "20%": { opacity: "1", transform: "translateX(1px)" },
          to: { opacity: ".2" },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(8px)",
          },
        },
      }),
      animation: {
        "fade-in": "fade-in .6s both",
        slidein: "slidein 1s ease-in-out var(--slidein-delay,0) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), animationDelay],
};

export default config;
