import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const RecipesId = [
    34, //veg
    2,
    3,
    50, //veg
    5,
    53, //veg
    10
]

const currentWeekRecipesVeg: Recipe[] = [];

RecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesVeg.push(recipe);
})

export default currentWeekRecipesVeg;