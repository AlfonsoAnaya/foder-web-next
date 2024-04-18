import dynamic from "next/dynamic"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Arma tu plan semanal con tus recetas favoritas",
    description: "El plan de comidas de esta semana. Siete recetas sanas, variadas y económicas para que no tengas que pensar qué comer esta semana"
  };

const InteractiveWeeklyPlan = dynamic(
    () => import ("../../components/InteractiveWeeklyPlan/InteractiveWeeklyPlan"),
    {
        ssr:false,
    }
);

function InteractiveWeeklyPlanPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <InteractiveWeeklyPlan />
        </main>

    )
};

export default InteractiveWeeklyPlanPage