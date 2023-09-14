import {useEffect, useState} from "react";

//this function will be used to delay in the revoking of our API calls; APIs will be not called on every
//single key stroke.
// uses in search feature.

function useDebounce<T>(value:T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(()=>{
        const timer = setTimeout(() =>{
            setDebouncedValue(value);
        }, delay || 500);

        //on unmount clearing the timer
        return () =>{
            clearTimeout(timer);
        }
    },[value, delay]);

    return debouncedValue;
};

export default useDebounce;