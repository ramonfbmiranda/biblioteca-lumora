import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [dados, setDados] = useState({
  email: "",
  senha: "",
});

function handleChange(e) {
  const { name, value } = e.target;
  setDados({ ...dados, [name]: value });
}
  return (
    <main className="login">
      <section className="login__card">
        <h1 className="login__titulo">Biblioteca Lumora</h1>
        <p className="login__subtitulo">Acesse sua estante!</p>

        <form className="login__form">
          <Input
            label="E-mail"
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
            placeholder="voce@exemplo.com"
            autoComplete="email"
          />

          <Input
            label="Senha"
            type="password"
            name="senha"
            value={dados.senha}
            onChange={handleChange}
            placeholder="Sua senha"
            autoComplete="current-password"
          />

          <Button type="submit">Entrar</Button>
        </form>


        <p className="login__rodape">
          Ainda não tem conta? <Link to="/cadastro">Crie agora!</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
