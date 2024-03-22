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
            <RecipeCollection />
        </main>
    )
};

export default WeeklyPlanPage