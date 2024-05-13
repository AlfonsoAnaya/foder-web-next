import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    11, 
    34, //veg
    2,
    18,
    14, 
    47, //veg
    8,
    19, 
    38, //veg
    13
]

const currentWeekRecipesMerged: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesMerged.push(recipe);
})

export default currentWeekRecipesMerged;