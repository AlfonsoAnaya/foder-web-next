import Recipe from "@/app/types/recipe.d";
import Image from "next/image";

interface WeeklyPlanArchiveCardProps {
  recipeArray: Recipe[]
  planNumber: number
}

function WeeklyPlanArchiveCard(
  { recipeArray, planNumber }: WeeklyPlanArchiveCardProps
) {
  
  return (
    <div className="weeklyplancard w-[90%] h-[80vh] md:h-[300px] flex flex-col md:flex-row gap-0 md:gap-6 bg-gray-200 hover:shadow-lg rounded-[5px] md:rounded-none">
      <div className="md:w-[25%] h-[55%] md:h-[100%] relative">
        <Image
          className="block object-cover w-[100%] h-[100%] object-center rounded-t-[5px] md:rounded-t-[0px]"
          src={`/images/recipes/${recipeArray[3].img}`}
          // alt={recipe.imgAlt} 
          alt="un plato de comida"
          width={666}
          height={848}
        />
        <div className="absolute flex justify-center items-center w-[65px] h-[65px] top-[10px] left-[10px] bg-tertiary rounded-full font-sans text-darker text-[1.35rem] font-[600]">
          #{planNumber + 1}
          <div className=" flex justify-center items-center w-[35px] h-[35px] absolute bottom-[-10px] right-[-10px] rounded-full text-[.8rem] bg-vegetarianGreen text-white font-[700]">VEG</div>
        </div>
      </div>

      <div className="flex flex-col gap-2 h-[45%] md:h-[100%] justify-center px-4 md:px-0 text-[.95rem] md:text-[1.25rem] items-start text-primary font-[500] md:font-[600]">
        {recipeArray.map((recipe, i: number) => {
          return (
            <h3 key={"recipeName" + i}>{recipe.name}</h3>
          )
        })}
      </div>

    </div>
  );
}

export default WeeklyPlanArchiveCard;