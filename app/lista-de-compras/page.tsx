import dynamic from "next/dynamic"

const ShoppingList = dynamic(
    () => import ("../components/ShoppingList/ShoppingList"),
    {
        ssr:false,
    }
);

function ShoppingListPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <ShoppingList />
        </main>

    )
};

export default ShoppingListPage