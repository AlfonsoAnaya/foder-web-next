import './VegetarianButton.css'

function VegetarianButton() {
    return (
        <div className="absolute md:fixed flex flex-col items-center justify-center top-[73px] right-[50px] md:top-[100px] md:right-[30px] z-[1] md:z-[11]">
            <div className="bg-white btn-vegetarian-toggle border-[1px] hover:cursor-pointer border-vegetarianGreen rounded-full p-2 hover:bg-vegetarianGreen">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="fill-vegetarianGreen hover:fill-white" viewBox="-7.5 0 32 32"><path d="M17.067 16.693c0-7.147-4.8-12.373-8.533-16.693C4.801 4.32.001 9.547.001 16.693c0 6.72 4.96 8.48 8 9.44V32h1.067v-5.867c3.04-.96 8-2.72 8-9.44zm-8 8.32v-4.16l3.36-3.36-.747-.747-2.613 2.613V8.532H8v5.12l-2.773-2.773-.747.747L8 15.146v9.867c-2.933-.96-6.933-2.613-6.933-8.32 0-6.24 3.893-10.933 7.467-15.04 3.573 4.107 7.467 8.8 7.467 15.04 0 5.707-4 7.36-6.933 8.32z" /></svg>
            </div>
            <span className="bg-white px-[4px] py-[2px] text-vegetarianGreen font-[600] text-[.8rem] opacity-0">Ver Plan Vegetariano</span>
        </div>

    )

}

export default VegetarianButton