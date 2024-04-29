import DaysRecipe from "./DaysRecipe/DaysRecipe";
import RecipeCarousel from "./WeeklyPlanCarousel/RecipeCarousel";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import currentWeekRecipes from "@/app/utils/CurrentWeek/CurrentWeekRecipes";
import currentWeekRecipesMerged from "@/app/utils/CurrentWeek/CurrentWeekRecipesMerged";

function HomePage() {

    return (
        <>
            <WelcomeScreen />
            <RecipeCarousel
                recipes={currentWeekRecipesMerged}
            />
            <DaysRecipe
                recipes={currentWeekRecipes}
            />
        </>
    );
}

export default HomePage;