import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import dynamic from "next/dynamic"

const WeeklyPlanCollection = dynamic(
    () => import ("../components/WeeklyPlanCollection/WeeklyPlanCollection"),
    {
        ssr:false,
    }
);

function WeeklyPlanCollectionPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <Header />
            <WeeklyPlanCollection />
            <Footer />
        </main>

    )
};

export default WeeklyPlanCollectionPage