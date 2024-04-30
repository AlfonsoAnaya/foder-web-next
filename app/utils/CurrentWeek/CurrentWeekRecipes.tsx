import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    17, //veg
    20,
    18,
    21, //veg
    16,
    19, //veg
    29
]

const currentWeekRecipes: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipes.push(recipe);
})

export default currentWeekRecipes;