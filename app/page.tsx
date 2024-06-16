import HomePage from "../components/Home/HomePage";
import Script from "next/script";

export default function Home() {
  return (
    <>
    <Script src="https://cmp.osano.com/AzZZBuUFrPnYHIGKQ/b1ba713a-9737-4d07-a592-6ce8532b0171/osano.js" />
    <main className="flex flex-col min-h-screen font-sans w-[100%] bg-white">
      {/* <Header /> */}
      <HomePage />
      {/* <Footer /> */}
    </main>
    </>
    
  );
}
