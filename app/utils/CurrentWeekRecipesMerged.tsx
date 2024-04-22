import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const RecipesId = [
    11,
    52, //veg
    12,
    6,
    14,
    47, //veg
    26,
    9,
    54, //veg
    13
]

const currentWeekRecipesMerged: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesMerged.push(recipe);
})

export default currentWeekRecipesMerged;