import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    17, 
    46, //veg
    20,
    18,
    21, 
    67, //veg
    16,
    19,
    38, //veg
    29
]

const currentWeekRecipesMerged: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesMerged.push(recipe);
})

export default currentWeekRecipesMerged;