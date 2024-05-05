'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
// import InteractiveCardOption from "./InteractiveCardOption";
import InteractivePlanRecipes from "@/types/interactivePlanRecipes.d";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { RxLapTimer } from "react-icons/rx";

interface InteractiveCardSelectedProps {
    toggleModal: any
    day: InteractivePlanRecipes
    setRecipeOptions: any
    setModalDay: any
    selectedOptions: any
}

function CardSelectedRecipe(
    { toggleModal, day, setRecipeOptions, setModalDay, selectedOptions }: InteractiveCardSelectedProps
) {

    const [showChangeButton, setShowChangeButton] = useState(false);
    const selectedRecipe = day.options[selectedOptions[day.day]];
    const isVegetarian = false;


    function handleHover() {
        setShowChangeButton(true);
    }

    function handleMouseLeave() {
        setShowChangeButton(false);
    }

    function handleUpdateOptions() {
        setRecipeOptions(day.options)
    }

    return (
        <div
            className="flex relative flex-col gap-2 md:max-w-[330px] px-1"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            {/* ===== RECIPE CARD ====== */}
            <div
                className="flex justify-center align-center border-[1px] border-primary rounded-lg h-[65vh] md:max-h-[330px]"

            >
                <div className="recipe-card  flex flex-col">

                    {/* RECIPE IMAGE */}
                    <div className="relative recipe-img w-[100%] h-[80%] md:h-[70%] rounded-t-lg">
                        <Image
                            className="block object-cover w-[100%] h-[100%] object-center rounded-t-[7px]"
                            src={`/images/recipes/${selectedRecipe.img}`}
                            // alt={recipe.imgAlt}
                            alt="un plato de comida"
                            width={666}
                            height={848}
                        />
                        <span className="absolute top-[10px] left-[50%] -translate-x-1/2 bg-tertiary py-[.3em] px-[1.1em] rounded-full font-sans text-darker text-[.75rem] font-[600]">
                            {day.day}
                            {isVegetarian ?
                                <div className=" flex justify-center items-center w-[35px] h-[35px] absolute bottom-[-10px] right-[-20px] rounded-full text-[.8rem] bg-vegetarianGreen text-white font-[700]">
                                    VEG
                                </div>
                                : ''
                            }
                        </span>
                    </div>

                    {/* RECIPE INFO */}
                    <div className="recipe-info h-[20%] md:h-[30%] flex flex-col gap-1 justify-start p-2 bg-transparent">
                        <h4 className="recipe-title text-[.8rem] text-primary font-[600]">
                            {selectedRecipe.name}
                        </h4>
                        <div className="small-info font-sans flex flex-wrap flex-row  gap-1 md:gap-2 text-darker text-[.65rem] font-[600]
                            [&>*]:bg-gray-200 [&>*]:py-[.3em] [&>*]:px-[.7em] [&>*]:rounded-sm">
                            <span className="flex gap-1 justify-center items-center">
                                <RxLapTimer className="text-[1rem]" /> total: {selectedRecipe.totalTime} min.
                            </span>
                            <span className="flex gap-1 justify-center items-center">
                                <RxLapTimer className="text-[1rem]" /> prep: {selectedRecipe.prepTime} min.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Change button */}
            {showChangeButton ?
                <div className="w-[calc(100%-8px)] h-[100%] absolute bg-primaryAlpha flex justify-center items-center rounded-lg">
                    <div
                        className="flex justify-center gap-[10px] items center bg-gray_2 rounded-md cursor-pointer text-primary px-[20px] py-[10px]"
                        onClick={() => {
                            toggleModal();
                            handleUpdateOptions();
                            setModalDay(day.day);
                        }}
                    >
                        <span
                            className="text-[13px] font-[500]"
                            // onClick={(e) => handleToggleModal(e)}
                        >
                            Cambiar
                        </span>
                        <LiaExchangeAltSolid
                            className=" text-[20px]"
                            // onClick={(e) => handleToggleModal(e)}
                        />
                    </div>
                </div>

                : ''
            }

            {/* Options card */}
            {/* <div id={`options-${extraInfo}`} className={`options-${extraInfo} invisible flex flex-col justify-center items-center gap-4`}>
                <InteractiveCardOption
                    recipe={recipes[4]}
                />
                <InteractiveCardOption
                    recipe={recipes[6]}
                />
                <InteractiveCardOption
                    recipe={recipes[9]}
                />
            </div> */}
        </div>
    )
}

export default CardSelectedRecipe