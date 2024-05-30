import dynamic from "next/dynamic"

const RecipeDetails = dynamic(
    () => import("../../../components/RecipeDetails/RecipeDetails"),
    {
        ssr: false,
    }
);

export default function RecipeDetailsPage({params}:
    {params:{
        recipeId:string
        formattedName:string
    }
}) {
    const { recipeId, formattedName } = params; 
    
    return (
        <>
            <RecipeDetails 
                recipeId={recipeId}
            />
        </>

    )
}