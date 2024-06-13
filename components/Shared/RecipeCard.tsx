import Recipe from "../../types/recipe.d";
import Image from "next/image";

interface RecipeCardProps {
    recipe: Recipe
    extraInfo?: string
    isVegetarian?: boolean
}

function RecipeCard(
    { recipe, extraInfo, isVegetarian }: RecipeCardProps
    ) {
    return (
        <div className="flex justify-center align-center">
            <div
                className="recipe-card max-w-[330px] h-[530px] md:max-w-[240px] md:h-[430px]
                flex flex-col border-[1px] border-dark border-dashed rounded-lg bg-white">

                {/* RECIPE IMAGE */}
                <div className="relative recipe-img w-[100%] h-[90%] md:h-[80%] rounded-t-lg">
                    <Image
                        className="block object-cover w-[100%] h-[100%] object-right-center rounded-t-lg"
                        src={`/images/recipes/${recipe.img}`}
                        // alt={recipe.imgAlt} 
                        alt="un plato de comida"
                        width={666}
                        height={848}
                    />
                    {extraInfo ? 
                        <div className="absolute flex top-[10px] left-[10px] bg-primary py-[.4em] px-[1.4em] rounded-full font-sans text-darker text-[.9rem] font-[500]">
                            <span className="translate-y-[15%]">{extraInfo}</span>
                            {isVegetarian ?
                                <div className="flex justify-center items-center w-[35px] h-[35px] absolute bottom-[-10px] right-[-20px] rounded-full text-[.6rem] bg-secondary text-dark">
                                    <span className="translate-y-[15%] font-[700]">VEG</span>
                                </div> 
                                : ''}
                        </div>
                        : ''}
                </div>

                {/* RECIPE INFO */}
                <div className="recipe-info h-[10%] md:h-[20%] flex flex-col gap-2 justify-center p-2 bg-transparent">
                    <h4 className="recipe-title text-[.9rem] text-dark font-[600]">
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

export default RecipeCard;