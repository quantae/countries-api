import React, { useContext } from "react";
import styles from "./navbar.module.css";
import moonLight from "../../assets/moon-light.png";
import moonDark from "../../assets/moon-dark.png";
import { ThemeContext } from "../../context/themecontext";
import { Link } from "react-router-dom";

export const ThemeToggle = ({ onClick }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={styles.theme_toggle_container} onClick={onClick}>
      <img src={isDark ? moonDark : moonLight} alt="moon" />
      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
    </div>
  );
};

const Navbar = ({ onClick }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`  ${
          isDark ? styles.dark_navbar_container : styles.navbar_container
        }`}
      >
        <div className="container flex-space-between align-center">
          <h4 style={{ fontWeight: "bold" }}><Link to="/" className="Link">Where in the world?</Link></h4>
          <ThemeToggle onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
