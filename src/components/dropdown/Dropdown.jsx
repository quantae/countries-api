import React, { useContext, useRef, useState } from "react";
import { ReactComponent as Caret } from "../../assets/caret-down.svg";
//import { ReactComponent as Caret } from "../../assets/caret-down.svg";
import ClickOutSide from "../clickOut/ClickOutSide";
import styles from "./dropdown.module.css";
import { ThemeContext } from '../../context/themecontext'

const Dropdown = ({ listItems, selectedValue, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const exceptionRef = useRef();
  const {isDark} = useContext(ThemeContext)

  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleValueClickEvent = (value) => {
    setIsOpen(false);
    onClick(value);
  };

  
  return (
    <div className={`${isDark ? 'dark_theme' : 'light_theme'} ${styles.dropdown_container} `}>
      <div
        tabIndex={-1}
        className={`${styles.dropdown_header} ${isDark ? styles.dark_dropdown_header : "" }`}
        onClick={toggleDropDown}
        ref={exceptionRef}
      >
        <div className={styles.selected_value}><h5>{selectedValue}</h5></div>
        <div>
        {(() => {
    switch (true) {
      case isOpen && isDark:
        return <Caret fill="white" className={styles.caret_rotate_down} />;
      case isOpen && !isDark:
        return <Caret fill="#000000" className={styles.caret_rotate_down} />;
      case !isOpen && isDark:
        return <Caret fill="white" className={styles.caret_rotate_up}/>;
      case !isOpen && !isDark:
        return <Caret fill="black" className={styles.caret_rotate_up}/>;
      default:
        return null; // You can handle other cases as needed
    }
  })()}
         </div>
      </div>
      <div className={`${styles.dropdown_list_container} ${isDark ? styles.dark_dropdown_list_container : ''} ${isOpen ? styles.active_dropdown_list_container : '' }`}>
        {isOpen && (
          <ClickOutSide
            className
            onClick={() => setIsOpen(false)}
            exceptionRef={exceptionRef}
          >
            <ul
              className={styles.dropdown_list}
              tabIndex={-1}
            >
              {listItems.map((item, index) => (
                <li
                  className="dropdown-list-item"
                  key={`dropdown-list-${index}`}
                  onClick={() => handleValueClickEvent(item)}
                  value={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </ClickOutSide>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
