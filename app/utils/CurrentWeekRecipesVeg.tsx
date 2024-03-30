import recipes from "./recipes";
import Recipe from "../types/recipe.d";

const currentWeekRecipesId = [
    10,
    11,
    6,
    9,
    4,
    3,
    2
]

const currentWeekRecipesVeg: Recipe[] = [];

currentWeekRecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesVeg.push(recipe);
})

export default currentWeekRecipesVeg;