import Link from "next/link";
import Image from "next/image";
import getToday from "@/app/utils/Today";
import Recipe from "@/app/types/recipe.d";

interface DaysRecipeProps {
  recipes: Recipe[];
}

function DaysRecipe({ recipes }: DaysRecipeProps) {

  const todayString = getToday();
  const rawTodayInt = new Date().getDay();
  const todayInt = rawTodayInt === 0 ? 6 : rawTodayInt - 1;
  let recipe: Recipe = recipes[todayInt];

  return (
    <section className="todays-recipe-section flex flex-col items-center bg-grayLight md:bg-white">
      <div className="flex flex-col justify-center items-center md:flex-row max-w-[1100px] md:mx-[20px] my-8 md:my-16 gap-[1.5rem] ">

        <div className="relative recipe-img w-[95%] md:max-w-[50%] max-h-[650px] order-2 md:order-1">
          <Link
            href={`/plan-semanal`}
          // state={{ day: todayInt, openSidenav: true }}
          >
            <Image
              className="block object-cover w-[100%] h-[100%] object-center"
              src={`/images/recipes/${recipe.img}`}
              // alt={recipe.imgAlt} 
              alt="un plato de comida"
              width={666}
              height={848}
            />
          </Link>
          <span className="absolute top-[calc(100%-75px)] md:top-[25px] left-[50%] md:left-[25px] -translate-x-[50%] md:translate-x-0  bg-tertiary py-[.4rem] px-[1.5rem] rounded-full font-sans text-darker text-[1.15rem] font-[600]">
            {todayString}
          </span>
        </div>

        <div className="recipe-info flex flex-col justify-center text-center md:text-left max-w-[95%] md:max-w-[50%] items-left gap-4 md:gap-8 order-1 md:order-2">
          <h2 className="text-[1.75rem] md:text-[2.5rem] text-dark font-[600]">
            La receta del día
          </h2>
          <Link
            href={`/plan-semanal`}
          // state={{ day: todayInt, openSidenav: true }}
          >
            <h3 className="recipe-title underline text-[1.5rem] md:text-[1.75rem] text-primary font-serif font-[600]">
              {recipe.name}
            </h3>
          </Link>
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

      </div>
    </section>
  );
}

export default DaysRecipe;