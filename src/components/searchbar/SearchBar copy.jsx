import React, { useContext } from "react";
import styles from "./searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ThemeContext } from "../../context/themecontext";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";

export const TextInput = ({ disabled, onClick,onChange,values,label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const { isDark } = useContext(ThemeContext);
  const [field, meta] = useField(props);

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
          value={values}
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
const SearchBar = ({ values, onClick, onChange, onSubmit }) => {
  const handleTextChange = (formik) => (e) => {
    const { search, value } = e.target;
    formik.setFieldValue(search, value); // Update the form field value
    // Your logic here
    console.log(value);
  };

  return (
    <div>
      <div>
        {/** <input onChange={onChange} value={value} className='input' type="" name='search' id='search' placeholder="Search for any word..."/>*/}
        <Formik
          initialValues={{
            search: "",
          }}
          validationSchema={Yup.object({
            search: Yup.string(),
            // .min(2, 'Must be more than 2 words')
            //.required('Required'),
          })}
          onSubmit={onSubmit}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "25rem",
            }}
          >
            <Field 
            name="search" 
            type="text" 
            as={TextInput}
            placeholder="Search for a word"
            value={values.name}
           onChange={onChange}
            />
            
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SearchBar;
