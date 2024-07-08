import './IngredientList.css'
import Recipe from '@/types/recipe.d';
import Ingredient from '@/types/ingredientd.d';
import TipBox from './TipBox';

interface IngredientListProps {
  recipe: Recipe;
  isWeekVegetarian?: boolean
}

function IngredientList({ recipe, isWeekVegetarian }: IngredientListProps) {
  return (
    <div className="recipe-ingredients flex flex-col gap-8 justify-start items-start pb-[20px] md:pb-0 md:pr-[50px]">

      <details open className="overflow-hidden">
        <summary className="items-center flex gap-[5px] font-[600] mb-[.5rem] 
            text-[1.1rem] md:text-[1.5rem] hover:cursor-pointer
            mt-2 md:mt-0">
          <span className="ingredients-span items-center flex uppercase  text-[16px] md:text-[18px]">Ingredientes</span>
          <span className="ingredients-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" className="self-start" fill="none" viewBox="0 0 24 24"><path stroke="rgb(16, 15, 15)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6" /></svg>
          </span>
        </summary>
      </details>
      <div className="ingredients-content max-h-0 box-border overflow-hidden ">
        {recipe.ingredients.map((ingredient: Ingredient, i: number) => {
          return (
            <ul key={ingredient.name.singular + i} className="method-text font-[400] mb-[1rem]">
              {ingredient.unit === "unidad" ?
                (ingredient.quantity > 1 ?
                  <span>{`${ingredient.quantity} ${ingredient.name.plural} `}</span>
                  : <span>{`${ingredient.quantity} ${ingredient.name.singular} `}</span>
                )
                : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular} `}</span>
              }
            </ul>
          )
        })}
        {
          recipe.extraRecipeName ?
            <>
              <h4
                className="font-[300] mb-[.5rem] underline
                  text-[1rem] md:text-[1.25rem] 
                  mt-2 md:mt-0">
                {recipe.extraRecipeName}
              </h4>
              <ul
                className="mb-[1em]
                  text-[16px] md:text-[1.1rem]
                  font-[300] md:font-[400]">
                {recipe.extraIngredients?.map((ingredient: Ingredient, i: number) => {
                  return (
                    <li key={ingredient.name.singular + i}
                      className="mb-[.5em] text-[16px]">
                      {ingredient.unit === "unidad" ?
                        (ingredient.quantity > 1 ?
                          <span>{`${ingredient.quantity} ${ingredient.name.plural}`}</span>
                          : <span>{`${ingredient.quantity} ${ingredient.name.singular}`}</span>
                        )
                        : <span>{`${ingredient.quantity} ${ingredient.unit} de ${ingredient.name.singular}`}</span>
                      }
                    </li>
                  )
                })}
              </ul>
            </>
            : ''
        }
      </div>
      
      {recipe.tips ?
        <TipBox
          recipe={recipe}
        />
        : ''
      }

    </div>
  )
}

export default IngredientList
