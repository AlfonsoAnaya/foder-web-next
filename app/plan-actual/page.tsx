import dynamic from "next/dynamic"
import type { Metadata } from "next";
import currentWeekRecipes from "../utils/CurrentWeek/CurrentWeekRecipes";

export const metadata: Metadata = {
    title: "Plan  actual de comidas - explora recetas",
    description: "El plan de comidas de esta semana. Siete recetas sanas, variadas y económicas para que no tengas que pensar qué comer esta semana"
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
                isWeekVegetarian={false}
                recipes={currentWeekRecipes}
            />
        </main>
    )
};

export default WeeklyPlanPage