import recipes from "./recipes";
import Recipe from "../../types/recipe.d";
import RecipesIds from "./InteractivePlanIds";

// Define a function to select recipes based on interactive plan selection
const selectRecipes = (): Recipe[] => {
    const interactivePlanSelectionString = localStorage.getItem("interactivePlanSelection");
    const interactivePlanSelection = interactivePlanSelectionString ? JSON.parse(interactivePlanSelectionString) : {
        Lunes: 0,
        Martes: 0,
        Miércoles: 0,
        Jueves: 0,
        Viernes: 0,
        Sábado: 0,
        Domingo: 0,
    };

    const selectedRecipes: Recipe[] = [];

    if (interactivePlanSelection) {
        Object.keys(interactivePlanSelection).forEach((key, i) => {
            const recipeId = RecipesIds[i][interactivePlanSelection[key]];
            const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === recipeId);
            if (recipe !== undefined) {
                selectedRecipes.push(recipe);
            }
        });
    }

    return selectedRecipes;
};

// Export the function for external use
export default selectRecipes;