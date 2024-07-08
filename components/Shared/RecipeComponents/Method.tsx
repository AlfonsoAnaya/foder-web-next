import Recipe from "@/types/recipe.d"

interface MethodProps {
    recipe: Recipe
}

function Method({ recipe }: MethodProps) {
    return (
        <div className="font-sans leading-8  recipe-method flex flex-col gap-8 justify-start items-left text-[18px]">
            <h3 className="font-[600] mb-[.5rem] md:mb-0
            text-[16px] md:text-[18px] 
            mt-2 md:mt-0 uppercase">Instrucciones</h3>
            <ul className="">
                {recipe.method.map((text: string, i: number) => {
                    return (
                        <li key={`paragraph ${i}`} className="method-text font-[400] mb-[1rem] flex flex-col">
                            <span>{i + 1}</span>
                            <span>{`${text}`}</span>
                        </li>
                    )
                })}
            </ul>
            

        </div>
    )
}

export default Method