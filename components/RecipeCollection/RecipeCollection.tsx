"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import RecipeCardCollection from "../Shared/RecipeCardForCollection";
import recipes from "../../app/utils/recipes";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";
import FilterButton from "../Shared/FilterButton";
import SearchBar from "../Shared/SearchBar";
import Recipe from "@/types/recipe.d";
import { formatString } from "@/app/utils/helpers/formatter";
import { formatStringToUrl } from "@/app/utils/helpers/formatter";

function RecipeCollection() {
  const setCurrentNavSection = useCurrentNavSectionStore(
    (state) => state.updateCurrentNavSection
  );
  const [currentRecipes, setCurrentRecipes] = useState(recipes);
  const [filters, setFilters] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setCurrentNavSection("recetas");
  }, []);

  useEffect(() => {
    searchAndFilterRecipes();
  }, [filters, search]);

  const handleFilterClick = (str: string) => {
    if (filters.includes(str)) {
      // If the string is already in the array, remove it
      setFilters((prevState) => prevState.filter((item) => item !== str));
    } else {
      // If the string is not in the array, add it
      setFilters((prevState) => [...prevState, str]);
    }
  };

  const handleSearch = (str: string) => {
    setSearch(str);
  };

  const searchAndFilterRecipes = () => {
    const formattedSearch = formatString(search);

    const doesRecipeMatchSearch = (recipe: Recipe) => {
      const recipeName = formatString(recipe.name);
      return recipeName.includes(formattedSearch);
    };

    const doesIngredientMatchSearch = (recipe: Recipe) => {
      return recipe.ingredients.some((ingredient) => {
        const ingredientName = formatString(ingredient.name.singular);
        return ingredientName.includes(formattedSearch);
      });
    };

    const doesRecipeMatchFilter = (recipe: Recipe, filter: keyof Recipe) => {
      return recipe[filter] === true;
    };

    const filteredRecipes = recipes.filter((recipe) => {
      //This will be true when search is empty OR a Recipe matches OR an Ingredient Matches
      const matchesSearch = search.length === 0 || (
        doesRecipeMatchSearch(recipe) || doesIngredientMatchSearch(recipe)
      );
      
      //This will be true when filters are empty OR a recipe matches all filters
      const matchesFilters = filters.length === 0 || filters.every((filter) =>
        doesRecipeMatchFilter(recipe, filter as keyof Recipe)
      );

      return matchesSearch && matchesFilters;
    });

    setCurrentRecipes(filteredRecipes);
  };

  // const filteredRecipes = recipes.filter((recipe) => {
  //   if (search.length > 0 && filters.length > 0) {
  //     const recipeMatchesAllFilters = filters.every((filter) =>
  //     doesRecipeMatchFilter(recipe, filter as keyof Recipe));
  //     if (doesRecipeMatchSearch(recipe) && recipeMatchesAllFilters) {
  //       return true;
  //     }
  //     if (doesIngredientMatchSearch(recipe) && recipeMatchesAllFilters) {
  //       return true;
  //     }
  //     return false;
  //   }
    
  //   if (search.length > 0) {
  //     if (doesRecipeMatchSearch(recipe)) {
  //       return true;
  //     }
  //     // Check if any ingredient in the recipe matches the search criteria
  //     return doesIngredientMatchSearch(recipe);
  //     }
    
  //   if (filters.length > 0) {
  //     return filters.every((filter) =>
  //       doesRecipeMatchFilter(recipe, filter as keyof Recipe)
  //     );
  //   }
  //   return true;
  // });

  return (
    <section className="todays-recipe-section flex flex-col gap-[28px] items-center">
      <h3 className="text-[2rem] text-primary font-[600 md:mt-[30px]">
        Todas nuestras recetas {currentRecipes.length}
      </h3>

      <div className="flex w-[100%] justify-center items-center">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex gap-4  justify-center items-center">
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
          const formattedName = formatStringToUrl(recipe.name)
          return (
            <Link key={recipe.name + i} href={`/recetas/${formattedName}`}>
              <RecipeCardCollection recipe={recipe} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default RecipeCollection;
