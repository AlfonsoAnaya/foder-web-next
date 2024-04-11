import './ShoppingListButton.css'

function ShoppingListButton() {
    return (
        <div className="absolute md:fixed flex flex-col items-center justify-center top-[78px] right-[20px] md:top-[80px] md:right-[20px] z-[1] md:z-[11]">
            <div className="bg-white btn-vegetarian-toggle border-[1px] hover:cursor-pointer border-secondary rounded-full p-2 hover:bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[25px] h-[25px] fill-secondary hover:fill-white" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M8.048 2.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 0 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036ZM11.25 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM8.048 9.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036ZM11.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Zm-3.202 4.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036ZM11.25 19a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            </div>

            <span className="btn-text bg-white px-[4px] py-[2px] text-secondary font-[600] text-[.8rem]">Lista de compras</span>
        </div>

    )

}

export default ShoppingListButton

