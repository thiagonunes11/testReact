import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Componente LoginForm", () => {
  test("renderiza campos de entrada e botão", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("atualiza o estado interno ao digitar nos campos", () => {
    render(<LoginForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    
    fireEvent.change(emailInput, { target: { value: "teste@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput.value).toBe("teste@email.com");
    expect(passwordInput.value).toBe("123456");
  });

  test("mostra mensagens de erro para entradas inválidas ao enviar o formulário", () => {
    render(<LoginForm />);
    
    const loginButton = screen.getByRole("button", { name: /login/i });
    
    fireEvent.click(loginButton);
    
    expect(
      screen.getByText(/ambos os campos são obrigatórios\./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/o campo email é obrigatório/i)).toBeInTheDocument();
    expect(screen.getByText(/o campo senha é obrigatório/i)).toBeInTheDocument();
  });

  test("exibe 'Login realizado com sucesso' para entradas válidas", () => {
    render(<LoginForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole("button", { name: /login/i });
    
    fireEvent.change(emailInput, { target: { value: "teste@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    
    fireEvent.click(loginButton);
    
    expect(
      screen.getByText(/login realizado com sucesso/i)
    ).toBeInTheDocument();
  });
});
