'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";
import useIsCustomPlanSelectedStore from "@/app/ZustandStore/IsCustomPlanSelectedStore";
import { FaChevronDown } from "react-icons/fa6";
import useClickOutside from "@/hooks/useClickOutside";


function MobileNavMenu(
    props: { toggleMobileNav: () => void }
) {

    const [selectedPlan, setSelectedPlan] = useState<String>("Planes")
    const [isPlanMenuOpen, setIsPlanMenuOpen] = useState<Boolean>(false);
    const currentNavSection = useCurrentNavSectionStore((state) => state.currentNavSection);
    const isCustomPlanSelected = useIsCustomPlanSelectedStore((state) => state.isCustomPlanSelected);
    const updateIsCustomPlanSelected = useIsCustomPlanSelectedStore((state) => state.updateisCustomPlanSelected);
    
    const handleClickOutside = () => {
        setIsPlanMenuOpen(false);
      };
    
    const ref = useClickOutside(handleClickOutside);

    useEffect(() => {
        const storedValue = localStorage.getItem("interactivePlanSelection");
        if (storedValue !== null) {
            updateIsCustomPlanSelected(true);
        } else {
            updateIsCustomPlanSelected(false);
        }
    }, [isCustomPlanSelected]);


    const openMenu = () => {
        setIsPlanMenuOpen((prev)=>!prev)
    }


    const selectOption = (planName:string) => {
        setSelectedPlan(planName);
    }

    return (
        <div className="nav-toggle font-sans flex self-center
                    fixed top-[64px] left-0 right-0 md:static 
                    w-[100%] h-[calc(100vh-65px)] md:w-auto md:h-auto 
                    translate-x-full md:translate-x-0
                    bg-primary md:bg-transparent
                    justify-center md:justify-start"
        >
            <ul className="flex gap-[2rem] font-[500]
                        font-sans lowercase
                        pt-10 md:pt-0
                        text-dark 
                        flex-col md:flex-row
                        whitespace-nowrap
                        items-center md:items-baseline
                        text-[22px] md:text-[18px]"
            >
                {/* <Link to={`/`}>
                    <li
                        onClick={() => {
                            props.toggleMobileNav;
                            handleSectionClick("lista-de-compras")
                        }}
                        className="pb-[2px] hover:text-dark cursor-pointer border-b-[transparent] border-b-[3px] 
                                hover:border-b-secondary hover:border-b-[3px] transition-fill duration-300">
                        Recetas
                    </li>
                </Link> */}
                <li 
                    className={`${(currentNavSection === "plan-actual" || currentNavSection === "plan-actual-vegetariano" || currentNavSection === "planes-anteriores") 
                         ? "current-nav-section" 
                         : ""}
                        relative hidden md:block`}
                    onClick={openMenu}
                    ref={ref}
                >
                    <div className="flex gap-2 items-center justify-center hover:text-dark hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]">
                        {selectedPlan} <span className="text-[10px]"><FaChevronDown /></span>
                    </div>
                    {isPlanMenuOpen ?
                        <ul className="bg-primary absolute top-[140%] -left-[20px] w-fit">
                            <Link href="/plan-actual">
                            <li 
                                className={`${currentNavSection === "plan-actual" ? "current-nav-section" : ""} hover:bg-secondary px-4 py-2`}
                                onClick={()=>selectOption("plan actual")}    
                            >
                                plan actual
                            </li>
                            </Link>
                            
                            <Link href="/plan-actual-vegetariano"><li 
                                className={`${currentNavSection === "plan-actual-vegetariano" ? "current-nav-section" : ""} hover:bg-secondary px-4 py-2`}
                                onClick={()=>selectOption("plan actual veg")}    
                            >
                                plan actual veg
                            </li>
                            </Link>
                            <Link href="/acervo-planes-semanales"><li 
                                className={`${currentNavSection === "planes-anteriores" ? "current-nav-section" : ""} hover:bg-secondary px-4 py-2`}
                                onClick={()=>selectOption("planes anteriores")}    
                            >
                                planes anteriores
                            </li>
                            </Link>
                        </ul>
                        : ''
                    }

                </li>

                <li
                    onClick={props.toggleMobileNav}
                    className={`${currentNavSection === "plan-actual" ? "current-nav-section" : ""} md:hidden hover:text-dark hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                    <Link href="/plan-actual">
                        plan Actual
                    </Link>

                </li>


                <li
                    onClick={props.toggleMobileNav}
                    className={`${currentNavSection === "plan-actual-vegetariano" ? "current-nav-section" : ""} md:hidden hover:text-dark hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                    <Link href="/plan-actual-vegetariano">
                        Plan actual veg
                    </Link>
                </li>

                <li
                    onClick={props.toggleMobileNav}
                    className={`${currentNavSection === "planes-anteriores" ? "current-nav-section" : ""} md:hidden hover:text-dark hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                    <Link href="/acervo-planes-semanales">
                        Planes Anteriores
                    </Link>
                </li>

                <li
                    onClick={props.toggleMobileNav}
                    className={`${currentNavSection === "recetas" ? "current-nav-section" : ""} hover:text-dark hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                    <Link href="/recetas">
                        Recetas
                    </Link>
                </li>

                {isCustomPlanSelected
                    ? (<li
                        onClick={props.toggleMobileNav}
                        className={`${currentNavSection === "mi-plan" ? "current-nav-section" : ""} hover:text-dark hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                        <Link href="/mi-plan">
                            Mi plan
                        </Link>
                    </li>)
                    : (<li
                        onClick={props.toggleMobileNav}
                        className={`${currentNavSection === "arma-tu-plan" ? "current-nav-section" : ""} hover:text-dark hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-[3px]`}>
                        <Link href="/arma-tu-plan">
                            Arma tu plan
                        </Link>
                    </li>)
                }




            </ul>
        </div>
    )
}

export default MobileNavMenu