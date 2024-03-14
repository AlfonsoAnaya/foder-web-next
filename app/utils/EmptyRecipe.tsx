import Recipe from "../types/recipe.d";

let emptyRecipe: Recipe[] = [

    {
        id: 0,
        name: '',
        tagline: '',
        ingredients: [
            {
                name: {
                    singular: '',
                    plural: ''
                },
                quantity: 0,
                unit: '',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: '',
        secondaryIngredient: '',
        portions: 0, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: '',
        prepTime: 0, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 0,
        img: '', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: '',
        type: '',
        cuisine: [''],
        method: [
            ''
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: false,
        isDairyFree: false,
        isVegetarian: false,
        isGlutenFree: false,
        isSpicy: false,

        //time management tags
        isQuickAndEasy: false,
        isBudgetFriendly: false,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: false,
        isHeartHealthy: false,
        isMainDish: false,
        isDessert: false,
        isSideDish: false,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    }
]

export default emptyRecipe