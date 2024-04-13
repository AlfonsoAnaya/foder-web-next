import Ingredient from "./ingredientd.d"; 

interface Recipe {
    id: number; 
    name: string;
    extraRecipeName?: string;
    tagline: string;
    ingredients: Ingredient[];
    extraIngredients?: Ingredient[];
    primaryIngredient: string;
    secondaryIngredient: string;
    portions: number;
    difficulty: string;
    prepTime: number;
    totalTime: number;
    img: string;
    imgThumb: string;
    imgAlt?: string;
    type: string;
    cuisine: string[];
    method: string[];
    tips?: string[];
    isVegan: boolean;
    hasVeganOption: boolean;
    isDairyFree: boolean;
    isVegetarian: boolean;
    isGlutenFree: boolean;
    hasGlutenFreeOption: boolean;
    isSpicy: boolean;
    isQuickAndEasy: boolean;
    isBudgetFriendly: boolean;
    isBatchCooking: boolean;
    isLowCarb: boolean;
    isHighProtein: boolean;
    isLowCalorie: boolean;
    isHeartHealthy: boolean;
    isMainDish: boolean;
    isDessert: boolean;
    isSideDish: boolean;
    isSpringDish: boolean;
    isSummerDish: boolean;
    isAutumnDish: boolean;
    isWinterDish: boolean;
    saves: number;
}

export default Recipe 