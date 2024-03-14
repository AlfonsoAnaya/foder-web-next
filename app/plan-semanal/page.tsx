import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import WeeklyPlan from "../components/WeeklyPlan/WeeklyPlan"

function WeeklyPlanPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <Header />
            <WeeklyPlan />
            <Footer />
        </main>

    )
};

export default WeeklyPlanPage