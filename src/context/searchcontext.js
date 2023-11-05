import {createContext, useEffect, useState} from "react";

const SearchContext = createContext(undefined);
const SearchProvider = ({children}) => {
    const [searchText, setSearchText] = useState('')
    const handleSearchChange = (e) => {
        e.preventDefault();
        // Your logic here
        setSearchText(e.target.value)
      };
 useEffect(() => {
    console.log(searchText)
 }, [searchText])
 
    return (
        <SearchContext.Provider value={{searchText, setSearchText, handleSearchChange}}>
            {children}
        </SearchContext.Provider>
    )
}

export {SearchContext, SearchProvider}