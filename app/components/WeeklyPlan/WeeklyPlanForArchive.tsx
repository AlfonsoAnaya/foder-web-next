'use client'

import { useState, useEffect } from "react";
import "./WeeklyPlan.css";
import Recipe from "../../types/recipe.d";
import WeeklyPlanDesktop from "./WeeklyPlanDesktop";
import WeeklyPlanMobile from "./WeeklyPlanMobile";
import Weekdays from "../../utils/Weekdays";
// import useCurrentDayStore from "@/app/ZustandStore/CurrentDayStore";
import useIsSidenavOpenStore from "@/app/ZustandStore/IsSidenavOpenStore";
import WeeklyPlansArchive from "@/app/utils/WeeklyPlansArchive";

interface WeeklyPlanProps {
    weeklyPlanNumber: number;
}


function WeeklyPlan({ weeklyPlanNumber }: WeeklyPlanProps) {

    const openSidenav = useIsSidenavOpenStore((state)=>state.isSidenavOpen);

    const weeksRecipes = WeeklyPlansArchive[weeklyPlanNumber];0    

    const [currentDayState, setCurrentDay] = useState(Weekdays[0]);
    const [currentRecipe, setCurrentRecipe] = useState(weeksRecipes[0]);
    const [isViewportMobile, setIsViewportMobile] = useState(window.innerWidth < 768);

    function handleNavClick(recipe: Recipe, day: string) {
        window.scrollTo(0, 0);
        setCurrentDay(day);
        setCurrentRecipe(recipe);
        if (isViewportMobile) {
            openRecipeSidenav();
        }
    };

    const openRecipeSidenav = () => {
        const WeeklySection = document.querySelector('.weekly-plan-section');
        WeeklySection?.classList.add("sidenav-open");
    };

    useEffect(() => {
        // Function to check if the viewport width is smaller than 768px
        const handleResize = () => {
            setIsViewportMobile(() => window.innerWidth < 768 ? true : false);
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        if (openSidenav) openRecipeSidenav();
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });


    return (
        <>
            <section className="relative weekly-plan-section w-[100%] flex flex-col items-center 
            mt-0 md:mt-4">

                {isViewportMobile ? (
                    <WeeklyPlanMobile
                        weeksRecipes={weeksRecipes}
                        currentRecipe={currentRecipe}
                        currentDay={currentDayState}
                        handleNavClick={handleNavClick}
                        Weekdays={Weekdays}
                        isWeekVegetarian={false}
                    />
                ) : (
                    <WeeklyPlanDesktop
                        weeksRecipes={weeksRecipes}
                        currentRecipe={currentRecipe}
                        handleNavClick={handleNavClick}
                        Weekdays={Weekdays}
                        currentDay={currentDayState}
                        isWeekVegetarian={false}
                    />
                )}
            </section>
        </>

    )
};

export default WeeklyPlan