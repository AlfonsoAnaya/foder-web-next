function ShoppingListDemo() {
    return (
        <div className="h-[78vh] md:h-[500px] flex flex-col justify-start items-center bg-grayLight md:bg-white md:my-12">
            <div className="text-center md:text-left flex flex-col gap-2 md:flex-row justify-start md:justify-center items-center md:items-stretch w-[100%] md:w-[95%] max-w-[1200px] px-2 pt-4 md:p-0">
                <h2 className="block md:hidden text-[1.25rem] text-primary font-[600]">
                        Crea listas de compras interactivas en unos cuantos clicks
                    </h2>
                <div className="w-[100%] md:w-[40%] md:h-auto flex flex-wrap gap-4 justify-center items-center">
                    <video autoPlay muted loop playsInline className="rounded-[10px] border-[1px] border-grayLight w-[260px] md:w-[320px]">
                        <source 
                            src="/videos/shopping-list-demo.webm" 
                            type='video/webm;codecs="vp8, vorbis"'
                        />
                        <source 
                            src="/videos/shopping-list-demo.mp4" 
                            type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                        />
                    </video>
                </div>
                <div className="w-[90%] md:w-[50%] md:pl-16 flex flex-col justify-center items-left gap-2 md:gap-6">
                    <h2 className="hidden md:block text-[1.5rem] md:text-[2.25rem] text-primary font-[600]">
                        Crea listas de compras interactivas en unos cuantos clicks
                    </h2>
                    <h3 className="recipe-title text-[.9rem] md:text-[1.5rem] text-dark font-serif font-[500]">
                        Selecciona tus recetas y ordenamos los ingredientes automáticamente
                    </h3>
                    <p className="welcome-text text-dark text-[.9rem] font-[500] md:text-[1.15rem]">
                        Hazte usuario y guarda tus listas de compras
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingListDemo