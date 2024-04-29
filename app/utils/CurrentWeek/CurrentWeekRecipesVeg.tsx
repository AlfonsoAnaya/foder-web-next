import recipes from "../recipes";
import Recipe from "../../../types/recipe.d";

const RecipesId = [
    46, //veg
    20,
    18,
    67, //veg
    16,
    38, //veg
    29
]

const currentWeekRecipesVeg: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesVeg.push(recipe);
})

export default currentWeekRecipesVeg;