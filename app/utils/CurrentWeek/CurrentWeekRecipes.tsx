import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    11, //veg
    2,
    18,
    14, //veg
    8,
    19, //veg
    6
]

const currentWeekRecipes: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipes.push(recipe);
})

export default currentWeekRecipes;