import dynamic from "next/dynamic"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plan actual de comidas vegetarianas - explora recetas",
    description: "El plan vegetariano de comidas de esta semana. Siete recetas sanas, variadas y económicas para que no tengas que pensar qué comer esta semana"
  };

const WeeklyPlan = dynamic(
    () => import ("../../components/WeeklyPlan/WeeklyPlan"),
    {
        ssr:false,
    }
);

function WeeklyPlanPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <WeeklyPlan 
                isWeekVegetarian={true}
            />
        </main>

    )
};

export default WeeklyPlanPage