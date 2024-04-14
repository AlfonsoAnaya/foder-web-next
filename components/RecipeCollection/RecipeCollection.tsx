'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import RecipeCard from "../Shared/RecipeCard";
import recipes from "../../app/utils/recipes";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";
import FilterButton from "../Shared/FilterButton";
import Recipe from "@/types/recipe.d";


function RecipeCollection() {
  const setCurrentNavSection = useCurrentNavSectionStore((state) => state.updateCurrentNavSection);
  const [currentRecipes, setCurrentRecipes] = useState(recipes);
  const [filters, setFilters] = useState<string[]>([]);


  useEffect(() => {
    setCurrentNavSection('recetas');
  }, []);


  useEffect(() => {
    if (filters.length === 0) {
      setCurrentRecipes(recipes)
    } else {
      let newRecipesArray:Recipe[] = []
      filters.forEach((filter) => {
        recipes.forEach((recipe) => {
          if ((recipe as any)[filter] === true) {
            newRecipesArray.push(recipe);
          }
        })
      })
      setCurrentRecipes(newRecipesArray)
    }
  }, [filters]);


  const handleFilterClick = (str:string) => {
    if (filters.includes(str)) {
      // If the string is already in the array, remove it
      setFilters(prevState => prevState.filter(item => item !== str));
    } else {
      // If the string is not in the array, add it
      setFilters(prevState => [
        ...prevState,
        str
      ]);
    }
  }

  return (
    <section className="todays-recipe-section flex flex-col items-center md:my-[1rem]">
      <h3 className="text-[2rem] text-primary font-[600] pt-4 pb-8">Todas nuestras recetas</h3>
      <div className="flex gap-4 justify-center items-center">
        <FilterButton 
          title={"vegetariano"}
          filterStr={"isVegetarian"}
          handleClick={handleFilterClick}
        />
        <FilterButton 
          title={"sin gluten"}
          filterStr={"isGlutenFree"}
          handleClick={handleFilterClick}
        />
        <FilterButton 
          title={"vegano"}
          filterStr={"isVegan"}
          handleClick={handleFilterClick}
        />
      </div>
      <div className="recipe-grid flex flex-wrap justify-center gap-[2.5rem] max-w-[1100px] mx-[2rem] my-[1.5rem]">
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