'use client'
import { useState, useEffect } from "react";
import Ingredient from "../../types/ingredientd.d";
import currentWeekRecipes from "../../utils/CurrentWeekRecipes";
import RecipeCategories from "../../utils/RecipeCategories";
import "./ShoppingList.css";
import ShoppingListCard from "./ShoppingListWeeklyCard";

const { IngredientCategories } = RecipeCategories;

const initialIngredientsState = Object.fromEntries(
    IngredientCategories.map((category: string) => [category, []])
);


function ShoppingList() {
    const [ingredientsState, setIngredientsState] = useState<{ [key: string]: Ingredient[] }>(initialIngredientsState);
    const [selectedRecipes, setSelectedRecipes] = useState<number[]>([])
    const [listIngredients, setListIngredients] = useState<Ingredient[]>([]);
    const weeklyRecipes = currentWeekRecipes;


    const weekDays = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
    ];

    const updateIngredientsState = (category: string, newIngredient: Ingredient) => {
        setIngredientsState((prevState) => {
            const updatedCategoryIngredients = [...prevState[category], newIngredient];
            return {
                ...prevState,
                [category]: updatedCategoryIngredients
            };
        });
    };

    // UPDATE THE LIST OF INGREDIENTS EACH TIME THE SELECTED RECIPES CHANGE
    useEffect(() => {
        setListIngredients([]);
        setListIngredients(prevListIngredients => {
            let updatedIngredients = [...prevListIngredients]; // Create a copy of prevListIngredients
            let updatedWeeklyRecipes = JSON.parse(JSON.stringify(weeklyRecipes)); // Create a deep copy of weeklyRecipes

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
    }, [selectedRecipes, weeklyRecipes]);
    

    // UPDATE THE STATE HOLDING THE INGREDIENTS BY CATEGORY EACH TIME THE LIST OF INGREDIENTS CHANGE
    useEffect(() => {
        setIngredientsState(initialIngredientsState);
        listIngredients.forEach((ingredient) => {
            updateIngredientsState(ingredient.category, ingredient)
        })
    }, [listIngredients])

    // TOGGLE STRIKETHROUGH
    const toggleStrikethrough = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.currentTarget.classList.toggle("line-through");
        e.currentTarget.classList.toggle("text-gray-500");
        e.currentTarget.classList.toggle("selected-ingredient")
    }

    // ADD AND DELETE RECIPES FROM SELECTION
    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, day: string) {
        const dayNum = parseInt(day) - 1;

        if (!selectedRecipes.includes(dayNum)) {
            setSelectedRecipes((prevState) => [...prevState, dayNum]);
        } else {
            let newState = [...selectedRecipes];
            newState.splice(newState.indexOf(dayNum), 1);
            setSelectedRecipes(newState);
        }

        e.currentTarget.classList.toggle("selected-day")
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
            <div className="max-w-[1100px] w-[100%] flex gap-8"
            >
                <div className="w-[100%] md:w-[30%] flex flex-col items-center gap-2">
                    {isViewportMobile ?
                        <h3
                            className="text-dark font-[500] text-[1.25rem] text-center mt-2 mb-2">
                            ¿Cuáles recetas quieres agregar a tu lista de compras?
                        </h3>
                        : ''}
                    <div className="w-[100%] flex flex-col gap-[.5em]">
                        {weeklyRecipes.map((recipe, i) => {
                            return (
                                <div key={`Day ${i}`} id={`Day ${i + 1}`}>
                                    <div
                                        className={`border-b-[1px] border-b-gray-500 flex flex-col`}
                                    >
                                        <div
                                            className="hover:cursor-pointer"
                                            onClick={(e) => handleClick(e, weekDays[i])}
                                        >
                                            <ShoppingListCard
                                                recipe={recipe}
                                                weekDay={weekDays[i]}
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
                    <div className="recipe-sidenav w-[100%] 
                    fixed top-[57px] left-0 right-0 bottom-0 
                    translate-x-[calc(100%)] 
                    backdrop-blur-[2px] bg-[#31313138]"
                        onClick={(e) => closeShoppingListSidenav(e)}>
                        <article className="h-auto p-[10px] md:pl-2 w-[calc(100%-40px)]  
                            fixed top-[0] left-[40px] right-0 bottom-0 bg-white overflow-y-scroll "
                        >
                            <div className="hover:cursor-pointer mb-2
                                block md:hidden "
                                onClick={(e) => closeShoppingListSidenav(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" data-name="Layer 1" viewBox="0 0 52 52"
                                    className="fill-[#929292]"
                                    onClick={(e) => closeShoppingListSidenav(e)}
                                >
                                    <path onClick={(e) => closeShoppingListSidenav(e)} d="M50 24H6.83L27.41 3.41a2 2 0 0 0 0-2.82 2 2 0 0 0-2.82 0l-24 24a1.79 1.79 0 0 0-.25.31 1.19 1.19 0 0 0-.09.1c0 .07-.07.13-.1.2l-.06.2a.84.84 0 0 0 0 .17 2 2 0 0 0 0 .78.84.84 0 0 0 0 .17l.06.2c0 .07.07.13.1.2a1.19 1.19 0 0 0 .09.15 1.79 1.79 0 0 0 .25.31l24 24a2 2 0 1 0 2.82-2.82L6.83 28H50a2 2 0 0 0 0-4Z" />
                                </svg>
                                <h3 className="font-[600]  underline text-[1.1rem] mt-2 ">Lista de Compras</h3>
                                <ul>

                                    {/* MAP THROUGH THE KEYS OF THE OBEJCT HOLDING THE CATEGORIZED INGREDIENTS */}
                                    {Object.keys(ingredientsState).map((key) => {
                                        return (

                                            // RENDER A CATEGORY TITLE ONLY WHEN IT CONTAINS AT LEAST ONE ELEMENT
                                            ingredientsState[key].length > 0 ?
                                                <div key={key} className="font-sans">
                                                    <h3 className="text-[1.1rem] md:text-[1.25rem] font-[600]">{key}</h3>
                                                    <ul className="mb-[1em]
                                            text-[1rem] md:text-[1.1rem]
                                            font-[300] md:font-[400]">

                                                        {/* RENDER THE LIST OF INGREDIENTS IN EACH KEY  */}
                                                        {ingredientsState[key].map((ingredient: Ingredient, i: number) => {
                                                            return (
                                                                <li key={ingredient.name.singular + i}
                                                                    className="shopping-list-item mb-[.5em] flex gap-2 items-center hover:cursor-pointer"
                                                                    onClick={toggleStrikethrough}>
                                                                    <span className="checkbox flex justify-center items-center">
                                                                        <span className="checkmark"></span>
                                                                    </span>
                                                                    {ingredient.unit === "unidad" ?
                                                                        (ingredient.quantity > 1 ?
                                                                            <span>{`${ingredient.quantity} ${ingredient.name.plural} `}</span>
                                                                            : <span>{`${ingredient.quantity} ${ingredient.name.singular} `}</span>
                                                                        )
                                                                        : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular} `}</span>
                                                                    }
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                                : ''
                                        )
                                    })}

                                </ul>
                            </div>
                        </article>

                    </div>

                    :
                    <div className="w-[60%]">
                        <h3 className="font-[600] mb-[.5rem] underline text-[1.5rem] mt-0">
                            Lista de compras
                        </h3>
                        <ul>

                            {/* MAP THROUGH THE KEYS OF THE OBEJCT HOLDING THE CATEGORIZED INGREDIENTS */}
                            {Object.keys(ingredientsState).map((key) => {
                                return (

                                    // RENDER A CATEGORY TITLE ONLY WHEN IT CONTAINS AT LEAST ONE ELEMENT
                                    ingredientsState[key].length > 0 ?
                                        <div key={key} className="font-sans">
                                            <h3 className="text-[1.25rem] font-[600]">{key}</h3>
                                            <ul className="mb-[1em] text-[1.1rem] font-[400]">

                                                {/* RENDER THE LIST OF INGREDIENTS IN EACH KEY  */}
                                                {ingredientsState[key].map((ingredient: Ingredient, i: number) => {
                                                    return (
                                                        <li key={ingredient.name.singular + i}
                                                            className="shopping-list-item mb-[.5em] flex gap-2 items-center hover:cursor-pointer"
                                                            onClick={toggleStrikethrough}>
                                                            <span className="checkbox flex justify-center items-center">
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            {ingredient.unit === "unidad" ?
                                                                (ingredient.quantity > 1 ?
                                                                    <span>{`${ingredient.quantity} ${ingredient.name.plural} `}</span>
                                                                    : <span>{`${ingredient.quantity} ${ingredient.name.singular} `}</span>
                                                                )
                                                                : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular} `}</span>
                                                            }
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        : ''
                                )
                            })}

                        </ul>
                    </div>
                }

            </div>


        </section>
    )
}

export default ShoppingList;