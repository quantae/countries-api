import React, { useContext, useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import SearchBar from "../searchbar/SearchBar";
import styles from "./filterdropdown.module.css";
import data from '../../data.json';
import { SearchContext } from "../../context/searchcontext";

const FilterDropdown = ({ listItems, selectedValue, onClick }) => {
   const {searchText, handleSearchChange} = useContext(SearchContext);
 


  

  const handleSubmit =(values) => {
    searchText(values.search)
    console.log(searchText)
    // Your logic here

  }
  return (
    <div className={`${styles.filter_dropdown_container} flex-space-between`}>
      <div className={styles.searchbar}>
        <SearchBar onChange={handleSearchChange} onSubmit={handleSubmit}/>
      </div>
      <div className={styles.dropdown}>
        <Dropdown
          listItems={listItems}
          selectedValue={selectedValue}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default FilterDropdown;
