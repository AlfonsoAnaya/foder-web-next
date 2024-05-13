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
                className="recipe-card max-w-[330px] h-[530px] md:max-w-[240px] md:h-[430px]
                flex flex-col gap-4">

                {/* RECIPE IMAGE */}
                <div className="relative recipe-img w-[100%] h-[90%] md:h-[85%] rounded-lg">
                    <Image
                        className="block object-cover w-[100%] h-[100%] object-right-center rounded-lg"
                        src={`/images/recipes/${recipe.img}`}
                        // alt={recipe.imgAlt} 
                        alt="un plato de comida"
                        width={666}
                        height={848}
                    />
                    {extraInfo ? 
                        <span className="absolute top-[10px] left-[10px] bg-tertiary py-[.4em] px-[1.4em] rounded-full font-sans text-darker text-[1rem] font-[600]">
                            {extraInfo}
                            {isVegetarian ?
                                <div className=" flex justify-center items-center w-[35px] h-[35px] absolute bottom-[-10px] right-[-20px] rounded-full text-[.8rem] bg-vegetarianGreen text-white font-[700]">
                                    VEG
                                </div> 
                                : ''}
                        </span>
                        : ''}
                </div>

                {/* RECIPE INFO */}
                <div className="recipe-info h-[10%] md:h-[15%] flex flex-col gap-2 justify-start px-2 bg-transparent">
                    <h4 className="recipe-title text-[.95rem] text-primary   font-[500]">
                        {recipe.name}
                    </h4>
                    {/* <div className="small-info flex flex-row gap-4 text-secondary text-[.85rem] font-[500]">
                        <span >
                            {recipe.difficulty}
                        </span>
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default RecipeCardCollection;