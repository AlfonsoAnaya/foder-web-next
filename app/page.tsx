import Header from "../components/Header/Header";
import HomePage from "../components/Home/HomePage";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans w-[100%] bg-white overflow-hidden">
      {/* <Header /> */}
      <HomePage />
      {/* <Footer /> */}
    </main>
  );
}
