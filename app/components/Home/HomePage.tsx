import DaysRecipe from "./DaysRecipe/DaysRecipe";
import RecipeCarousel from "./WeeklyPlanCarousel/RecipeCarousel";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import currentWeekRecipes from "@/app/utils/CurrentWeekRecipes";

function HomePage() {

    return (
        <>
            <WelcomeScreen />
            <RecipeCarousel
                recipes={currentWeekRecipes}
            />
            <DaysRecipe
                recipes={currentWeekRecipes}
            />
        </>
    );
}

export default HomePage;