import Recipe from "@/types/recipe.d"
import InteractiveCardOption from "./InteractiveCardOption"
import { TfiClose } from "react-icons/tfi";

interface ModalInteractivePlanProps {
    handleToggleModal: any
    recipeOptions: Recipe[]
    extraInfo: string
}

function ModalInteractivePlan(
    { handleToggleModal, recipeOptions, extraInfo }: ModalInteractivePlanProps
) {
    return (
        <div
            className="fixed w-[100%] h-[100%] top-0 left-0 bg-opacity-20 bg-white backdrop-blur-sm shadow-md z-[99]"
            onClick={(e) => handleToggleModal(e)}>
            <div className="fixed flex flex-col gap-6 justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%] h-[60%] bg-gray_2 rounded-xl shadow-md">
                
                <h2 className="text-primary font-[600] text-[2rem]">
                    Cambia tu receta del {extraInfo}
                </h2>

                <div className="flex gap-[10px] justify-center items-center">
                {recipeOptions.map((recipe, i) => {
                    return (
                        <InteractiveCardOption
                            key={`card ${i}`}
                            recipe={recipe}
                        />
                    )

                })}
                </div>
                <div 
                    className="absolute top-[15px] right-[15px] p-2 rounded-full hover:bg-white cursor-pointer"
                    onClick={(e) => handleToggleModal(e)}
                >
                    <TfiClose 
                        className="text-primary text-[1.5rem]  hover:text-dark"
                        onClick={(e) => handleToggleModal(e)}
                    />
                </div>
                
            </div>
        </div>

    )
}

export default ModalInteractivePlan