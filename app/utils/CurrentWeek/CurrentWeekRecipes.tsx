import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    25, //veg
    24,
    27,
    23, //veg
    8,
    22, //veg
    28
]

const currentWeekRecipes: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipes.push(recipe);
})

export default currentWeekRecipes;