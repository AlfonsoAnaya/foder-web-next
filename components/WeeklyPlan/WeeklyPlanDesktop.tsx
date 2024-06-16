import "./WeeklyPlan.css";
import Recipe from "../../types/recipe.d";
// import { useDispatch } from 'react-redux';
import RecipeDesktop from "./RecipeDesktop";
import useCurrentDayStore from "@/app/ZustandStore/CurrentDayStore";

import "./WeeklyPlanDesktop.css"

interface MyComponentProps {
    weeksRecipes: Recipe[];
    currentRecipe: Recipe;
    handleNavClick: any;
    Weekdays: string[];
    currentDay: string;
    isWeekVegetarian: boolean;
}

function WeeklyPlanDesktop(
    { weeksRecipes,
        currentRecipe,
        handleNavClick,
        Weekdays,
        currentDay,
        isWeekVegetarian
    }: MyComponentProps) {

    const updateDay = useCurrentDayStore((state) => state.updateDay);
    // const dispatch = useDispatch();

    function handleClick(i: number) {
        updateDay(i);
    }

    return (
        <>
            <nav className="sticky font-sans top-[5px] z-[19] border-box bg-white py-[24px] text-[14px]
            w-[100%] flex flex-row justify-center gap-[.75em] border-b-[1px] border-dashed border-b-dark">
                {Weekdays.map((day, i) => {
                    return (
                        <div className="relative" key={`Day ${Weekdays[i]}`}>
                            <span id={`Day ${Weekdays[i]}`}
                                onClick={() => {
                                    handleNavClick(weeksRecipes[i], Weekdays[i]);
                                    handleClick(i);
                                }}
                                className={day === currentDay ? "day-container py-[10px] weekday current hover:cursor-pointer px-2 font-[500]" : "day-container relative py-[10px] weekday hover:cursor-pointer px-2 font-[500]"}>
                                {day.toUpperCase()}

                            </span>
                            {/* Bubble recipe name on hover */}
                            <span className="days-recipe-title opacity-0 absolute left-[calc(-150%-.75em)] w-[400%] top-[40px] text-center text-[.8rem]">
                                <span className="text-dark bg-tertiary rounded-full py-2 px-4">
                                    {weeksRecipes[i].name}
                                </span>
                            </span>
                            <span className={day === "Domingo" ? 'hidden' : 'ml-[.75em]'}>|</span>
                        </div>


                    )
                })}

            </nav>
            <div className="flex flex-col items-center w-[95%] max-w-[1200px]">
                <article className="pl-2  static translate-x-0 bg-transparent overflow-y-scroll md:overflow-auto"
                >
                    <RecipeDesktop
                        recipe={currentRecipe}
                        isWeekVegetarian={isWeekVegetarian}
                    />
                </article>
            </div>
        </>
    )
};

export default WeeklyPlanDesktop