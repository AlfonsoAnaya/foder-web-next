import Recipe from "@/app/types/recipe.d"

interface TipBoxProps {
    recipe: Recipe
}

function TipBox({ recipe }: TipBoxProps) {
    return (
        <div className="w-full bg-[#24837b49] bg-opacity p-6 mb-10 md:mb-0 rounded-lg flex justify-center items-center gap-4 text-dark">
            <div className="font-siteTitle text-[4rem] uppercase">Tips</div>
            <ul className="flex flex-col gap-2 leading-6 text-[1rem]">
            {recipe.tips?.map((tip, i) => (
                <li key={`tip-paragraph ${i}`}
                    className="flex gap-2"
                >
                    <span className="text-[3rem]">•</span><p>{tip}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default TipBox