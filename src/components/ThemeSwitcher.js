import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: "1rem 0",
        padding: "0.5rem 1rem",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Alternar Tema
    </button>
  );
};

export default ThemeSwitcher;
