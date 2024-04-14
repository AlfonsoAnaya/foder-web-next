import dynamic from "next/dynamic"
import currentWeekRecipesVeg from "@/app/utils/CurrentWeekRecipesVeg";

const ShoppingList = dynamic(
    () => import ("../../../components/ShoppingList/ShoppingList"),
    {
        ssr:false,
    }
);

function ShoppingListPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <ShoppingList 
                recipes={currentWeekRecipesVeg}
                isWeekVegetarian={true}
            />
        </main>

    )
};

export default ShoppingListPage