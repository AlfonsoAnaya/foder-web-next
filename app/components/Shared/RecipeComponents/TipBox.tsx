import Recipe from "@/app/types/recipe.d"

interface TipBoxProps {
    recipe: Recipe
}

function TipBox({ recipe }: TipBoxProps) {
    return (
        <div className="w-full bg-[#24837b49] bg-opacity p-6 rounded-lg flex justify-center items-center gap-4 text-dark">
            <div className="font-siteTitle text-[4rem] uppercase">Tips</div>
            <div className="flex flex-col gap-2 leading-6">
            {recipe.tips?.map((tip, i) => (
                <p key={`tip-paragraph ${i}`}
                >
                    {tip}
                </p>
            ))}
            </div>
        </div>
    )
}

export default TipBox