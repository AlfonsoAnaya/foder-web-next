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
        primary: "rgb(182, 209, 148)", //verde (claro)
        primaryLight: "rgb(217, 234, 211)", //verde (muy claro)
        secondary: "rgb(255, 215, 77)", //amarillo
        tertiary: "rgb(255, 205, 153)", //peach
        quatertiary: "rgb(255, 207, 206)", //rosa
        white: "rgb(255, 244, 229)",
        dark: "rgb(30, 30, 30)",
        darker: "rgb(16, 15, 15)",

        albahaca: "rgb(52, 97, 66)",
        mandarina: "rgb(236, 102, 40)",


        
        
        
        btn: "#68d463e8",
        beige: "rgb(240, 239, 235)",
        grayLight: "rgb(243, 244, 246)",
        gray_2: "rgb(227, 229, 232)",
        vegetarianGreen: "rgb(102, 128, 11)",
        omnivoreRed: "rgb(175, 48, 41)",
      },
      fontFamily: {
        siteTitle: ['var(--font-tilt-neon)'],
        // primary: "'Josefin Sans', sans-serif",
        sans: ['var(--font-cutive)'],
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
