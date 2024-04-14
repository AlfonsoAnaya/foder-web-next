import IngredientList from '../Shared/RecipeComponents/IngredientList';
import Method from '../Shared/RecipeComponents/Method';
import Recipe from '../../types/recipe.d';
import Image from 'next/image';

interface RecipeMobileProps {
  recipe: Recipe
  isWeekVegetarian: boolean
}

function RecipeMobile({ recipe, isWeekVegetarian }: RecipeMobileProps) {
  return (
    <>

      {/* GRID */}
      <div id="full-recipe-grid"
        className="flex flex-col gap-2" >

        {/* Recipe Title */}
        <div className="recipe-title flex flex-col justify-center items-left">

          {/* <div className="small-info flex flex-row gap-4 text-primary text-[.75rem] font-[500] my-4">
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.portions} porciones
            </span>
            <span className="bg-[#4385be46] py-[.4em] px-[1.1em] rounded-full">
              {recipe.difficulty}
            </span>
          </div> */}
        </div>

        {/* Recipe Info */}
        <div className="recipe-info flex flex-col items-left 
          md:border-b-[1px] md:border-b-gray-500
          justify-start md:justify-between">
          <h2 className="text-primary font-[600]
            text-[1.75em] md:text-[2.5em]">
            {recipe.name}
          </h2>
          <h3 className="recipe-title   text-secondary   font-[600]
            text-[1-15rem] md:text-[1.75rem]">
            {recipe.tagline}
          </h3>
          <div className="small-info font-sans flex flex-wrap flex-row gap-2 text-darker text-[.80rem] font-[500] my-1
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
        <div className="recipe-img h-[300px]">
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
      </div >

    </>
  );
}

export default RecipeMobile;