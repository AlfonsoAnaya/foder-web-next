import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    25, 
    57, //veg
    24,
    27,
    23,
    61, //veg
    8,
    22,
    41, //veg
    28
]

const currentWeekRecipesMerged: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesMerged.push(recipe);
})

export default currentWeekRecipesMerged;