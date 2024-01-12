import React, { useContext, useEffect, useState } from "react";
import NavbarLayout from "../../layout/NavbarLayout";
import { ReactComponent as BackIcon } from "../../assets/back-icon.svg";
import styles from "./countrydetailpage.module.css";
import { ThemeContext } from "../../context/themecontext";
import {useNavigate, useParams } from "react-router-dom";
import data from "../../data.json";


// Back reusable button
export const Button = ({ onClick, label, icon, className, data }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <button
      className={`${
        isDark ? styles.dark_back_button : styles.back_button
      } flex-gap align-center bd-radius ${className}`}
      onClick={onClick}
    >
      {icon && <BackIcon fill={isDark ? "#fafafa" : "#2b3945"} />}
      {label}
    </button>
  );
};

// Border country list button
const BorderCountryListButton = ({ name = "border country", onClick }) => {
  return (
    <>
      <Button label={name} onClick={onClick}/>
    </>
  );
};

const CountryDetailPage = ({ countryData }) => {
  const { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);
  const { handleToggleTheme } = useContext(ThemeContext);
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  countryData = data.find((country) => country.name === countryName);
  // console.log("country data: ", countryData);
  useEffect(() => {
    if (countryData) {
      setCountryDetails(countryData);
    }
    // console.log("country Data: ", countryData);
  }, [countryData]);

  const findCountryName = (abbreviation) => {
    const country = data.find((country) => country.alpha3Code === abbreviation);
    return country ? country.name : "";
  };

  const handleBorderCountryClick = (abbreviation) => {
    const countryName = findCountryName(abbreviation);
    navigate(`/countries/${countryName}`);
  };
  /*
  useEffect(() => {
    fetch(data) // Adjust the path as needed
      .then((response) => {
        const countryData = response.data[0];

        console.log("Fetched data: ", countryData); // Log the fetched data
        setCountryDetails(countryData[countryName]);
      })
    
      
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }, [countryName]); */

  useEffect(() => {
    // update the boday basedon isDark?
    const htmlBody = document.querySelector("body");
    if (isDark) {
      htmlBody.classList.add("dark_theme");
    } else {
      htmlBody.classList.remove("dark_theme");
    }
  }, [isDark]);

  if (countryDetails === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <NavbarLayout onClick={handleToggleTheme}>
        <div className="container">
          <Button
            label="Back"
            icon={true}
            onClick={() => navigate(-1)}
            className={styles.bg_transparent}
          />

          <div className={` ${styles.country_detail_page_container}`}>
            <img src={countryDetails.flag} alt="flag" className="bd-radius" />

            <div className={styles.country_stats_body}>
              <h4>{countryDetails.name}</h4>
              <div className={styles.country_starts_container}>
                <div className={styles.country_stats}>
                  <p>
                    Native Name: <span>{countryDetails.nativeName}</span>
                  </p>
                  <p>
                    Population: <span>{countryDetails.population}</span>
                  </p>
                  <p>
                    Region: <span>{countryDetails.region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{countryDetails.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{countryDetails.capital}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Currencies:
                    {Array.isArray(countryDetails.currencies) &&
                      countryDetails.currencies.map((currency, index) => (
                        <span key={index}>
                          {" "}
                          {currency.name}, {currency.code} {currency.symbol}{" "}
                        </span>
                      ))}
                  </p>
                  <p>
                    Languages:
                    {Array.isArray(countryDetails.languages) &&
                      countryDetails.languages.map((language, index) => (
                        <span key={index}>
                          {" "}
                          {language.name} {`(${language.nativeName})`}{" "}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
              <div className={styles.border_countries}>
                <p>Border countries:</p>
                <div className="flex-gap">
                  {Array.isArray(countryDetails.borders) &&
                    countryDetails.borders.map((border, index) => (
                      <BorderCountryListButton
                        key={index}
                        name={border}
                        onClick={() => handleBorderCountryClick(border)}
                      />
                    ))}
                </div>

                <span className={`flex-gap`}></span>
              </div>
            </div>
          </div>
        </div>
      </NavbarLayout>
    </div>
  );
};

export default CountryDetailPage;
