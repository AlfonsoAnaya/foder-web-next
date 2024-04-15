import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const RecipesId = [
    1,
    34, //veg
    2,
    3,
    4,
    50, //veg
    5,
    7,
    53, //veg
    10
]

const currentWeekRecipesMerged: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesMerged.push(recipe);
})

export default currentWeekRecipesMerged;