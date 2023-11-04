import React, { useContext } from "react";
import flagSample from "../../assets/flag-sample.png";
import styles from "./countrycard.module.css";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext";

const CountryCard = ({ onClick, data}) => {
  const { isDark } = useContext(ThemeContext);
const countries = data;

  return (
    <>
      {
        countries.map((country) => (
            <Link to={`countries/${country.name}`} style={{outline:"none", textDecoration:"none", color:'inherit'}}>
            <div
              className={
                isDark
                  ? styles.dark_country_card_container
                  : styles.country_card_container
              }
              key={country.name}
            >
              <img src={country.flags.svg} alt="country flag" className={styles.flag_img}/>
              <div className={styles.country_stats}>
                <h4>{country.name}</h4>
                <p>
                  Population: <span>{country.population}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
            </div>
          </Link>
        ))
    }
  
    </>
  
  );
};

export default CountryCard;
