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

    const currentDay: number = useSelector(selectedDay);
    const openSidenav: boolean = useSelector(isSidenavOpen);

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
        <>
            <div className="fixed btn-vegetarian-toggle top-[73px] right-[50px] md:top-[100px] md:right-[50px] z-[999] border-[1px] hover:cursor-pointer border-vegetarianGreen rounded-full p-2 hover:bg-vegetarianGreen">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="fill-vegetarianGreen hover:fill-white" viewBox="-7.5 0 32 32"><path d="M17.067 16.693c0-7.147-4.8-12.373-8.533-16.693C4.801 4.32.001 9.547.001 16.693c0 6.72 4.96 8.48 8 9.44V32h1.067v-5.867c3.04-.96 8-2.72 8-9.44zm-8 8.32v-4.16l3.36-3.36-.747-.747-2.613 2.613V8.532H8v5.12l-2.773-2.773-.747.747L8 15.146v9.867c-2.933-.96-6.933-2.613-6.933-8.32 0-6.24 3.893-10.933 7.467-15.04 3.573 4.107 7.467 8.8 7.467 15.04 0 5.707-4 7.36-6.933 8.32z" /></svg>
            </div>
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