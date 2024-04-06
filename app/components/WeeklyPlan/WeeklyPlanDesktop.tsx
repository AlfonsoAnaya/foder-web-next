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
}


function WeeklyPlanDesktop(
    { weeksRecipes,
        currentRecipe,
        handleNavClick,
        Weekdays,
        currentDay
    }: MyComponentProps) {

    const updateDay = useCurrentDayStore((state) => state.updateDay);
    // const dispatch = useDispatch();

    function handleClick(i: number) {
        updateDay(i);
    }

    return (
        <div className="flex flex-col items-center w-[95%] max-w-[1150px]">

            {/* Days navigation bar */}
            <nav className="sticky font-sans top-[73px] z-10 border-box bg-white py-[8px] w-[100%] flex flex-row justify-center gap-[.75em]">
                {Weekdays.map((day, i) => {
                    return (
                        <div className="relative" key={`Day ${Weekdays[i]}`}>
                            <span id={`Day ${Weekdays[i]}`}
                                onClick={() => {
                                    handleNavClick(weeksRecipes[i], Weekdays[i]);
                                    handleClick(i);
                                }}
                                className={day === currentDay ? "day-container relative py-[10px] weekday current hover:cursor-pointer hover:text-secondary px-2 font-[500]" : "day-container relative py-[10px] weekday hover:cursor-pointer hover:text-secondary px-2 font-[500]"}>
                                {day.toUpperCase()}
                                
                                {/* Bubble recipe name on hover */}
                                <span className="days-recipe-title opacity-0 absolute left-[-150%] w-[400%] top-[40px] text-center text-[.8rem]">
                                    <span className="text-dark bg-tertiary rounded-full py-2 px-4">
                                        {weeksRecipes[i].name}
                                    </span>
                                </span>
                            </span>
                            <span className={day === "Domingo" ? 'hidden' : 'ml-[.75em]'}>|</span>
                            
                        </div>
                        

                    )
                })}

            </nav>

            <article className="pl-2  static translate-x-0 bg-transparent overflow-y-scroll md:overflow-auto"
            >
                <RecipeDesktop
                    propsRecipe={currentRecipe}
                />
            </article>




        </div>

    )
};

export default WeeklyPlanDesktop