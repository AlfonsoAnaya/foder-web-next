import IngredientList from '../Shared/RecipeComponents/IngredientList';
import Method from '../Shared/RecipeComponents/Method';
import "./RecipeDetails.css"
import recipes from '@/app/utils/recipes';
import Image from 'next/image';


function RecipeDetails( { recipeId }: { recipeId: string } ) {  

  function getObjectById(array: any[], id: string) {
    return array.find(obj => obj.id == id);
  }

  const recipe = getObjectById(recipes, recipeId);

  return (
    <section className="individual-recipe-section flex flex-col items-center">

      {/* GRID */}
      <div className="individual-recipe-grid w-[100%] md:max-w-[900px] xl:max-w-[985px] px-2 md:px-4 mt- md:mt-12" >

        {/* Recipe Info */}
        <div className="recipe-title flex pt-4 md:pt-0 gap-2 md:gap-10 flex-col justify-center items-left md:border-b-[1px] md:border-b-gray-400">
          <h2 className="text-[1.35rem] md:text-[2.5rem] text-primary font-[600]">
            {recipe.name}
          </h2>
          <h3 className="recipe-title  text-[1rem] md:text-[1.75rem] text-secondary   font-[600]">
            {recipe.tagline}
          </h3>
          <div className="small-info font-sans flex flex-wrap flex-row  gap-2 md:gap-4 text-darker text-[.80rem] font-[500] my-1
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
            className="block object-cover w-[100%] h-[100%] object-right-center"
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
        />

        {/* Method */}
        <Method 
          recipe={recipe}
        />
      </div>

    </section>
  );
}

export default RecipeDetails;