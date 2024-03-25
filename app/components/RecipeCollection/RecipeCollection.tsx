import Link from "next/link";
import RecipeCard from "../Shared/RecipeCard";
import recipes from "../../utils/recipes";


function RecipeCollection() {
  return (
    <section className="todays-recipe-section flex flex-col items-center my-[2rem]">
      <h3 className="text-[2rem] text-primary font-[600] p-4">Todas nuestras recetas</h3>
      <div className="recipe-grid flex flex-wrap justify-center gap-[2.75rem] max-w-[1000px] mx-[2rem] my-[1rem]">
        {recipes.map((recipe, i) => {
          return (
          <Link 
            key={recipe.name + i} 
            href={`/recetas/${recipe.id}`}
          >
          <RecipeCard
            recipe = {recipe}
          />
          </Link>
        )})}
      </div>
    </section>
  );
}

export default RecipeCollection;