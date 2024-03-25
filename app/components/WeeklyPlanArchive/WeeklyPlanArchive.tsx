import Link from "next/link";
import WeeklyPlanCard from "./WeeklyPlanCard";
import WeeklyPlansArchive from "@/app/utils/WeeklyPlanArchive";


function WeeklyPlanArchive() {
  return (
    <section className="w-[100%] flex flex-col items-center my-[2rem]">
      <h3 className="text-[2rem] text-primary font-[600] p-4">Todos Nuestros Planes</h3>
      <div className="flex flex-col justify-center gap-[2.75rem] w-[95%] max-w-[1100px] mx-[2rem] my-[1rem]">
        {WeeklyPlansArchive.map((plan, i) => {
          return (
          <Link 
            key={"weeklyPlan" + i} 
            href={`/`}
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