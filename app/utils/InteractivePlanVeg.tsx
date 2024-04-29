import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const RecipesId = [
    11, 
    12,
    6,
    14, 
    26,
    9, 
    13
]

const currentWeekRecipes: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipes.push(recipe);
})

export default currentWeekRecipes;