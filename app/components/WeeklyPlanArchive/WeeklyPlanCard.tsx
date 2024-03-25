import Recipe from "@/app/types/recipe.d";
import Image from "next/image";

function WeeklyPlanCard(
  { recipeArray, planNumber }: { recipeArray: Recipe[], planNumber: number }
) {
  return (
    <div className="w-[100%] h-[300px] flex gap-6 bg-primary hover:shadow-lg">
      <div className="w-[25%]">
        <Image
          className="block object-cover w-[100%] h-[100%] object-center"
          src={`/images/recipes/${recipeArray[0].img}`}
          // alt={recipe.imgAlt} 
          alt="un plato de comida"
          width={666}
          height={848}
        />
      </div>
      <div className="flex justify-center items-center text-tertiary text-[6rem]">
        {planNumber+1}
      </div>
      <div className="flex flex-col gap-2 justify-center text-[1.25rem] items-start text-white font-[600]">
      {recipeArray.map((recipe, i: number) => {
        return (
          <h3 key={"recipeName" + i}>{recipe.name}</h3>
        )
      })}
      </div>

    </div>
  );
}

export default WeeklyPlanCard;