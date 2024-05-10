'use client'
import Link from "next/link";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";


function MobileNavMenu(
    props: { toggleMobileNav: () => void }
) {

    const currentNavSection = useCurrentNavSectionStore((state) => state.currentNavSection);
    const isCustomPlanSelected = localStorage.getItem("interactivePlanSelection") !== null;

    return (
        <div className="nav-toggle font-sans flex self-center
                    fixed top-[64px] left-0 right-0 md:static
                    w-[100%] h-[calc(100vh-65px)] md:w-auto md:h-auto 
                    translate-x-full md:translate-x-0
                    bg-primary md:bg-transparent
                    justify-center md:justify-start"
        >
            <ul className="flex gap-[2rem] font-[600] uppercase
                        pt-10 md:pt-0
                        text-white 
                        flex-col md:flex-row
                        items-center md:items-start
                        text-[1.75em] md:text-[1.05em]"
            >
                {/* <Link to={`/`}>
                    <li
                        onClick={() => {
                            props.toggleMobileNav;
                            handleSectionClick("lista-de-compras")
                        }}
                        className="pb-[2px] hover:text-secondary cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] transition-fill duration-300">
                        Recetas
                    </li>
                </Link> */}

                <li
                    onClick={props.toggleMobileNav}
                    className={`${currentNavSection === "plan-actual" ? "current-nav-section" : ""} hover:text-secondary hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                    <Link href="/plan-actual">
                        Plan Actual
                    </Link>

                </li>


                <li
                    onClick={props.toggleMobileNav}
                    className={`${currentNavSection === "plan-actual-vegetariano" ? "current-nav-section" : ""} hover:text-secondary hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                    <Link href="/plan-actual-vegetariano">
                        Plan actual veg
                    </Link>
                </li>

                <li
                    onClick={props.toggleMobileNav}
                    className={`${currentNavSection === "planes-anteriores" ? "current-nav-section" : ""} hover:text-secondary hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                    <Link href="/acervo-planes-semanales">
                        Planes Anteriores
                    </Link>
                </li>

                <li
                    onClick={props.toggleMobileNav}
                    className={`${currentNavSection === "recetas" ? "current-nav-section" : ""} hover:text-secondary hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                    <Link href="/recetas">
                        Recetas
                    </Link>
                </li>

                {isCustomPlanSelected
                    ? (<li
                        onClick={props.toggleMobileNav}
                        className={`${currentNavSection === "mi-plan" ? "current-nav-section" : ""} hover:text-secondary hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                        <Link href="/mi-plan">
                            Mi plan
                        </Link>
                    </li>)
                    : (<li
                        onClick={props.toggleMobileNav}
                        className={`${currentNavSection === "arma-tu-plan" ? "current-nav-section" : ""} hover:text-secondary hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                        <Link href="/arma-tu-plan">
                            Arma tu plan
                        </Link>
                    </li>)}




            </ul>
        </div>
    )
}

export default MobileNavMenu