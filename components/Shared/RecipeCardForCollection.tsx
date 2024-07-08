import Recipe from "../../types/recipe.d";
import Image from "next/image";

interface RecipeCardProps {
    recipe: Recipe
    extraInfo?: string
    isVegetarian?: boolean
}

function RecipeCardCollection(
    { recipe, extraInfo, isVegetarian }: RecipeCardProps
) {
    return (
        <div className="flex justify-center align-center border-dashed border-[1px] border-dark rounded-lg">
            <div
                className="recipe-card max-w-[330px] h-[400px] md:max-w-[225px] md:h-[380px]
                flex flex-col gap-4">

                {/* RECIPE IMAGE */}
                <div className="relative recipe-img w-[100%] h-[80%] ">
                    <Image
                        className="block object-cover w-[100%] h-[100%] object-right-center rounded-t-[7px]"
                        src={`/images/recipes/${recipe.img}`}
                        // alt={recipe.imgAlt} 
                        alt="un plato de comida"
                        width={666}
                        height={848}
                    />

                    {/* RECIPE NAME */}
                    <div className=" w-[100%] flex flex-col gap-2 justify-center items-center">
                        <div className="recipe-info flex flex-col w-[100%] gap-2 justify-center items-center px-[10px] py-[10px] bg-white bg-opacity-50">
                            <h4 className="recipe-title text-[.7rem] md:text-[.85rem] text-dark text-center font-[600]">
                                {recipe.name}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RecipeCardCollection;