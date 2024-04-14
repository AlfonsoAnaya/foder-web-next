import Ingredient from "@/types/ingredientd.d"

interface DesktopShoppingListProps {
    toggleStrikethrough: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
    ingredientsState: { [key: string]: Ingredient[] }
}

function DesktopShoppingList(
    { ingredientsState, toggleStrikethrough }: DesktopShoppingListProps
) {
    return (
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
    )
}

export default DesktopShoppingList