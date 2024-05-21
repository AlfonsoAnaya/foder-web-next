import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    52, //veg
    20,
    6,
    50, //veg
    16,
    54, //veg
    10
]

const currentWeekRecipesVeg: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesVeg.push(recipe);
})

export default currentWeekRecipesVeg;