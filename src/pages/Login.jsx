import "./Login.css";

function Login() {
  return (
    <main className="login">
      <section className="login__card">
        <h1 className="login__titulo">Biblioteca Lumora</h1>
        <p className="login__subtitulo">Acesse a sua estante!</p>

        <form className="login__form">
          <div className="login__campo">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="voce@exemplo.com"
              autoComplete="email"
            />
          </div>

          <div className="login__campo">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Sua senha"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login__botao">
            Entrar
          </button>
        </form>

        <p className="login__rodape">
          Ainda não tem conta? <a href="/cadastro">Crie sua conta!</a>
        </p>
      </section>
    </main>
  );
}

export default Login;