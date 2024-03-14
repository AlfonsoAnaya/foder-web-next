interface Ingredient {
    name: { singular: string,
            plural: string 
    };
    quantity: number;
    unit: string;
    category: string;
    ingredientClarification?: string;
}
export default Ingredient