import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(36, 131, 123)",
        secondary: "rgb(218, 112, 44)",
        tertiary: "#fcba03",
        quatertiary: "#d15036",
        btn: "#68d463e8",
        white: "rgb(255, 253, 252)",
        dark: "rgb(54, 54, 51)",
        darker: "rgb(16, 15, 15)",
        beige: "rgb(240, 239, 235)",
        grayLight: "rgb(243, 244, 246)",
      },
      fontFamily: {
        siteTitle: "'Tilt Neon', sans-serif",
        // primary: "'Josefin Sans', sans-serif",
        sans: "'Raleway', sans-serif",
        // primary: "'Jost', sans-serif",
        serif: "'Lora', serif",
        tertiary: "sans-serif"
      }
    },
  },
  plugins: [],
};
export default config;
