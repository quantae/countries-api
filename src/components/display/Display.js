import React, { useContext } from "react";
import CountryCard from "../country-card/CountryCard";
import styles from "./display.module.css";
import jsonData from "../../data.json";
import { SearchContext } from "../../context/searchcontext";

const Display = () => {
  const { searchText } = useContext(SearchContext);
  let filteredCountries = [];

 
  // Checking for empty string before displaying countries
  if (searchText === "") {
    return (
      <div className={styles.display_container}>
        <CountryCard key={jsonData.name} jsonData={jsonData} />
      </div>
    );
  } else {
    // Filter the countries based on the search text
    filteredCountries = jsonData.filter((country) => {
      return country.name.toLowerCase().includes(searchText.toLowerCase());
    });
console.log(filteredCountries)
    if (filteredCountries.length === 0) {
      return <h4>No country found</h4>;
    }


 return (
    <div className={styles.display_container}>
      {filteredCountries.map((index) => (
        <CountryCard key={index} jsonData={filteredCountries}/>
      ))}
      
    </div>
  );
  };
  }
  
  export default Display;

/*
const SearchCheckBeforeDisplay = () => {
  const { searchText } = useContext(SearchContext);

  let filteredCountries = []; 
  // Checking for empty string before displaying countries
  if (searchText === "") {
    return (
      <div>
        <h1>No country found</h1>
      </div>
    );
  }
  try{
    filteredCountries = jsonData.filter((country) => {
      return country.name.toLowerCase().includes(searchText.toLowerCase());

    })
  }
  catch{
    console.log("error filtering")


  }
    
  console.log(filteredCountries)
  if (filteredCountries.length === 0) {
    return (
      <div>
        <h1>No country found</h1>
      </div>
    );
  } else {
    return filteredCountries.map((countryItem, index) => (
     
      <div key={countryItem.name}>
        hello
      </div>
    ));
  }
};

export default SearchCheckBeforeDisplay;*/
