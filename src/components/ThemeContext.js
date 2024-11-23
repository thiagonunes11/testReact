import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Atualiza as variáveis de CSS globais quando o tema muda
  useEffect(() => {
    const root = document.documentElement;
    const lightTheme = {
      "--background-color": "#ffffff",
      "--text-color": "#000000",
    };
    const darkTheme = {
      "--background-color": "#333333",
      "--text-color": "#ffffff",
    };

    const themeVariables = theme === "light" ? lightTheme : darkTheme;
    for (const [key, value] of Object.entries(themeVariables)) {
      root.style.setProperty(key, value);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
