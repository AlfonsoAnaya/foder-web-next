import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const currentWeekRecipesId = [
    12,
    2,
    3,
    26,
    5,
    10,
    13
]

const currentWeekRecipesVeg: Recipe[] = [];

currentWeekRecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesVeg.push(recipe);
})

export default currentWeekRecipesVeg;