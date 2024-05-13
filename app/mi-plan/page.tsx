import dynamic from "next/dynamic"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mi propio plan",
    description: "Un plan seleccionado por ti. Siete recetas sanas, variadas y económicas para que no tengas que pensar qué comer esta semana"
  };

const WeeklyPlanCustomized = dynamic(
    () => import ("../../components/WeeklyPlan/WeeklyPlanCustomized"),
    {
        ssr:false,
    }
);


function MyWeeklyPlanPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <WeeklyPlanCustomized />
        </main>

    )
};

export default MyWeeklyPlanPage