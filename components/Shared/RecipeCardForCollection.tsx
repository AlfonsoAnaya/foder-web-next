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
        <div className="flex justify-center align-center">
            <div
                className="recipe-card max-w-[330px] h-[400px] md:max-w-[250px] md:h-[380px]
                flex flex-col gap-4">

                {/* RECIPE IMAGE */}
                <div className="relative recipe-img w-[100%] h-[100%] rounded-lg">
                    <Image
                        className="block object-cover w-[100%] h-[100%] object-right-center rounded-lg"
                        src={`/images/recipes/${recipe.img}`}
                        // alt={recipe.imgAlt} 
                        alt="un plato de comida"
                        width={666}
                        height={848}
                    />

                    {/* RECIPE INFO */}
                    <div className="absolute top-[15px] w-[100%] flex flex-col gap-2 justify-center items-center px-8 md:px-2">
                        <div className="recipe-info flex flex-col gap-2 justify-center items-center px-[10px] py-[4px] bg-tertiary rounded-full">
                            <h4 className="recipe-title text-[.8rem] md:text-[.95rem] text-dark  text-center font-[600]">
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