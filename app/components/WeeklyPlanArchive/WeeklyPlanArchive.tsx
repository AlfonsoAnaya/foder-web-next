'use client'
import { useEffect } from "react";
import Link from "next/link";
import WeeklyPlanCard from "./WeeklyPlanCard";
import WeeklyPlansArchive from "@/app/utils/WeeklyPlansArchive";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";


function WeeklyPlanArchive() {
  const setCurrentNavSection = useCurrentNavSectionStore((state) => state.updateCurrentNavSection);
  
  useEffect(() => {
    setCurrentNavSection('planes-anteriores');
  }, []);

  return (
    <section className="w-[100%] flex flex-col items-center md:my-[2rem]">
      <h3 className="text-[2rem] text-primary font-[600] p-4">Todos Nuestros Planes</h3>
      <div className="flex flex-col justify-center items-center gap-[2.75rem] w-[100%] max-w-[1100px]">
        {WeeklyPlansArchive.map((plan, i) => {
          return (
          <Link 
            key={"weeklyPlan" + i} 
            href={`/acervo-planes-semanales/${i}`}
            className="w-[100%] flex justify-center items-center"
          >
          <WeeklyPlanCard
            recipeArray={plan}
            planNumber={i}
          />
          </Link>
        )})}
      </div>
    </section>
  );
}

export default WeeklyPlanArchive;