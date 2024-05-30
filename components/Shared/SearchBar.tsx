import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import "./SearchBar.css"
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Pass the search term to the parent component or perform the search locally
        onSearch(searchTerm);
    };

    useEffect(()=> {
        onSearch(searchTerm);
    }, [searchTerm])

    return (
        <form onSubmit={handleSubmit} className="search-component relative w-[100%] max-w-[380px]">
            <input
                type="text"
                placeholder="¿Qué te gustaría comer hoy?"
                value={searchTerm}
                onChange={handleChange}
                className="w-[100%] px-[.6rem] pt-[10px] pb-[6px] bg-beige bg-opacity-70 outline-none 
                border-b-[transparent] border-b-[2px] focus:border-b-primary focus:border-b-[2px]
                duration-300"
            />
            <button type="submit" className="absolute right-[8px] text-[22px] top-1/2 transform -translate-y-1/2 opacity-60">
            <IoIosSearch />
            </button>
        </form>
    );
}

export default SearchBar