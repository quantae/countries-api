import { useContext, useEffect, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/themecontext";
import FilterDropdown from "./components/filter-and-dropdown/FilterDropdown";
import Display from "./components/display/Display";
import NavbarLayout from "./layout/NavbarLayout";



/**React Router Routing */


const FILTER_LISTS = [
  "All countries",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
];
function App() {
  const { isDark, handleToggleTheme } = useContext(ThemeContext);
  const [filter, setFilter] = useState("Filter by region");

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

  const handleFilterSelection = (value) => {
    setFilter(value);
  };

  return (
 
        <div className={`${isDark ? "dark" : "light"}`}>
      <NavbarLayout onClick={handleToggleTheme}>
        <div className="container">
          <FilterDropdown
            listItems={FILTER_LISTS}
            selectedValue={filter}
            onClick={handleFilterSelection}
          />
         {/*} <SearchCheckBeforeDisplay />*/}
          <Display/>
        </div>
      </NavbarLayout>
      
    </div>
 
  
  );
}

export default App;
