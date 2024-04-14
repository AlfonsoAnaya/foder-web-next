import IngredientList from '../Shared/RecipeComponents/IngredientList';
import Method from '../Shared/RecipeComponents/Method';
import Recipe from '../../types/recipe.d';
import "./RecipeDesktop.css"
import Image from 'next/image';

interface IndividualRecipeProps {
  recipe: Recipe
  isWeekVegetarian: boolean
}

function RecipeDesktop({ recipe, isWeekVegetarian }: IndividualRecipeProps) {

  return (
    <section className="individual-recipe-section flex flex-col items-center">
      {/* GRID */}
      <div className="individual-recipe-grid w-[100%] md:max-w-[900px] xl:max-w-[985px] px-2 md:px-4 mt-2 md:mt-4" >

        {/* Recipe Info */}
        <div className="recipe-title flex gap-10 flex-col justify-center items-left md:border-b-[1px] md:border-b-gray-400">
          <h2 className="text-[1.35rem] md:text-[2.5rem] text-primary font-[600] font-sans">
            {recipe.name}
          </h2>
          <h3 className="recipe-title  text-[1rem] md:text-[1.75rem] text-secondary   font-[600]">
            {recipe.tagline}
          </h3>
          <div className="small-info font-sans flex flex-wrap flex-row gap-4 text-darker text-[.80rem] font-[500] my-1
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
          </div>
        </div>

        {/* Recipe Img */}
        <div className="recipe-img">
          <Image
            className="block object-cover w-[100%] h-[100%] object-center"
            src={`/images/recipes/${recipe.img}`}
            // alt={recipe.imgAlt} 
            alt="un plato de comida"
            width={666}
            height={848}
          />
        </div>

        {/* Ingredients */}
        <IngredientList 
          recipe={recipe}
          isWeekVegetarian={isWeekVegetarian}
        />

        {/* Method */}
        <Method 
          recipe={recipe}
        />
      </div>

    </section>
  );
}

export default RecipeDesktop;