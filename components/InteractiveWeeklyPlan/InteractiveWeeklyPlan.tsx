import recipes from "@/app/utils/recipes";
import Image from "next/image";
import InteractiveCardSelected from "./InteractiveCardSelected";
import ModalInteractivePlan from "./ModalInteractivePlan";
import './InteractiveWeeklyPlan.css'

const InteractiveWeeklyPlan = () => {

    const recipe = recipes[8];
    const extraInfo = "Lunes"
    const isVegetarian = false

    return (
        <>
            <div className="flex justify-center items-center align-center p-8">
            <h2 className="text-primary text-[2rem] font-[600]">Arma tu propio plan</h2>
            </div>
            
            <div className="flex justify-center items-start min-h-[80vh] gap-2 mx-[50px] ">


                {/* ===== SELECT RECIPE COMPONENT ====== */}
                <InteractiveCardSelected
                    extraInfo={"Lunes"}
                />
                <InteractiveCardSelected
                    extraInfo={"Martes"}
                />
                <InteractiveCardSelected
                    extraInfo={"Miércoles"}
                />
                <InteractiveCardSelected
                    extraInfo={"Jueves"}
                />
                <InteractiveCardSelected
                    extraInfo={"Viernes"}
                />
                <InteractiveCardSelected
                    extraInfo={"Sábado"}
                />
                <InteractiveCardSelected
                    extraInfo={"Domingo"}
                />

            </div>
        </>

    )
}

export default InteractiveWeeklyPlan