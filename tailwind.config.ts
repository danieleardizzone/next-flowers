import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryLighter: "#274A63",
        tertiary: "#263440",
        accentLighter: "#FBD483",
      }
    }
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        flowersHomepage: {
          "primary": "#f3f4e4",
          "primary-content": "#2d3238",
          "secondary": "#113855",
          "secondaryLighter": "#274A63",
          "secondary-content": "#f3f4e4",
          "tertiary": "#263440",
          "accent": "#FFBF47",
          "accentLighter": "#FBD483",
          "base-100": "#263440",
          "neutral": "#113855",
          "neutral-content": "#FFBF47",
        }
      },
      {
        flowers: {
          "primary": "#f3f4e4",
          "primary-content": "#2d3238",
          "secondary": "#113855",
          "secondaryLighter": "#274A63",
          "secondary-content": "#f3f4e4",
          "tertiary": "#263440",
          "accent": "#FFBF47",
          "accentLighter": "#FBD483",
          "base-100": "#f3f4e4",
          "neutral": "#113855",
          "neutral-content": "#FFBF47",
        }
      }
    ],
  }
} satisfies Config;
