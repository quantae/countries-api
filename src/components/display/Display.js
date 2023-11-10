import React, { useContext, memo, useMemo } from "react";
import CountryCard from "../country-card/CountryCard";
import styles from "./display.module.css";
import jsonData from "../../data.json";
import { SearchContext } from "../../context/searchcontext";
import { filterByRegionDropdownContext } from "../../context/dropdownFiltercontext";

const Display = memo(() => {
  // import context variables
  const { searchText } = useContext(SearchContext);
  const {filterByRegion} = useContext(filterByRegionDropdownContext);

  // Filter the countries based on region
  const countriesByRegion = useMemo(() => {
    return filterByRegion === 'All countries' ? jsonData : 
    jsonData.filter((country) => country.region.toLowerCase().includes(filterByRegion.toLowerCase()));
  }, [filterByRegion]);

  // Filter the displayed countries based on the Search Text
  const filteredCountries = useMemo(() => {
    return searchText
    ? countriesByRegion.filter((country) => country.name.toLowerCase().includes(searchText.toLowerCase()))
    : countriesByRegion;
  }, [searchText, countriesByRegion]);

  return (
    <div className={styles.display_container}>
      {filteredCountries.length === 0 ? (
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <h4>No countries found</h4>
        <p>If you intend to search all countries, choose "All countries" from the dropdown menu.</p>
        </div>
        
      ) : (
        filteredCountries.map((country) => (
          <CountryCard country={country} key={country.name} />
        ))
      )}
    </div>
  );
});

export default Display;