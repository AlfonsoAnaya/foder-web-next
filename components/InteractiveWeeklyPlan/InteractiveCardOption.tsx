import Recipe from "@/types/recipe.d";
import Image from "next/image";
import { RxLapTimer } from "react-icons/rx";
import './InteractiveWeeklyPlan.css'


interface InteractiveCardOptionProps {
    recipe: Recipe
    handleSelectRecipe: any
    selectedOptions: any
    day: string
    i: number
    
}

function InteractiveCardOption(
    { recipe, handleSelectRecipe, selectedOptions, day, i }: InteractiveCardOptionProps
) {

    const extraInfo = undefined;
    const isVegetarian = false

    return (
        <div 
            className={`${
                selectedOptions[day] === i ? 'modal-card-selected relative ' : ''
              } card-option flex w-[45%] md:w-[150px] h-[200px] md:h-[530px] md:max-h-[220px] justify-center align-center  bg-gray_2  cursor-pointer`}
            onClick={() => handleSelectRecipe(i)}
        >
            <div className="recipe-card border-[1px] border-gray-400 hover:border-primary rounded-lg flex flex-col w-[100%]">

                {/* RECIPE IMAGE */}
                <div className="relative recipe-img w-[100%] h-[60%] rounded-t-lg">
                    <Image
                        className="block object-cover w-[100%] h-[100%] object-center rounded-t-[7px]"
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
                <div className="recipe-info h-[10%] md:h-[50%] flex flex-col gap-2 justify-start p-2 bg-transparent">
                    <h4 className="recipe-title text-[.8rem] text-dark font-[600]">
                        {recipe.name}
                    </h4>
                    <div className="small-info font-sans flex flex-wrap flex-row  gap-1 md:gap-2 text-darker text-[.65rem] font-[600]
                            [&>*]:bg-gray-200 [&>*]:py-[.3em] [&>*]:px-[.7em] [&>*]:rounded-sm">
                            {/* <span className="flex gap-1 justify-center items-center">
                                <RxLapTimer className="text-[1rem]" /> total: {recipe.totalTime} min.
                            </span> */}
                            <span className="flex gap-1 justify-center items-center">
                                <RxLapTimer className="text-[1rem]" /> prep: {recipe.prepTime} min.
                            </span>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default InteractiveCardOption