'use client'
import { useState } from "react";
import './FilterButton.css'
interface FilterButtonProps {
    title: string;
    filterStr: string;
    handleClick: any;
}

function FilterButton( {title, filterStr, handleClick}:FilterButtonProps ) {
    const [isActive, setIsActive] = useState(false);

    return (
        <button 
            className={`${isActive? "bg-tertiary": "bg-white"}
            filter-button text-sans lowercase text-[.9rem ]md:text-[1.25rem] border-[2px] border-tertiary text-darker hover:text-dark font-[600] rounded-full py-[.2rem] px-[.9rem] md:py-[.5rem] md:px-[1.7rem]`}
            onClick={() => {
                handleClick(filterStr);
                setIsActive(prevState => !prevState)
            }}>
            {title}
        </button>
    );
}

export default FilterButton;