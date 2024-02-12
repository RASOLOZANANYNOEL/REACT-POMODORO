import { createContext } from "react";
import { useState } from "react";

// On déclare la structure de notre context.A quoi il doit ressembler
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { }
});

export { ThemeContext };

const ThemeContextProvider = ({ children }) => {
    // on met à jour le state
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const value = {
        theme,
        toggleTheme,

    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;