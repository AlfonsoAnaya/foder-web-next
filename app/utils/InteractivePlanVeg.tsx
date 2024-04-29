import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const RecipesId = [
    52, //veg
    12,
    6,
    47, //veg
    26,
    54, //veg
    13
]

const currentWeekRecipes: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipes.push(recipe);
})

export default currentWeekRecipes;