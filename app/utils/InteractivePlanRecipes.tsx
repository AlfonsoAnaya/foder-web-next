import recipes from "./recipes";
import Recipe from "../../types/recipe.d";
import InteractivePlanRecipes from "@/types/interactivePlanRecipes.d";
import Weekdays from "./Weekdays";
import RecipesIds from "./InteractivePlanIds";


const InteractivePlan: InteractivePlanRecipes[] = [];

RecipesIds.forEach((array, i) => {
    const newDay = {
        day: Weekdays.omnivore[i],
        options: [] as Recipe[],
    };

    array.forEach(id => {
        const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === id);
        if (recipe !== undefined) {
            newDay.options.push(recipe);
        }
    })
    
    InteractivePlan.push(newDay);
})

export default InteractivePlan;