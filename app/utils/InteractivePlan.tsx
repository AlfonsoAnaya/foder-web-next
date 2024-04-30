import recipes from "./recipes";
import Recipe from "../../types/recipe.d";
import InteractivePlanRecipes from "@/types/interactivePlanRecipes.d";
import Weekdays from "./Weekdays";

const RecipesId = [
[1,2,3,4],          //Lun
[5,6,7,9],          //Mar
[10,11,12,13],      //Mie
[14,17,18,20],      //Jue
[21,26,34,47],      //Vie
[50,52,53,54],      //Sab
[16,18,67,46],      //Dom
]

const InteractivePlan: InteractivePlanRecipes[] = [];

RecipesId.forEach((array, i) => {
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