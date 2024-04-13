import Recipe from "@/app/types/recipe.d"

interface TipBoxProps {
    recipe: Recipe
}

function TipBox({ recipe }: TipBoxProps) {
    return (
        <div className="w-full bg-blue-300 p-4 flex gap-4">
            <div>SVG</div>
            <div>
            {recipe.tips?.map((tip, i) => (
                <p key={`tip-paragraph ${i}`}>{tip}</p>
            ))}
            </div>
            
        </div>
    )
}

export default TipBox