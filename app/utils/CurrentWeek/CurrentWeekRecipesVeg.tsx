import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    57, //veg
    24,
    6,
    61, //veg
    8,
    41, //veg
    28
]

const currentWeekRecipesVeg: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesVeg.push(recipe);
})

export default currentWeekRecipesVeg;