import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import dynamic from "next/dynamic"

const RecipeCollection = dynamic(
    () => import ("../components/RecipeCollection/RecipeCollection"),
    {
        ssr:false,
    }
);

function WeeklyPlanPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <Header />
            <RecipeCollection />
            <Footer />
        </main>

    )
};

export default WeeklyPlanPage