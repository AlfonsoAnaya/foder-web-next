import Ingredient from '../../types/ingredientd.d';
import "./RecipeDetails.css"
import recipes from '@/app/utils/recipes';
import Image from 'next/image';
//recipe : Recipe


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
        <div className="recipe-title flex gap-10 flex-col justify-center items-left md:border-b-[1px] md:border-b-gray-400">
          <h2 className="text-[1.35rem] md:text-[2.5rem] text-primary font-[600]">
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
            className="block object-cover w-[100%] h-[100%] object-right-center"
            src={`/images/recipes/${recipe.img}`}
            // alt={recipe.imgAlt} 
            alt="un plato de comida"
            width={666}
            height={848}
          />
        </div>

        {/* Ingredients */}
        <div className="recipe-ingredients flex flex-col justify-start items-left">
          <details open className="overflow-hidden">
            <summary className="items-center flex font-[600] mb-[.5rem] 
            text-[1.1rem] md:text-[1.5rem] hover:cursor-pointer
            mt-2 md:mt-0">
              <span className="ingredients-span items-center flex">Ingredientes</span>
              <span className="ingredients-arrow">►</span>
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



        </div>

        {/* Method */}
        <div className="font-sans leading-8 recipe-method flex flex-col justify-start items-left text-[18px]">
          <h3 className="font-[600] mb-[.5rem] underline
            text-[1.1rem] md:text-[1.5rem] 
            mt-2 md:mt-0">Instrucciones</h3>
          {recipe.method.map((text: string, i:number) => {
            return (
              <p key={`paragraph ${i}`} className="method-text font-[400] mb-[1rem]">
                {text}
              </p>
            )
          })}
        </div>
      </div>

    </section>
  );
}

export default RecipeDetails;