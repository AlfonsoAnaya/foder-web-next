import dynamic from "next/dynamic"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Explora todas nuestras recetas - comidas",
    description: "Explora nuestro acervo de recetas. Filtra recetas vegetarianas, gluten free, veganas y más. Encuentra qué comer hoy."
  };

const RecipeCollection = dynamic(
    () => import("../../components/RecipeCollection/RecipeCollection"),
    {
        ssr: false,
    }
);

function WeeklyPlanPage() {

    return (
        <>
            <main className="flex flex-col font-sans w-[100%]">
                <RecipeCollection />
            </main>
        </>

    )
};


export default WeeklyPlanPage