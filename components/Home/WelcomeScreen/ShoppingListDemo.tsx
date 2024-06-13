function ShoppingListDemo() {
    return (
        <div className="h-[78vh] md:h-landingHeightDesktop flex flex-col justify-center items-center bg-grayLight md:bg-white ">
            <div className="text-center md:text-left md:h-[90%] flex flex-col border-[2px] border-dark border-dashed bg-primary rounded-lg
            md:flex-row justify-start md:justify-start items-center md:items-stretch w-[100%] md:w-[90%] max-w-[1200px] px-2 pt-4 md:p-0">
                <h2 className="block md:hidden text-[1.1rem] md:text-[1.25rem] text-dark font-[600]">
                        Crea listas de compras interactivas en unos cuantos clicks
                    </h2>
                <div className="flex flex-wrap gap-4 justify-center items-center md:pl-20">
                    <video autoPlay muted loop playsInline className="rounded-[10px] h-[57vh] md:h-[95%] w-[auto]">
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
                <div className="w-[90%] md:w-[70%] p-12 flex flex-col justify-center items-left gap-2 md:gap-6">
                    <h2 className="hidden md:block text-[1.5rem] md:text-[2.25rem] text-dark font-[600]">
                        Crea listas de compras interactivas en unos cuantos clicks
                    </h2>
                    <h3 className="recipe-title text-[.9rem] md:text-[1.5rem] text-dark   font-[500]">
                        Selecciona tus recetas y ordenamos los ingredientes automáticamente
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ShoppingListDemo