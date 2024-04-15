import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Explora todos nuestros planes de comidas semanales - recetas",
    description: "Explora nuestros planes anteriores. Si te perdiste un plan o quieres repetir, aquí encontrarás la receta que buscas."
  };

const WeeklyPlanArchive = dynamic(
    () => import ("../../components/WeeklyPlanArchive/WeeklyPlanArchive"),
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