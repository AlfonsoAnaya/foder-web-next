import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const WeeklyPlansIds = [
    [ 1,  2,  3,  4,  5,  7, 10],
    [34,  2,  3, 50,  5, 53, 10],
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