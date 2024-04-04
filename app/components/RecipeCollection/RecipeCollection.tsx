'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import RecipeCard from "../Shared/RecipeCard";
import recipes from "../../utils/recipes";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";
import FilterButton from "../Shared/FilterButton";


function RecipeCollection() {
  const setCurrentNavSection = useCurrentNavSectionStore((state) => state.updateCurrentNavSection);
  useEffect(() => {
    setCurrentNavSection('recetas');
  }, []);

  const [currentRecipes, setCurrentRecipes] = useState(recipes);
  const [filters, setFilters] = useState<string[]>([""]);
  
  const handleFilterClick = (str:string) => {
    setFilters(prevState => [
      ...prevState,
      str
    ]);
    console.log(filters);
  }

  return (
    <section className="todays-recipe-section flex flex-col items-center md:my-[1rem]">
      <h3 className="text-[2rem] text-primary font-[600] p-4">Todas nuestras ({recipes.length}) recetas</h3>
      <div className="flex gap-4 justify-center items-center">
        <FilterButton 
          title={"vegetarian"}
          handleClick={handleFilterClick}
        />
        <FilterButton 
          title={"pasta"}
          handleClick={handleFilterClick}
        />
        <FilterButton 
          title={"vegan"}
          handleClick={handleFilterClick}
        />
      </div>
      <div className="recipe-grid flex flex-wrap justify-center gap-[2.5rem] max-w-[1100px] mx-[2rem] my-[1rem]">
        {currentRecipes.map((recipe, i) => {
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