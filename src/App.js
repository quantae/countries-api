import { useContext, useEffect, useState } from "react";
import filterDropdownStyles from "./components/filter-and-dropdown/filterdropdown.module.css";
import "./App.css";
import { ThemeContext } from "./context/themecontext";
//import FilterDropdown from "./components/filter-and-dropdown/FilterDropdown";
import Display from "./components/display/Display";
import NavbarLayout from "./layout/NavbarLayout";
import { filterByRegionDropdownContext } from "./context/dropdownFiltercontext";
import { SearchContext } from "./context/searchcontext";
import SearchBar from "./components/searchbar/SearchBar";
import Dropdown from "./components/dropdown/Dropdown";

/**React Router Routing */

function App() {
  const { isDark, handleToggleTheme } = useContext(ThemeContext);
  const { searchText, handleSearchChange } = useContext(SearchContext);
  const { filterByRegion, handleFilterSelection } = useContext(
    filterByRegionDropdownContext
  );

  useEffect(() => {
    // print theme each time is it changed.
    console.log("Dark? : ", isDark);
  }, [isDark]);

  useEffect(() => {
    // update the boday basedon isDark?
    const htmlBody = document.querySelector("body");
    if (isDark) {
      htmlBody.classList.add("dark_theme");
    } else {
      htmlBody.classList.remove("dark_theme");
    }
  }, [isDark]);

  const handleSubmit = (values) => {
    searchText(values.search);
    console.log(searchText);
    // Your logic here
  };
  // Handles filter by region selection.

  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <NavbarLayout onClick={handleToggleTheme}>
        <div className="container">
       
          <div
            className={`${filterDropdownStyles.filter_dropdown_container} flex-space-between`}
          >
            <div className={filterDropdownStyles.searchbar}>
              <SearchBar
                onChange={handleSearchChange}
                onSubmit={handleSubmit}
              />
            </div>
            <div className={filterDropdownStyles.dropdown}>
              <Dropdown
                selectedValue={filterByRegion}
                onClick={handleFilterSelection}
              />
            </div>
          </div>
          <Display />
        </div>
      </NavbarLayout>
    </div>
  );
}

export default App;
