import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import DisplayTheme from "./DisplayTheme";

test("exibe o tema inicial corretamente", () => {
  render(
    <ThemeProvider>
      <DisplayTheme />
    </ThemeProvider>
  );

  // Verifica o texto do parágrafo
  const paragraph = screen.getByText(/o tema atual é:/i);
  expect(paragraph).toBeInTheDocument();

  // Verifica o elemento <strong> com "light"
  const strongElement = screen.getByText(/light/i);
  expect(strongElement).toBeInTheDocument();
});

test("alterna o tema ao clicar no botão", () => {
  render(
    <ThemeProvider>
      <DisplayTheme />
      <ThemeSwitcher />
    </ThemeProvider>
  );

  // Verifica o tema inicial
  expect(screen.getByText(/light/i)).toBeInTheDocument();

  // Alterna para "dark"
  fireEvent.click(screen.getByText(/alternar tema/i));
  expect(screen.getByText(/dark/i)).toBeInTheDocument();

  // Alterna de volta para "light"
  fireEvent.click(screen.getByText(/alternar tema/i));
  expect(screen.getByText(/light/i)).toBeInTheDocument();
});
