import recipes from "./recipes";
import Recipe from "../types/recipe.d";

const currentWeekRecipesId = [
    1,
    2,
    3,
    4,
    5,
    10,
    7
]

const currentWeekRecipes: Recipe[] = [];

currentWeekRecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipes.push(recipe);
})

export default currentWeekRecipes;