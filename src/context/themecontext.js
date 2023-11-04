import {createContext, useState} from "react";

const ThemeContext = createContext(undefined);
const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)
    const handleToggleTheme = () => {
        setIsDark(!isDark);
      };

    return (
        <ThemeContext.Provider value={{isDark, setIsDark, handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}