import RecipeInfo from '../Shared/RecipeComponents/RecipeInfo';
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

      <div className="flex flex-col w-[90%] md:max-w-[1200px]" >
        <div className="flex justify-stretch gap-[20px] py-[50px] h-[75vh] border-b-[1px] border-b-dark border-dashed">

          <div className="w-[50%] h-[100%]">
            <RecipeInfo
              recipe={recipe}
            />
          </div>


          {/* Recipe Img */}
          <div className="recipe-img w-[50%]">
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
              isWeekVegetarian={isWeekVegetarian}
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

export default RecipeDesktop;