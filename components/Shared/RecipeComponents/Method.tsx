import Recipe from "@/types/recipe.d"
import TipBox from "./TipBox"

interface MethodProps {
    recipe: Recipe
}

function Method({ recipe }: MethodProps) {
    return (
        <div className="font-sans leading-8  recipe-method flex flex-col gap-4 justify-start items-left text-[18px]">
            <h3 className="font-[600] mb-[.5rem] underline 
            text-[1.1rem] md:text-[1.5rem] 
            mt-2 md:mt-0">Instrucciones</h3>
            <ul className="">
                {recipe.method.map((text: string, i: number) => {
                    return (
                        <li key={`paragraph ${i}`} className="method-text font-[400] mb-[1rem] flex gap-2">
                            <span className="font-[600] text-primary">{i + 1}</span>
                            <span>{`${text}`}</span>
                        </li>
                    )
                })}
            </ul>
            {recipe.tips ?
                <TipBox
                    recipe={recipe}
                />
                : ''
            }

        </div>
    )
}

export default Method