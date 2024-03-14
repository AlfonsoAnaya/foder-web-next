import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import dynamic from "next/dynamic"

const DatabaseForm = dynamic(
    () => import ("../components/DatabaseForm/DatabaseForm"),
    {
        ssr:false,
    }
);

function DatabaseFormPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <Header />
            <DatabaseForm />
            <Footer />
        </main>

    )
};

export default DatabaseFormPage