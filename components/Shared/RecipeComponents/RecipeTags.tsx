import Recipe from "@/types/recipe.d"

interface RecipeTagsProps {
    recipe: Recipe
}

function RecipeTags({ recipe }: RecipeTagsProps) {
    return (
        <ul className="h-[100%] flex flex-row justify-between items-center px-[35px]">
          <li className="flex flex-col">
            <span className="uppercase text-[13px]">Tiempo total</span>
            <span>{recipe.prepTime} min.</span>
          </li>
          <li className="flex flex-col">
            <span className="uppercase text-[13px]">Preparación</span>
            <span>{recipe.totalTime} min.</span>
          </li>
          <li className="flex flex-col">
            <span className="uppercase text-[13px]">Porciones</span>
            <span>{recipe.portions}</span>
          </li>
        </ul>
    )
}

export default RecipeTags