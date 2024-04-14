'use client'
import { useState, useEffect } from "react";
import Recipe from "@/types/recipe.d";
import Ingredient from "../../types/ingredientd.d";
import RecipeCategories from "../../app/utils/RecipeCategories";
import ShoppingListCard from "./ShoppingListWeeklyCard";
import SidenavShoppingList from "./SidenavShoppingList";
import DesktopShoppingList from "./DesktopShoppingList";
import "./ShoppingList.css";


interface ShoppingListProps {
    recipes: Recipe[]
    isWeekVegetarian: boolean
}

function ShoppingList({ recipes, isWeekVegetarian }: ShoppingListProps) {

    const { IngredientCategories } = RecipeCategories;

    const initialIngredientsState = Object.fromEntries(
        IngredientCategories.map((category: string) => [category, []])
    );

    const [ingredientsState, setIngredientsState] = useState<{ [key: string]: Ingredient[] }>(initialIngredientsState);
    const [selectedRecipes, setSelectedRecipes] = useState<number[]>([]);
    const [listIngredients, setListIngredients] = useState<Ingredient[]>([]);
    const localStorageKey = isWeekVegetarian ? "recipesVegetarian" : "recipesOmnivore";
    const [clicks, setClicks] = useState(0);

    //initialize local storage
    useEffect(() => {
        const localStorageRecipes = localStorage.getItem(localStorageKey);
        if (localStorageRecipes !== null) {
            setSelectedRecipes(JSON.parse(localStorageRecipes));
        } else {
            localStorage.setItem(localStorageKey, JSON.stringify([]));
        }
    }, []);

    //update local storage on selected changes
    useEffect(() => {
        if (clicks > 0) localStorage.setItem(localStorageKey, JSON.stringify(selectedRecipes))
    }, [clicks]);

    const updateIngredientsState = (category: string, newIngredient: Ingredient) => {
        setIngredientsState((prevState) => {
            const updatedCategoryIngredients = [...prevState[category], newIngredient];
            return {
                ...prevState,
                [category]: updatedCategoryIngredients
            };
        });
    };

    // UPDATE THE STATE HOLDING THE INGREDIENTS BY CATEGORY EACH TIME THE LIST OF INGREDIENTS CHANGE
    useEffect(() => {
        setIngredientsState(initialIngredientsState);
        listIngredients.forEach((ingredient) => {
            updateIngredientsState(ingredient.category, ingredient)
        })
    }, [listIngredients]);

    // UPDATE THE LIST OF INGREDIENTS EACH TIME THE SELECTED RECIPES CHANGE
    useEffect(() => {
        setListIngredients([]);
        setListIngredients(prevListIngredients => {
            let updatedIngredients = [...prevListIngredients]; // Create a copy of prevListIngredients
            let updatedWeeklyRecipes = JSON.parse(JSON.stringify(recipes)); // Create a deep copy of weeklyRecipes

            selectedRecipes.forEach(i => {
                updatedWeeklyRecipes[i].ingredients.forEach((ingredient: Ingredient) => {
                    const existingIngredientIndex = updatedIngredients.findIndex(
                        listIng => listIng.name.singular === ingredient.name.singular
                    );
                    if (existingIngredientIndex !== -1) {
                        // Ingredient exists, update quantity
                        updatedIngredients[existingIngredientIndex].quantity += ingredient.quantity;
                    } else {
                        // Ingredient does not exist, add it
                        updatedIngredients.push(ingredient);
                    }
                });
                //when recipe has extra Ingredients...
                updatedWeeklyRecipes[i].extraIngredients?.forEach((ingredient: Ingredient) => {
                    const existingIngredientIndex = updatedIngredients.findIndex(
                        listIng => listIng.name.singular === ingredient.name.singular
                    );
                    if (existingIngredientIndex !== -1) {
                        // Ingredient exists, update quantity
                        updatedIngredients[existingIngredientIndex].quantity += ingredient.quantity;
                    } else {
                        // Ingredient does not exist, add it
                        updatedIngredients.push(ingredient);
                    }
                });
            });
            return updatedIngredients; // Return the updated array
        });
    }, [selectedRecipes, recipes]);

    // TOGGLE STRIKETHROUGH
    const toggleStrikethrough = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.currentTarget.classList.toggle("line-through");
        e.currentTarget.classList.toggle("text-gray-500");
        e.currentTarget.classList.toggle("selected-ingredient")
    }

    // ADD AND DELETE RECIPES FROM SELECTION
    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, day: number) {
        setClicks(prevState => prevState + 1)
        if (!selectedRecipes.includes(day)) {
            setSelectedRecipes((prevState) => [...prevState, day]);
        } else {
            let newState = [...selectedRecipes];
            newState.splice(newState.indexOf(day), 1);
            setSelectedRecipes(newState);
        }
    };

    // boolean state to store whether the viewport is mobile
    const [isViewportMobile, setIsViewportMobile] = useState(false);

    useEffect(() => {
        // Function to check if the viewport width is smaller than 768px
        const handleResize = () => {
            setIsViewportMobile(window.innerWidth < 768);
        };
        // Initial check on component mount
        handleResize();
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // OPEN SHOPPING LIST SIDENAV
    const openShoppingListSidenav = () => {
        const WeeklySection = document.querySelector('.shopping-list-section');
        console.log(WeeklySection)
        WeeklySection?.classList.add("sidenav-open");
    };

    // CLOSE SHOPPING LIST SIDENAV
    const closeShoppingListSidenav = (e: any) => {
        if (e.target === e.currentTarget) {
            const WeeklySection = document.querySelector('.shopping-list-section');
            WeeklySection?.classList.remove("sidenav-open");
        }

    }

    return (
        <section className="shopping-list-section w-[100%] flex flex-col items-center p-4 mt-0 md:mt-12">
            <div className="max-w-[1100px] w-[100%] flex gap-8">
                <div className="w-[100%] md:w-[30%] flex flex-col items-center gap-2">
                    {isViewportMobile ?
                        <h3
                            className="text-dark font-[500] text-[1.25rem] text-center mt-2 mb-2">
                            ¿Cuáles recetas quieres agregar a tu lista de compras?
                        </h3>
                        : ''}
                    <div className="w-[100%] flex flex-col gap-[.5em]">
                        {recipes.map((recipe, i) => {
                            return (
                                <div key={`Day ${i}`} id={`Day ${i + 1}`}>
                                    <div
                                        className={`border-b-[1px] border-b-gray-500 flex flex-col hover:cursor-pointer`}
                                    >
                                        <div
                                            className={selectedRecipes.includes(i) ? "selected-day" : ""}
                                            onClick={(e) => handleClick(e, i)}
                                        >
                                            <ShoppingListCard
                                                recipe={recipe}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {isViewportMobile ?
                        <button className="text-white font-bold bg-primary py-[.6em] px-[1.75em] rounded-full mt-6 hover:text-primary hover:bg-white border-[2px] border-primary"
                            onClick={openShoppingListSidenav}>
                            Lista de compras
                        </button>
                        : ''}

                </div>


                {isViewportMobile ?
                    <SidenavShoppingList 
                        closeShoppingListSidenav={closeShoppingListSidenav}
                        toggleStrikethrough={toggleStrikethrough}
                        ingredientsState={ingredientsState}
                    />

                    :
                    <DesktopShoppingList 
                        toggleStrikethrough={toggleStrikethrough}
                        ingredientsState={ingredientsState}
                    />
                }

            </div>


        </section>
    )
}

export default ShoppingList;