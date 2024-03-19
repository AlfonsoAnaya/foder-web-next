import Recipe from "@/app/types/recipe.d";

function WeeklyPlanCard(
  { recipeArray }: { recipeArray: Recipe[] }
) {
  return (
    <div className="w-[1100px] h-[200px] border-2 border-blue-500">
      {recipeArray.map((recipe, i:number) => {
        return (
          <h3 key={"recipeName" + i}>{recipe.name}</h3>
        )
      })}
    </div>
  );
}

export default WeeklyPlanCard;