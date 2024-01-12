import React, { useContext } from "react";
import styles from "./searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ThemeContext } from "../../context/themecontext";


export const TextInput = ({ disabled, onClick,onChange,value,label, placeholder, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex ${
          isDark ? styles.dark_search_container : styles.search_container
        }`}
        tabIndex={0}
      >
        <label htmlFor={props.id || props.name}>{label}</label>
        <button
          type="submit"
          className={styles.search_button}
          onClick={onClick}
          disabled={disabled}
        >
          <SearchIcon fill={isDark ? "#FFFFFF" : "#FFFFFF"} />
        </button>
        <input
          type="input"
          className={styles.input}
          onChange={onChange}
          value={value}
        placeholder={placeholder}
        />
      </div>
      {
        <div className={styles.error}></div>
      }
    </>
  );
};
const SearchBar = ({ value, onClick, onChange, onSubmit }) => {


  return (
    <div>
      <div>
        {/** <input onChange={onChange} value={value} className='input' type="" name='search' id='search' placeholder="Search for any word..."/>*/}
        
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "25rem",
            }}
          >
            <TextInput 
            name="search" 
            type="text" 
            placeholder="Search for a country"
            value={value}
           onChange={onChange}
            />
            
          </div>
      
      </div>
    </div>
  );
};

export default SearchBar;
