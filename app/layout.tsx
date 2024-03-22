import StoreProvider from "@/lib/StoreProvider";
import type { Metadata } from "next";
import { Raleway, Lora, Nunito } from "next/font/google";
import "./globals.css";
import { makeStore } from "@/lib/store";
import { CurrentDayContextProvider } from "@/context/currentDay.context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: "Pipián Planes Semanales",
  description: "Crea automáticamente planes de comida semanales",
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
        <body className={`${raleway.variable} ${lora.variable} ${nunito.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    // </StoreProvider>

  );
}
