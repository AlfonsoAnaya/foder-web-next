import dynamic from "next/dynamic"

const RecipeDetails = dynamic(
    () => import("../../../components/RecipeDetails/RecipeDetails"),
    {
        ssr: false,
    }
);

export default function RecipeDetailsPage({params}:
    {params:{recipeId:string}
}) {
    const { recipeId } = params; 
    
    return (
        <>
            <RecipeDetails 
                recipeId={recipeId}
            />
        </>

    )
}