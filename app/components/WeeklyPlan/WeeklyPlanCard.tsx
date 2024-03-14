import Recipe from "../../types/recipe.d";

function WeeklyPlanCard(
    { recipe, weekDay }: { recipe: Recipe; weekDay: string }
) {
    return (
        <div
            className="recipe-card-weekly flex flex-row justify-center h-[75px]">

            {/* RECIPE IMAGE */}
            {/* <div className="recipe-img w-[20%]">
                <img className="block w-[100%] h-[100%] object-cover object-center"
                    src={recipe.img}
                    alt="a bowl of pasta with pesto on a white marble table"></img>
            </div> */}

            {/* DAY */}
            {/* <div className="w-[10%] flex justify-center items-center
                pl-0 md:pl-[.5em]">
                <span className="text-[2rem] text-secondary font-tertiary font-[700] leading-4">{weekDay}</span>
            </div> */}

            {/* RECIPE INFO */}
            <div className="flex flex-col w-[90%] justify-center items-center gap-[.25rem] font-sans font-[400] py-2">
                <h3
                    className="text-center recipe-title text-[1.1rem] text-primary font-serif font-[400]
                leading-[22px]">
                    {recipe.name}
                </h3>
                {/* <div className=" small-info flex flex-row gap-3 text-secondary font-serif text-[.85rem] font-[500]">
                    <span className="leading-4">
                        {recipe.difficulty} 
                    </span>
                </div> */}
            </div>
        </div>
    );
}

export default WeeklyPlanCard;