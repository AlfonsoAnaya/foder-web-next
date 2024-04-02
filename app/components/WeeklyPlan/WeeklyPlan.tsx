'use client'

import { useState, useEffect } from "react";
import "./WeeklyPlan.css";
import currentWeekRecipes from "../../utils/CurrentWeekRecipes";
import currentWeekRecipesVeg from "@/app/utils/CurrentWeekRecipesVeg";
import Recipe from "../../types/recipe.d";
import WeeklyPlanDesktop from "./WeeklyPlanDesktop";
import WeeklyPlanMobile from "./WeeklyPlanMobile";
import Weekdays from "../../utils/Weekdays";
import VegetarianButton from "./VegetarianButton";
import useCurrentDayStore from "@/app/ZustandStore/CurrentDayStore";
import useIsSidenavOpenStore from "@/app/ZustandStore/IsSidenavOpenStore";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";
import Link from "next/link";
import OmnivoreButton from "./OmnivoreButton";

interface WeeklyPlanProps {
    isWeekVegetarian: boolean;
}

function WeeklyPlan({ isWeekVegetarian }: WeeklyPlanProps) {
    const setCurrentNavSection = useCurrentNavSectionStore((state) => state.updateCurrentNavSection);
  
    useEffect(() => {
      setCurrentNavSection('plan-actual');
    }, []);

    const openSidenav = useIsSidenavOpenStore((state) => state.isSidenavOpen);

    const weeksRecipes = isWeekVegetarian ? currentWeekRecipesVeg : currentWeekRecipes;
    const currentDayFromZustand = useCurrentDayStore((state) => state.currentDay);


    const [currentDayState, setCurrentDay] = useState(Weekdays[currentDayFromZustand]);
    const [currentRecipe, setCurrentRecipe] = useState(weeksRecipes[currentDayFromZustand]);
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
            {
            isWeekVegetarian ?
                <Link href="/plan-semanal">
                    <OmnivoreButton />
                </Link>
                :
                <Link href="/plan-actual-vegetariano">
                    <VegetarianButton />
                </Link>
            }
            
            <section className="relative weekly-plan-section w-[100%] flex flex-col items-center 
            mt-0 md:mt-4">

                {isViewportMobile ? (
                    <WeeklyPlanMobile
                        weeksRecipes={weeksRecipes}
                        currentRecipe={currentRecipe}
                        currentDay={currentDayState}
                        handleNavClick={handleNavClick}
                        Weekdays={Weekdays}
                    />
                ) : (
                    <WeeklyPlanDesktop
                        weeksRecipes={weeksRecipes}
                        currentRecipe={currentRecipe}
                        handleNavClick={handleNavClick}
                        Weekdays={Weekdays}
                        currentDay={currentDayState}
                    />
                )}
            </section>
        </>

    )
};

export default WeeklyPlan