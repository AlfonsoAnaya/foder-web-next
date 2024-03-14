import Recipe from "../../types/recipe.d";

function ShoppingListCard(
    { recipe, weekDay }: { recipe: Recipe; weekDay: string }
) {
    return (
        <div
            className="recipe-card-weekly flex flex-row justify-center items-center h-[55px] gap-2">

            {/* Checkbox */}
            <div className="day-checkbox w-[10%] flex justify-center items-center">
                <span className="day-checkmark"></span>
            </div>

            {/* RECIPE INFO */}
            <div className="text-center flex flex-col w-[90%] justify-center items-center gap-[.25rem] font-sans font-[400] py-2">
                <h3
                    className="recipe-title text-[.95rem] text-dark opacity-70 font-serif font-[400]
                leading-[22px]">
                    {recipe.name}
                </h3>
            </div>
        </div>
    );
}

export default ShoppingListCard;