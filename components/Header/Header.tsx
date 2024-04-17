'use client'
//import SearchBar from "./Shared/SearchBar";
import MobileNavMenu from "./MobileNavMenu";
import HeaderUtilities from "./HeaderUtilities";
import "./Header.css";
import Link from "next/link";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";

function Header() {
    const toggleMobileNav = () => {
        const navToggle = document.querySelector('.header-nav');
        if (navToggle?.classList.contains("nav-open")) navToggle?.classList.remove("nav-open")
        else {navToggle?.classList.add("nav-open")}
    }

    const closeMobileNav = () => {
        const navToggle = document.querySelector('.header-nav');
        navToggle?.classList.remove("nav-open");
    }

    const updateCurrentNavSection = useCurrentNavSectionStore((state) => state.updateCurrentNavSection);

    return (
        <header className="sticky header-nav top-0 z-20  w-100% flex justify-center align-center px-4 md:px-10 nav: border-b-primary border-b-[1px]
            bg-primary ">
            <div className="flex flex-col justify-center align-center w-[100%] max-w-[1200px]">
                <div className="flex flex-1 flex-row md:gap-16 items-center justify-between md:justify-start relative">

                    {/* Website Name */}
                    
                        <h1 id="header-title"
                            className="large-text text-left  
                            font-siteTitle
                            text-white uppercase
                            text-[2.5em] md:text-[3.15em] leading-[1em] py-[12px]"
                            onClick={() => {
                                closeMobileNav;
                                updateCurrentNavSection("");
                            }}>
                            <Link 
                                href="/"
                                onClick={closeMobileNav}
                            >
                                Pipián
                            </Link>
                            
                        </h1>
                    
                    <MobileNavMenu
                    toggleMobileNav={toggleMobileNav}
                    />

                    {/* <HeaderUtilities /> */}
                    
                    <div className="block md:hidden"
                        onClick={toggleMobileNav}>
                        <span className="hamburger bg-white">
                        </span>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header;