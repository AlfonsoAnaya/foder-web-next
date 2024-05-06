import { useState, useEffect } from "react";
import Recipe from "@/types/recipe.d"
import InteractiveCardOption from "./InteractiveCardOption"
import { TfiClose } from "react-icons/tfi";
import { Dispatch, SetStateAction } from "react";

interface ModalInteractivePlanProps {
    toggleModal: any
    handleClickOutside: any
    recipeOptions: Recipe[]
    day: string
    selectedOptions: any
    setSelectedOptions: any
}

function ModalInteractivePlan(
    { toggleModal, handleClickOutside, recipeOptions, day, selectedOptions, setSelectedOptions  }: ModalInteractivePlanProps
) {

    function handleSelectRecipe(num: number) {
        setSelectedOptions((prevState: any) => ({
            ...prevState, 
            [day]: num
        }));
    }

    useEffect(() => {
        localStorage.setItem("interactivePlanSelection", JSON.stringify(selectedOptions))
    }, [selectedOptions]);

    return (
        <div
            className="modal-select-recipe fixed w-[100%] h-[100%] top-0 left-0 bg-opacity-20 bg-white backdrop-blur-sm shadow-md z-[99]"
            onClick={(e) => handleClickOutside(e)}
        >
            <div className="fixed flex flex-col gap-6 justify-start p-4 md:p-8 items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] md:w-[700px] h-[90%] md:h-[60%] bg-gray_2 rounded-xl shadow-md">
                
                <h2 className="text-primary font-[600] text-[1.2rem] md:text-[2rem] pt-8 md:pt-0">
                    Cambia tu receta del {day}
                </h2>

                <div className="flex flex-wrap gap-x-[10px] gap-y-[60px] md:gap-[10px] justify-center items-center">
                {recipeOptions.map((recipe, i) => {
                    return (
                        <div
                            key={`card ${recipe.id}`}
                            onClick={() => handleSelectRecipe(i)}
                            className={selectedOptions[day] === i? 'modal-card-selected relative' : ''}
                        >
                            <InteractiveCardOption
                            key={`card ${i}`}
                            recipe={recipe}
                        />
                        </div>
                        
                    )

                })}
                </div>
                <div 
                    className="absolute top-[10px] right-[10px] p-2 rounded-full hover:bg-white cursor-pointer"
                    onClick={toggleModal}
                >
                    <TfiClose 
                        className="text-primary text-[1.25rem]  hover:text-dark"
                    />
                </div>
                
            </div>
        </div>

    )
}

export default ModalInteractivePlan