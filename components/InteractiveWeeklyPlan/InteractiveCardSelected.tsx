'use client'

import recipes from "@/app/utils/recipes";
import Image from "next/image";
import InteractiveCardOption from "./InteractiveCardOption";

interface InteractiveCardSelectedProps {
    extraInfo: string
}

function InteractiveCardSelected(
    { extraInfo }: InteractiveCardSelectedProps
) {
    const recipe = recipes[8];
    const isVegetarian = false;

    function handleHover() {
        const optionsContainer = document.getElementById(`options-${extraInfo}`);
        optionsContainer?.classList.toggle("invisible");
    }

    function handleMouseLeave () {
        const optionsContainer = document.getElementById(`options-${extraInfo}`);
        optionsContainer?.classList.toggle("invisible");
    }

    return (
        <div className="flex flex-col gap-2 max-w-[330px]  md:w-[13%]">
            {/* ===== RECIPE CARD ====== */}
            <div 
                className="flex justify-center align-center border-[1px] border-primary rounded-lg h-[530px] md:max-h-[240px]"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                <div className="recipe-card  flex flex-col">

                    {/* RECIPE IMAGE */}
                    <div className="relative recipe-img w-[100%] h-[90%] md:h-[70%] rounded-t-lg">
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
                    <div className="recipe-info h-[10%] md:h-[30%] flex flex-col gap-2 justify-center p-2 bg-transparent">
                        <h4 className="recipe-title text-[.8rem] text-primary font-[600]">
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

            {/* SELECT ARROW */}
            {/* <div 
                className="flex justify-center items center bg-gray_2 rounded-md cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" className="arrow" fill="none" viewBox="0 0 24 24"><path className="stroke-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6" /></svg>
            </div> */}

            {/* Options card */}
            <div id={`options-${extraInfo}`} className={`options-${extraInfo} invisible flex flex-col justify-center items-center gap-4`}>
                <InteractiveCardOption
                    recipe={recipes[4]}
                />
                <InteractiveCardOption
                    recipe={recipes[6]}
                />
                <InteractiveCardOption
                    recipe={recipes[9]}
                />
            </div>
        </div>
    )
}

export default InteractiveCardSelected