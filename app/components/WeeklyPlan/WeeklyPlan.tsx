'use client'

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectedDay } from '@/lib/features/selectedDay';
import { isSidenavOpen } from "@/lib/features/isSidenavOpen";
import "./WeeklyPlan.css";
import currentWeekRecipes from "../../utils/CurrentWeekRecipes";
import Recipe from "../../types/recipe.d";
import WeeklyPlanDesktop from "./WeeklyPlanDesktop";
import WeeklyPlanMobile from "./WeeklyPlanMobile";
import Weekdays from "../../utils/Weekdays";

function WeeklyPlan() {

    const currentDay:number = useSelector(selectedDay);
    const openSidenav:boolean = useSelector(isSidenavOpen);

    const weeksRecipes = currentWeekRecipes;

    const [currentDayState, setCurrentDay] = useState(Weekdays[currentDay]);
    const [currentRecipe, setCurrentRecipe] = useState(weeksRecipes[currentDay]);
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
        <section className="weekly-plan-section w-[100%] flex flex-col items-center 
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
    )
};

export default WeeklyPlan