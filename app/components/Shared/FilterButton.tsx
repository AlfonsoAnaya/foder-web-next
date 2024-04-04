interface FilterButtonProps {
    title: string;
    handleClick: any;
}

function FilterButton( {title, handleClick}:FilterButtonProps ) {
    return (
        <button 
            className="text-sans lowercase text-[1.25rem] bg-tertiary text-dark font-[600] rounded-full py-[.5rem] px-[1.7rem]"
            onClick={() => handleClick(title)}>
            {title}
        </button>
    );
}

export default FilterButton;