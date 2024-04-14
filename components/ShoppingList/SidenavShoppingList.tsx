import Ingredient from "@/types/ingredientd.d"

interface SidenavShoppingListProps {
    closeShoppingListSidenav: any
    toggleStrikethrough: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
    ingredientsState: { [key: string]: Ingredient[] }
}

function SidenavShoppingList(
    {closeShoppingListSidenav,ingredientsState, toggleStrikethrough} : SidenavShoppingListProps
) {
    return (
        <div className="recipe-sidenav w-[100%] 
                    fixed top-[65px] left-0 right-0 bottom-0 
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
    )
}

export default SidenavShoppingList