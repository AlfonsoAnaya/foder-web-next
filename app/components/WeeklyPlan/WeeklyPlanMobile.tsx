import RecipeMobile from "./RecipeMobile";
import WeeklyPlanCard from "./WeeklyPlanCard";
import Recipe from "../../types/recipe.d";
import { useRef } from "react";

interface MyComponentProps {
    weeksRecipes: Recipe[];
    currentRecipe: Recipe;
    currentDay: string;
    handleNavClick: any;
    Weekdays: string[],
}

function WeeklyPlanMobile(
    { weeksRecipes,
        currentRecipe,
        currentDay,
        handleNavClick,
        Weekdays }: MyComponentProps) {

    const closeRecipeSidenav = (e: any) => {
        if (e.target === e.currentTarget) {
            const WeeklySection = document.querySelector('.weekly-plan-section');
            WeeklySection?.classList.remove("sidenav-open");
        }
    };

    const sidenavRef = useRef(null);


    return (
        <>
            <div className="max-w-[1150px] w-[100%] border-b-[1px] border-b-secondary
                block md:hidden"
            >
                <h2 className="text-secondary text-left font-serif text-[1.5rem] pl-8 py-6">
                    Plan Semanal
                </h2>
            </div>

            {/* Week and Recipe Flex Container */}
            <div className="flex flex-col items-center md:items-start md:flex-row w-[95%] gap-[2em] max-w-[1150px]">
                <nav className="w-[100%] md:w-[30%] flex flex-col gap-[.5em]">
                    {weeksRecipes.map((recipe, i) => {
                        return (
                            <div key={`Day ${i}`} id={`Day ${i + 1}`}>
                                <div
                                    className={`border-b-[1px] border-b-gray-500 flex flex-col ${(Weekdays[i] === currentDay) ? 'current-day pb-[0px]' : 'pb-[1px]'}`}
                                >
                                    <div
                                        className="hover:cursor-pointer"
                                        onClick={() => handleNavClick(recipe, Weekdays[i], sidenavRef)}
                                    >
                                        <WeeklyPlanCard
                                            recipe={recipe}
                                            weekDay={Weekdays[i]}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </nav>

                {/* SIDENAV WITH RECIPE */}

                <div className="recipe-sidenav w-[100%] z-[2] 
                    fixed top-[65px] left-0 right-0 bottom-0 
                    translate-x-[calc(100%)] 
                    backdrop-blur-[2px] bg-[#31313138] "
                    onClick={(e) => closeRecipeSidenav(e)}>
                    <article ref={sidenavRef} className="h-auto p-[10px] md:pl-2 w-[calc(100%-40px)]  
                            fixed top-[0] left-[40px] right-0 bottom-0 bg-white overflow-y-scroll "
                    >
                        <div className="hover:cursor-pointer mb-2
                                block md:hidden "
                            onClick={(e) => closeRecipeSidenav(e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" data-name="Layer 1" viewBox="0 0 52 52"
                                className="fill-[#929292]"
                                onClick={(e) => closeRecipeSidenav(e)}
                            >
                                <path onClick={(e) => closeRecipeSidenav(e)} d="M50 24H6.83L27.41 3.41a2 2 0 0 0 0-2.82 2 2 0 0 0-2.82 0l-24 24a1.79 1.79 0 0 0-.25.31 1.19 1.19 0 0 0-.09.1c0 .07-.07.13-.1.2l-.06.2a.84.84 0 0 0 0 .17 2 2 0 0 0 0 .78.84.84 0 0 0 0 .17l.06.2c0 .07.07.13.1.2a1.19 1.19 0 0 0 .09.15 1.79 1.79 0 0 0 .25.31l24 24a2 2 0 1 0 2.82-2.82L6.83 28H50a2 2 0 0 0 0-4Z" />
                            </svg>
                        </div>

                        <RecipeMobile
                            recipe={currentRecipe}
                        />
                    </article>
                </div>





            </div>
        </>
    )
}


export default WeeklyPlanMobile