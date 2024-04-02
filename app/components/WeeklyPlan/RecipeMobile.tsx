import Ingredient from '../../types/ingredientd.d';
import Recipe from '../../types/recipe.d';
import Image from 'next/image';

function RecipeMobile({ recipe }: { recipe: Recipe }) {
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
          <h3 className="recipe-title   text-secondary font-serif font-[600]
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
            {recipe.ingredients.map((ingredient: Ingredient, i:number) => {
              return (
                <ul key={`ingredient ${i}`} 
                  className="method-text font-[400] mb-[1rem]">
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
        <div className="font-sans leading-7 recipe-method flex flex-col justify-start items-left text-[16px]">
          <h3 className="font-[600] mb-[.5rem] underline
            text-[1.1rem] md:text-[1.5rem] 
            mt-2 md:mt-0">Instrucciones</h3>
          {recipe.method.map((text: string, i: number) => {
            return (
              <p key={`paragraph ${i}`} className="method-text font-[400] mb-[1rem] flex gap-2">
              <span className="font-[600] text-primary">{i + 1}</span>
              <span>{`${text}`}</span>
            </p>  
            )
          })}
        </div>
      </div >

    </>
  );
}

export default RecipeMobile;