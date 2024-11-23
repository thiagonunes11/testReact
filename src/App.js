import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import DisplayTheme from "./components/DisplayTheme";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <ThemeProvider>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
          minHeight: "100vh",
        }}
      >
        <h1>Aplicação com Context API</h1>
        <DisplayTheme />
        <ThemeSwitcher />
        <hr />
        <LoginForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
