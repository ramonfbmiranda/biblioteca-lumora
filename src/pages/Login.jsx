import Input from "../components/Input";
import Button from "../components/Button";
import "./Login.css";

function Login() {
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
            placeholder="voce@exemplo.com"
            autoComplete="email"
          />

          <Input
            label="Senha"
            type="password"
            name="senha"
            placeholder="Sua senha"
            autoComplete="current-password"
          />

          <Button type="submit">Entrar</Button>
        </form>

        <p className="login__rodape">
          Ainda não tem conta? <a href="/cadastro">Crie agora!</a>
        </p>
      </section>
    </main>
  );
}

export default Login;