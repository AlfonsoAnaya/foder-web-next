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
        primary: "rgb(52, 97, 66)",
        primaryAlpha: "rgb(36, 131, 123, .8)",
        secondary: "rgb(236, 102, 40)",
        tertiary: "#fcba03",
        quatertiary: "#d15036",
        durazno: "rgb(255, 214, 174)",
        btn: "#68d463e8",
        white: "rgb(250, 245, 232)",
        dark: "rgb(54, 54, 51)",
        darker: "rgb(16, 15, 15)",
        beige: "rgb(240, 239, 235)",
        grayLight: "rgb(243, 244, 246)",
        gray_2: "rgb(227, 229, 232)",
        vegetarianGreen: "rgb(102, 128, 11)",
        omnivoreRed: "rgb(175, 48, 41)",
      },
      fontFamily: {
        siteTitle: ['var(--font-tilt-neon)'],
        // primary: "'Josefin Sans', sans-serif",
        sans: ['var(--font-raleway)'],
        // primary: "'Jost', sans-serif",
        serif: ['var(--font-lora)'],
        tertiary: "sans-serif",
      },
      height: {
        landingHeightDesktop: "73vh",
      },
    },
  },
  plugins: [],
};
export default config;
