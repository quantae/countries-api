import {createContext, useEffect, useState} from "react";

const filterByRegionDropdownContext = createContext(undefined);

// I context Provider to store the searched word. 
const FilterByRegionDropdownProvider = ({children}) => {
    const [filterByRegion, setFilterByRegion] = useState('All countries')

    // When search word changes. 
   const handleFilterSelection = (value) => {
        setFilterByRegion(value);
      };
      
 useEffect(() => {
    console.log(filterByRegion)
 }, [filterByRegion])
 
    return (
        <filterByRegionDropdownContext.Provider value={{filterByRegion, setFilterByRegion, handleFilterSelection}}>
            {children}
        </filterByRegionDropdownContext.Provider>
    )
}

export {filterByRegionDropdownContext, FilterByRegionDropdownProvider}