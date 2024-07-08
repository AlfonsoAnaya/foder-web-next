import Recipe from "@/types/recipe.d"

interface TipBoxProps {
    recipe: Recipe
}

function TipBox({ recipe }: TipBoxProps) {
    return (
        <div className="w-full bg-primaryLight bg-opacity border-[1px] border-dark border-dashed p-6 mb-10 md:mb-0 rounded-lg flex flex-col justify-center items-left gap-4 text-dark">
            <div className="text-[1.5rem] uppercase">Tips</div>
            <ul className="flex flex-col gap-2 leading-6 text-[1rem]">
            {recipe.tips?.map((tip, i) => (
                <li key={`tip-paragraph ${i}`}
                    className="flex gap-2"
                >
                    <span className="text-[1.25rem]">•</span><p>{tip}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default TipBox