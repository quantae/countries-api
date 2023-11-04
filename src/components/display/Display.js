import React from 'react';
import CountryCard from '../country-card/CountryCard';
import styles from './display.module.css'
import data from '../../data.json'

const Display = () => {
    
  return (
    <div className={`${styles.display_container}`}>
      <CountryCard data={data}/>
    
    </div>
  );
}

export default Display;
