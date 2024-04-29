import recipes from "@/app/utils/recipes";
import CardSelected from "./CardSelected";
import './InteractiveWeeklyPlan.css'
import Weekdays from "@/app/utils/Weekdays";
import InteractivePlan from "@/app/utils/InteractivePlan";

const InteractiveWeeklyPlan = () => {
    
    return (
        <>
            <div className="flex justify-center items-center align-center p-8">
            <h2 className="text-primary text-[2rem] font-[600]">Arma tu propio plan</h2>
            </div>
            
            <div className="flex justify-center items-start min-h-[60vh] max-w-[1300px] gap-2 mx-auto">
                {/* ===== SELECT RECIPE COMPONENT ====== */}
                {InteractivePlan.map((day,i) => {
                    return (
                        <CardSelected 
                            key={`${day}${i}`}
                            day={InteractivePlan[i]}
                        />
                    )
                })}

            </div>
        </>

    )
}

export default InteractiveWeeklyPlan