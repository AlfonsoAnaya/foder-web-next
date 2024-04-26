import Recipe from "@/types/recipe.d"
import Image from "next/image"

interface InteractiveCardOptionProps {
    recipe: Recipe
}

function InteractiveCardOption(
    { recipe }: InteractiveCardOptionProps
) {

    const extraInfo = undefined;
    const isVegetarian = false

    return (

        <div className="flex justify-center align-center md:max-w-[150px] border-[1px] border-gray-400 hover:border-primary rounded-lg">
            <div className="recipe-card max-w-[330px] h-[530px] md:max-h-[220px] flex flex-col">

                {/* RECIPE IMAGE */}
                <div className="relative recipe-img w-[100%] h-[90%] md:h-[60%] rounded-t-lg">
                    <Image
                        className="block object-cover w-[100%] h-[100%] object-center rounded-t-lg"
                        src={`/images/recipes/${recipe.img}`}
                        // alt={recipe.imgAlt} 
                        alt="un plato de comida"
                        width={666}
                        height={848}
                    />
                    {extraInfo ?
                        <span className="absolute top-[10px] left-[50%] -translate-x-1/2 bg-tertiary py-[.3em] px-[1.1em] rounded-full font-sans text-darker text-[.75rem] font-[600]">
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
                <div className="recipe-info h-[10%] md:h-[50%] flex flex-col gap-2 justify-center p-2 bg-transparent">
                    <h4 className="recipe-title text-[.8rem] text-gray-600 font-[600]">
                        {recipe.name} con salsa de soya
                    </h4>
                    {/* <div className="small-info flex flex-row gap-4 text-secondary text-[.85rem] font-[500]">
                        <span >
                            {recipe.difficulty}
                        </span>
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default InteractiveCardOption