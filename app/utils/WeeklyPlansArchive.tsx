import recipes from "./recipes";
import Recipe from "../../types/recipe.d";

const WeeklyPlansIds = [
    [ 1,  2,  3,  4,  5,  7, 10], //1
    [34,  2,  3, 50,  5, 53, 10], //1 VEG
    [11, 12,  6, 14, 26,  9, 13], //2
    [52, 12,  6, 47, 26, 54, 13], //2 VEG
    [17, 20, 18, 21, 16, 19, 29], //3
    [46, 20, 18, 67, 16, 38, 29], //3 VEG
    [25, 24, 27, 23,  8, 22, 28], //4
    [57, 24, 6, 61,  8, 41, 28], //4 VEG

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