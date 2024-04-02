import recipes from "./recipes";
import Recipe from "../types/recipe.d";

const WeeklyPlansIds = [
    [ 1,  2,  3,  4,  5, 10,  7],
    [11, 12,  6, 14, 26, 13,  9],
    [17, 20, 12, 26, 13,  9, 11] 
]

const WeeklyPlansArchive: any[] = [];

WeeklyPlansIds.map(plan => {
    let recipesPlan: Recipe[] = [];
    plan.forEach(id => {
        const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === id);
        if (recipe) recipesPlan.push(recipe);
    });
    WeeklyPlansArchive.push(recipesPlan);
})

export default WeeklyPlansArchive;