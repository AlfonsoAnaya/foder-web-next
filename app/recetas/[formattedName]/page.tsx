"use client"
import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation";

const RecipeDetails = dynamic(
    () => import("../../../components/RecipeDetails/RecipeDetails"),
    {
        ssr: false,
    }
);

export default function RecipeDetailsPage() {
    const searchParams = useSearchParams();
    let recipeId = searchParams.get("recipeId");


    if (recipeId === null) {
        return <div>Loading...</div>;
      }
    
    return (
        <>
            <RecipeDetails 
                recipeId={recipeId}
            />
        </>

    )
}