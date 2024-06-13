import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
    const ref = useRef<HTMLLIElement>(null);
  
    useEffect(() => {
      const handleClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
          }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);
  
    return ref;
  };

  export default useClickOutside