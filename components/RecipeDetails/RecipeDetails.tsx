import IngredientList from '../Shared/RecipeComponents/IngredientList';
import Method from '../Shared/RecipeComponents/Method';
import RecipeInfo from '../Shared/RecipeComponents/RecipeInfo';
import "./RecipeDetails.css"
import recipes from '@/app/utils/recipes';
import Image from 'next/image';


// Renders the Full Detailed Recipe
// Desktop and Mobile

function RecipeDetails( { recipeId }: { recipeId: string } ) {  

  function getObjectById(array: any[], id: string) {
    return array.find(obj => obj.id == id);
  }

  const recipe = getObjectById(recipes, recipeId);

  return (
    <section className="individual-recipe-section flex flex-col items-center">

      <div className="flex flex-col w-[90%] md:max-w-[1200px]" >

        <div className="flex flex-col md:flex-row justify-stretch gap-[20px] py-[20px] md:py-[50px] md:h-[75vh] border-b-[1px] border-b-dark border-dashed">
          
          <div className="w-[100%] md:w-[50%] md:h-[100%]">
            <RecipeInfo
              recipe={recipe}
            />
          </div>

          {/* Recipe Img */}
          <div className="recipe-img w-[100%] md:w-[50%]">
            <Image
              className="block object-cover w-[100%] h-[100%] object-center rounded-xl"
              src={`/images/recipes/${recipe.img}`}
              // alt={recipe.imgAlt} 
              alt="un plato de comida"
              width={666}
              height={848}
            />
          </div>
        </div>

        <div className="h-[100px] border-b-[1px] border-b-dark border-dashed">

        </div>

        <div className="py-[40px] flex">
          <div className="w-[40%]">
            <IngredientList
              recipe={recipe}
            />
          </div>

          <div className="w-[40%]">
            <Method
              recipe={recipe}
            />
          </div>


        </div>

      </div>

    </section>
  );
}

export default RecipeDetails;