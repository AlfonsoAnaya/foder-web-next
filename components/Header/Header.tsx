'use client'
//import SearchBar from "./Shared/SearchBar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import MobileNavMenu from "./MobileNavMenu";
import styles from "./Header.module.scss";
import "./Header.css";
import Link from "next/link";
import useCurrentNavSectionStore from "@/app/ZustandStore/CurrentNavSectionStore";

function Header() {
    const pathname = usePathname();
    let hideBorder = false;
    let changeColor = false;

    if (pathname === "/plan-actual-vegetariano"
        || pathname === "/plan-actual"
        || pathname === "/plan-actual/lista-de-compras"
        || pathname === "/plan-actual-vegtariano/lista-de-compras"
        || pathname === "/mi-plan"
    ) hideBorder = true;

    if (pathname === "/plan-actual/lista-de-compras"
        || pathname === "/plan-actual-vegtariano/lista-de-compras"
    ) changeColor = true;

    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileNav = () => {
    setIsOpen((prev) => !prev);
    };

    const closeMobileNav = () => {
        setIsOpen(false)
    };

    const updateCurrentNavSection = useCurrentNavSectionStore((state) => state.updateCurrentNavSection);

    return (

        <header className={`${styles.header} header-nav ${isOpen ? "nav-open" : ""} ${hideBorder ? "border-none" : ""} first-letter:${changeColor ? "background-list" : ""}`}>
            <div className="flex flex-col justify-center align-center w-[90%] max-w-[1200px]">
                <div className="flex flex-1 flex-row md:gap-16 items-center justify-between relative">

                    {/* Website Name */}

                    <h1 id="header-title"
                        className="large-text text-left  
                            font-siteTitle
                            text-dark uppercase
                            text-[2.5em] md:text-[3.15em] leading-[1em] py-[12px]"
                        onClick={() => {
                            closeMobileNav;
                            updateCurrentNavSection("");
                        }}>
                        <Link
                            href="/"
                            onClick={closeMobileNav}
                        >
                            <Image
                                src="/images/logos/logo-dark.svg"
                                width="200"
                                height="50"
                                alt="logo pipián"
                            />
                        </Link>

                    </h1>

                    <MobileNavMenu
                        toggleMobileNav={toggleMobileNav}
                    />

                    {/* <HeaderUtilities /> */}

                    <div className="block md:hidden"
                        onClick={toggleMobileNav}>
                        <span className="hamburger bg-dark">
                        </span>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header;