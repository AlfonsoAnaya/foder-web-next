import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const RecipesId = [
    1,
    2,
    3,
    4,
    5,
    7,
    10
]

const currentWeekRecipes: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipes.push(recipe);
})

export default currentWeekRecipes;