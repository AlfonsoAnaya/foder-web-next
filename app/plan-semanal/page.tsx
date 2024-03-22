import dynamic from "next/dynamic"

const WeeklyPlan = dynamic(
    () => import ("../components/WeeklyPlan/WeeklyPlan"),
    {
        ssr:false,
    }
);

function WeeklyPlanPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <WeeklyPlan />
        </main>

    )
};

export default WeeklyPlanPage