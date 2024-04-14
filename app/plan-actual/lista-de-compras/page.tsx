import dynamic from "next/dynamic"
import currentWeekRecipes from "@/app/utils/CurrentWeekRecipes";

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
                recipes={currentWeekRecipes}
                isWeekVegetarian={false}
            />
        </main>

    )
};

export default ShoppingListPage