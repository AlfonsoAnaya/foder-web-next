import recipes from "./recipes";
import Recipe from "../types/recipe.d";

const WeeklyPlansIds = [
    [0,1,2,3,4,9,6],
    [10,11,6,9,4,3,2] 
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