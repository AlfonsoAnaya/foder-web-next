import './VegetarianButton.css'

function OmnivoreButton() {
    return (
        <div className="absolute md:fixed flex flex-col items-center justify-center top-[73px] right-[50px] md:top-[100px] md:right-[30px] z-[1] md:z-[11]">
            <div className="bg-white btn-vegetarian-toggle border-[1px] hover:cursor-pointer border-omnivoreRed rounded-full p-2 hover:bg-omnivoreRed">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
                    <defs>
                        <style>{`.cls-2{fill:#efc589;}.cls-3{fill:#2d2d2d;}.cls-4{fill:#3e2c27;}`}</style>
                    </defs>
                    <g id="Lion">
                        <path d="M57 35.39a13 13 0 0 1-6.64 11.33L32 57 13.64 46.72A13 13 0 0 1 8.66 29l4.53-8 2.44-4.35a18.75 18.75 0 0 1 25.86-7 18.36 18.36 0 0 1 2.16 1.48 18.72 18.72 0 0 1 4.72 5.54L50.81 21l4.53 8A13 13 0 0 1 57 35.39Z" style={{ fill: '#bd7f00' }} />
                        <path d="M57 14a7 7 0 0 1-6.19 7l-2.44-4.4a18.72 18.72 0 0 0-4.72-5.54A7 7 0 0 1 57 14ZM20.35 11.06a18.72 18.72 0 0 0-4.72 5.54L13.19 21a7 7 0 1 1 7.16-9.89ZM44.57 34.14 38.74 45A7.66 7.66 0 0 1 32 49a7.66 7.66 0 0 1-6.74-4l-5.83-10.86a4.12 4.12 0 0 1-3.91-5.42l2.61-7.82a4 4 0 0 1 5.16-2.5L32 21.57l8.71-3.17a4 4 0 0 1 5.16 2.5l2.61 7.82a4.12 4.12 0 0 1-3.91 5.42Z" className="cls-2" />
                        <circle cx="25.5" cy="26.5" r="1.5" className="cls-3" />
                        <circle cx="38.5" cy="26.5" r="1.5" className="cls-3" />
                        <path d="M32 42a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Z" className="cls-4" />
                        <path d="M29 44a1 1 0 0 1-.55-1.83l3-2a1 1 0 0 1 1.1 1.66l-3 2A.94.94 0 0 1 29 44Z" className="cls-4" />
                        <path d="M35 44a.94.94 0 0 1-.55-.17l-3-2a1 1 0 0 1 1.1-1.66l3 2A1 1 0 0 1 35 44ZM32 37.38l-2.23-1.12A1.4 1.4 0 0 1 29 35a1.39 1.39 0 0 1 1.39-1.39h3.22A1.39 1.39 0 0 1 35 35a1.4 1.4 0 0 1-.77 1.24Z" className="cls-4" />
                    </g>
                </svg>            </div>
            <span className="bg-white px-[4px] py-[2px] text-omnivoreRed font-[600] text-[.8rem] opacity-0">Ver Plan Omnivoro</span>
        </div>
    )

}

export default OmnivoreButton