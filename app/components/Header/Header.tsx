'use client'
//import SearchBar from "./Shared/SearchBar";
import MobileNavMenu from "./MobileNavMenu";
import "./Header.css";
import Link from "next/link";

function Header() {
    const toggleMobileNav = () => {
        const navToggle = document.querySelector('.header-nav');
        navToggle?.classList.toggle("nav-open");
    }

    const closeMobileNav = () => {
        const navToggle = document.querySelector('.header-nav');
        navToggle?.classList.remove("nav-open");
    }

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
                            onClick={closeMobileNav}>
                            <Link href="/">
                                Pipián
                            </Link>
                            
                        </h1>
                    
                    <MobileNavMenu
                    toggleMobileNav={toggleMobileNav}
                    />

                    <div id="nav-utilities" className="gap-[1rem] justify-center items-center absolute right-0
                        hidden md:flex">
                        {/* Search bar */}
                        {/* <div className="w-[400px]">
                            <SearchBar onSearch={handleSearch} />
                        </div> */}
                        {/* Meal Plans */}
                        <Link href="/database-form">
                        <div className="hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                className="fill-primary stroke-primary hover:stroke-white transition-fill duration-800"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 6.52 21 7.08 21 8.2V10M7 3v2m10-2v2M3 9h18m-7.5 4H7m3 4H7m7 4 2.025-.405c.177-.035.265-.053.347-.085a.994.994 0 0 0 .207-.111c.073-.05.136-.114.264-.242L21 16a1.414 1.414 0 1 0-2-2l-4.157 4.157a2.098 2.098 0 0 0-.242.264.994.994 0 0 0-.11.207c-.033.082-.05.17-.086.347L14 21Z" />
                            </svg>
                        </div>
                        </Link>
                       
                        

                        {/* Login icon */}
                        <div className="hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                className="fill-white hover:fill-secondary transition-hover:fill duration-800"
                            >
                                <path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2.998 8.571A1.06 1.06 0 0 0 19 16.5c0-1.38-3.686-3-7-3s-7 1.62-7 3c0 .024 0 .048.002.071H5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.429h-.002Z" />
                            </svg>
                        </div>

                        {/* saved recipes icon */}
                        <div className="hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                className="fill-white hover:fill-secondary transition-fill duration-800"
                            >
                                <path d="M17.875 19a.875.875 0 0 1-1.421.684L12 16.126l-4.454 3.558A.875.875 0 0 1 6.125 19V4.125h11.75V19Z" />
                            </svg>
                        </div>

                    </div>
                    <div className="block md:hidden"
                        onClick={toggleMobileNav}>
                        <span className="hamburger bg-[#616161]">
                        </span>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header;