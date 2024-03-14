import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
// import WeeklyPlan from "../components/WeeklyPlan/WeeklyPlan"
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
            <Header />
            <ShoppingList />
            <Footer />
        </main>

    )
};

export default ShoppingListPage