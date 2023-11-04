import React, { useContext } from 'react';
import styles from './searchbar.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ThemeContext } from '../../context/themecontext';
import { Formik,Form, useField } from 'formik';
import * as Yup from 'yup';


export const TextInput = ({disabled, onClick, label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
   const {isDark} = useContext(ThemeContext)
  const [field, meta] = useField(props);

  return (
    <>
      <div className={`flex ${ isDark ?  styles.dark_search_container : styles.search_container }`} tabIndex={0}>
      <label htmlFor={props.id || props.name}>{label}</label>
       <button type='submit' className={styles.search_button} onClick={onClick} disabled={disabled}>
         <SearchIcon fill={ isDark ? "white" : "black"}/>
      </button>
      <input type='input' className={styles.input} {...field} {...props} />
     
    </div>
     {meta.touched && meta.error ? (
      <div className={styles.error}>{meta.error}</div>
    ) : null}
    </>
  
  );
}
const SearchBar = ({value, onClick, onChange, onSubmit}) => {
 
  /*const handleChange = (e) => {
    setWord(e.target.value);
    console.log(word)
  }; */
  
  /*const handleSubmit = async (values, { setSubmitting }) => {
    setTimeout(() => {
      fetchWord(values.search).then((fetchedData) => {
      //fetchedData = JSON.stringify(fetchedData,undefined, 4)
      setData(fetchedData);
      console.log("data from api: ", fetchedData);
      setSubmitting(false)
      console.log("word typed: ", values)
    });
    }, 200);
  }; */

  return (
    <div>
       <div>
     {/** <input onChange={onChange} value={value} className='input' type="" name='search' id='search' placeholder="Search for any word..."/>*/} 
      <Formik
        initialValues= {
          {
            search: "",
          }
        }
        validationSchema={Yup.object({
          search: Yup.string()
         // .min(2, 'Must be more than 2 words')
          //.required('Required'),
        })}
        onSubmit={onSubmit}
      >
        <Form style={{display: 'flex', flexDirection: 'column', maxWidth: '25rem'}}>
          <TextInput onSubmit={onSubmit} type='text' name='search' id='search' placeholder='Search for a word...'/>
        </Form>
      </Formik>
     
    </div>
    </div>
  );
}

export default SearchBar;
