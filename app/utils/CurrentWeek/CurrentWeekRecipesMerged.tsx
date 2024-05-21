import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    17, 
    52, //veg
    20,
    6,
    21,
    50, //veg
    16,
    9, 
    54, //veg
    10
]

const currentWeekRecipesMerged: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesMerged.push(recipe);
})

export default currentWeekRecipesMerged;