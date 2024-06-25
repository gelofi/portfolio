import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
var isDark = true;

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    if (theme !== 'dark'){ // align the saved theme to the last saved theme
        isDark = false;
        document.documentElement.setAttribute("data-color-scheme", 'light');
    }

    const toggleTheme = () => {
        //change the overall theme
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

        //SCROLLBAR THEME
        // remove scrollbars
        document.documentElement.style.overflow = "hidden";
        // trigger reflow so that overflow style is applied
        document.body.clientWidth;
        // change scheme
        document.documentElement.setAttribute(
            "data-color-scheme",
            isDark ? "light" : "dark"
        );
        // remove overflow style, which will bring back the scrollbar with the correct scheme 
        document.documentElement.style.overflow = "";
        isDark = !isDark;
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};