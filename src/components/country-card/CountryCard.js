import React, { useContext } from "react";
import styles from "./countrycard.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themecontext";

const CountryCard = ({ onClick, country }) => {
  const { isDark } = useContext(ThemeContext);
  //const countries = country;

  return (
    <>
      <Link
        to={`countries/${country.name}`}
        style={{ outline: "none", textDecoration: "none", color: "inherit" }}
        key={country.name}
      >
        <div
          className={
            isDark
              ? styles.dark_country_card_container
              : styles.country_card_container
          }
        >
          <img
            src={country.flags.svg}
            alt="country flag"
            className={styles.flag_img}
          />
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
    </>
  );
};

export default CountryCard;
