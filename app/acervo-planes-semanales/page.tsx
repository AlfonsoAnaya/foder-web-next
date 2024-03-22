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
            <WeeklyPlanCollection />
        </main>
    )
};

export default WeeklyPlanCollectionPage