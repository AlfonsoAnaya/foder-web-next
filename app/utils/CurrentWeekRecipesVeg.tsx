import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const currentWeekRecipesId = [
    34,
    2,
    3,
    50,
    5,
    53,
    10
]

const currentWeekRecipesVeg: Recipe[] = [];

currentWeekRecipesId.forEach(i => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === i);
    if (recipe) currentWeekRecipesVeg.push(recipe);
})

export default currentWeekRecipesVeg;