//Import Google Analytics
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import Head from "next/head";

// import StoreProvider from "@/lib/StoreProvider";
import type { Metadata } from "next";
import { Raleway, Lora, Tilt_Neon } from "next/font/google";
import "./globals.css";
// import { makeStore } from "@/lib/store";
// import { CurrentDayContextProvider } from "@/context/currentDay.context";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

const tiltNeon = Tilt_Neon({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tilt-neon',
})

export const metadata: Metadata = {
  title: "Pipián | Planes de comida semanales",
  description: "¿Qué vas a comer hoy? Deja de pensar y encuentra la respuesta en nuestros planes de comida semanales. Encuentra recetas sanas, variadas y económicas, con opciones vegetarianas, gluten free y veganas",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <StoreProvider
    //   // selectedDay={3}
    //   // isSidenavOpen={false}
    // >
      <html lang="en">
        <body className={`${raleway.variable} ${lora.variable} ${tiltNeon.variable} bg-white font-sans`}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script src="https://cmp.osano.com/AzZZBuUFrPnYHIGKQ/b1ba713a-9737-4d07-a592-6ce8532b0171/osano.js" strategy="beforeInteractive"/>

        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    // </StoreProvider>

  );
}
