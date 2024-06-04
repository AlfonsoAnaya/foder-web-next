"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import RecipeCardCollection from "../Shared/RecipeCardForCollection";
import RecipeCarousel from "./RecipeCarousel";
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
  // boolean state to store whether the viewport is mobile
  const [isViewportMobile, setIsViewportMobile] = useState(false);

  useEffect(() => {
    setCurrentNavSection("recetas");
    // Function to check if the viewport width is smaller than 768px
    const handleResize = () => {
      setIsViewportMobile(window.innerWidth < 768);
      console.log(isViewportMobile)
  };
  // Initial check on component mount
  handleResize();
  // Event listener for window resize
  window.addEventListener('resize', handleResize);
  // Cleanup the event listener on component unmount
  return () => {
      window.removeEventListener('resize', handleResize);
  };
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
      if (recipe[filter] === true) return true;
      if (recipe.type.includes(filter)) return true;
      return false;
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

  return (
    <section className="todays-recipe-section flex flex-col items-center overflow-hidden">
      <h3 className="text-[1.7rem] md:text-[2rem] text-primary font-[500] py-[10px] md:py-[30px]">
        Todas nuestras recetas
      </h3>

      <div className="flex w-[100%] justify-center items-center  pb-[10px] md:pb-[15px]">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex gap-y-2 gap-x-4 flex-wrap justify-center items-center pb-[25px] md:pb-[50px]">
        <FilterButton
          title={"vegetariano"}
          filterStr={"isVegetarian"}
          handleClick={handleFilterClick}
        />
        <FilterButton
          title={"vegano"}
          filterStr={"isVegan"}
          handleClick={handleFilterClick}
        />
        <FilterButton
          title={"sin gluten"}
          filterStr={"isGlutenFree"}
          handleClick={handleFilterClick}
        />
        <FilterButton
          title={"pescado"}
          filterStr={"Pescado"}
          handleClick={handleFilterClick}
        />
        <FilterButton
          title={"legumbres"}
          filterStr={"Legumbres"}
          handleClick={handleFilterClick}
        />
      </div>
      {/* <div className="recipe-grid flex flex-wrap justify-center gap-[2.5rem] max-w-[1150px]">
        {currentRecipes.map((recipe, i) => {
          const formattedName = formatStringToUrl(recipe.name)
          return (
            <Link key={recipe.name + i} href={`/recetas/${formattedName}?recipeId=${recipe.id}`}>
              <RecipeCardCollection recipe={recipe} />
            </Link>
          );
        })}
      </div> */}
      {currentRecipes.length === 0 ?
        <p>Ninguna receta encontrada</p>
        :''
      }
      {isViewportMobile
        ? <RecipeCarousel 
            visibleSlides={1}
            recipes={currentRecipes}
          />
        : (<div className="recipe-grid flex flex-wrap justify-center gap-[2.5rem] max-w-[1200px] px-6">
          {currentRecipes.map((recipe, i) => {
            const formattedName = formatStringToUrl(recipe.name)
            return (
              <Link key={recipe.name + i} href={`/recetas/${formattedName}?recipeId=${recipe.id}`}>
                <RecipeCardCollection recipe={recipe} />
              </Link>
            );
          })}
        </div>)
      }
      
    </section>
  );
}

export default RecipeCollection;
