'use client'

import { useState, useEffect } from "react";
import "./WeeklyPlan.css";
import currentWeekRecipes from "../../app/utils/CurrentWeek/CurrentWeekRecipes";
import currentWeekRecipesVeg from "@/app/utils/CurrentWeek/CurrentWeekRecipesVeg";
import Recipe from "../../types/recipe.d";
import WeeklyPlanDesktop from "./WeeklyPlanDesktop";
import WeeklyPlanMobile from "./WeeklyPlanMobile";
import Weekdays from "../../app/utils/Weekdays";
import ShoppingListButton from "./ShoppingListButton";
import useCurrentDayStore from "@/app/ZustandStore/CurrentDayStore";
import useIsSidenavOpenStore from "@/app/ZustandStore/IsSidenavOpenStore";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";
import Link from "next/link";


interface WeeklyPlanProps {
    isWeekVegetarian: boolean;
}

function WeeklyPlan({ isWeekVegetarian }: WeeklyPlanProps) {
    const setCurrentNavSection = useCurrentNavSectionStore((state) => state.updateCurrentNavSection);
  
    useEffect(() => {
        if (isWeekVegetarian) {
            setCurrentNavSection('plan-actual-vegetariano');
        } else {
            setCurrentNavSection('plan-actual');
        }
      
    }, []);

    const openSidenav = useIsSidenavOpenStore((state) => state.isSidenavOpen);

    const weeksRecipes = isWeekVegetarian ? currentWeekRecipesVeg : currentWeekRecipes;
    const currentDayFromZustand = useCurrentDayStore((state) => state.currentDay);


    const [currentDayState, setCurrentDay] = useState(Weekdays.omnivore[currentDayFromZustand]);
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
            
            <Link href={ isWeekVegetarian ? 
                "/plan-actual-vegetariano/lista-de-compras": 
                "/plan-actual/lista-de-compras"}>
                <ShoppingListButton />
            </Link>
                
            
            <section className="relative weekly-plan-section w-[100%] flex flex-col items-center 
            mt-0 md:mt-4">

                {isViewportMobile ? (
                    <WeeklyPlanMobile
                        weeksRecipes={weeksRecipes}
                        currentRecipe={currentRecipe}
                        currentDay={currentDayState}
                        handleNavClick={handleNavClick}
                        Weekdays={Weekdays.omnivore}
                        isWeekVegetarian={isWeekVegetarian}
                    />
                ) : (
                    <WeeklyPlanDesktop
                        weeksRecipes={weeksRecipes}
                        currentRecipe={currentRecipe}
                        handleNavClick={handleNavClick}
                        Weekdays={Weekdays.omnivore}
                        currentDay={currentDayState}
                        isWeekVegetarian={isWeekVegetarian}
                    />
                )}
            </section>
        </>

    )
};

export default WeeklyPlan