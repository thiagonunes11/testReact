import React from "react";
import { useTheme } from "./ThemeContext";

const DisplayTheme = () => {
  const { theme } = useTheme();

  return <p>O tema atual é: <strong>{theme}</strong></p>;
};

export default DisplayTheme;
