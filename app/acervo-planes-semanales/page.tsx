import dynamic from "next/dynamic";

const WeeklyPlanArchive = dynamic(
    () => import ("../components/WeeklyPlanArchive/WeeklyPlanArchive"),
    {
        ssr:false,
    }
);

function WeeklyPlanArchivePage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <WeeklyPlanArchive />
        </main>
    )
};

export default WeeklyPlanArchivePage