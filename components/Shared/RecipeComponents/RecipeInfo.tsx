import Recipe from "@/types/recipe.d"

interface RecipeInfoProps {
    recipe: Recipe
}

function RecipeInfo({ recipe }: RecipeInfoProps) {
    return (
        <div className="recipe-title h-[100%] flex flex-col justify-between py-[0px] items-left ">
          <h2 className="text-[1.35rem] md:text-[2.5rem] text-dark font-[500] font-sans">
            {recipe.name}
          </h2>
          <h3 className="recipe-title  text-[1rem] md:text-[1.5rem] text-dark   font-[500]">
            {recipe.tagline}
          </h3>
          {/* <div className="small-info font-sans flex flex-wrap flex-row gap-4 text-darker text-[.80rem] font-[500] my-1
            [&>*]:bg-gray-200 [&>*]:py-[.2em] [&>*]:px-[.8em] [&>*]:rounded-sm">
            <span className="">
              Tiempo total: {recipe.totalTime} min.
            </span>
            <span className="">
              Preparación: {recipe.prepTime} min.
            </span>
            <span className="">
              {recipe.portions} porciones
            </span>
            {recipe.isVegetarian ?
              <span className="">
                Vegetariano
              </span>
              : ''}
            {recipe.isVegan ?
              <span className="">
                Vegano
              </span>
              : ''}
          </div> */}
        </div>
    )
}

export default RecipeInfo