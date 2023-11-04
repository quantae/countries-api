import React from "react";
import Dropdown from "../dropdown/Dropdown";
import SearchBar from "../searchbar/SearchBar";
import styles from "./filterdropdown.module.css";

const FilterDropdown = ({ listItems, selectedValue, onClick }) => {
  return (
    <div className={`${styles.filter_dropdown_container} flex-space-between`}>
      <div className={styles.searchbar}>
        <SearchBar />
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
