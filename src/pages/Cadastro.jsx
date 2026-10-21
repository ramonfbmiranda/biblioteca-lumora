import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Cabecalho from "../components/Cabecalho";
import ForcaSenha from "../components/ForcaSenha";
import SeletorGeneros from "../components/SeletorGeneros";
import "./Cadastro.css";

function Cadastro() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  // Constantes de componentização

  const [erros, setErros] = useState({});
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [generos, setGeneros] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });

// Recurso para quando a pessoa volta a digitar, some o erro daquele campo

    if (erros[name]) setErros({ ...erros, [name]: "" });
  }

  function validar() {
    const novosErros = {};

    if (dados.nome.trim().length < 2) {
      novosErros.nome = "Digite seu nome.";
    }
    if (!/^\S+@\S+\.\S+$/.test(dados.email)) {
      novosErros.email = "Digite um e-mail válido.";
    }
    if (dados.senha.length < 8) {
      novosErros.senha = "A senha precisa ter pelo menos 8 caracteres.";
    }
    if (dados.confirmarSenha !== dados.senha) {
      novosErros.confirmarSenha = "As senhas não coincidem.";
    }

    return novosErros;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novosErros = validar();
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    // Por enquanto só no console; no futuro isso vai para o back-end
    console.log("Cadastro válido:", {
    nome: dados.nome,
    email: dados.email,
    generos,
});
  }

  const tipoSenha = mostrarSenha ? "text" : "password";

  return (
    <main className="cadastro">
      <section className="cadastro__card">
        <Cabecalho titulo="Crie sua conta!" />
        <p className="cadastro__subtitulo">Comece a montar a sua estante!</p>

        <form className="cadastro__form" onSubmit={handleSubmit} noValidate>
          <Input
            label="Nome"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
            placeholder="Como quer ser chamado(a)?"
            autoComplete="name"
            erro={erros.nome}
          />

          <Input
            label="E-mail"
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
            placeholder="voce@exemplo.com"
            autoComplete="email"
            erro={erros.email}
          />

          <div className="cadastro__grupo">
            <Input
              label="Senha"
              type={tipoSenha}
              name="senha"
              value={dados.senha}
              onChange={handleChange}
              placeholder="Mínimo de 8 caracteres"
              autoComplete="new-password"
              erro={erros.senha}
            />
            <ForcaSenha senha={dados.senha} />
          </div>

          <Input
            label="Confirmar senha"
            type={tipoSenha}
            name="confirmarSenha"
            value={dados.confirmarSenha}
            onChange={handleChange}
            placeholder="Repita a senha"
            autoComplete="new-password"
            erro={erros.confirmarSenha}
          />

          <label className="cadastro__mostrar">
            <input
              type="checkbox"
              checked={mostrarSenha}
              onChange={(e) => setMostrarSenha(e.target.checked)}
            />
            Mostrar senhas
          </label>

          <SeletorGeneros valor={generos} onChange={setGeneros} />

          <Button type="submit">Criar conta</Button>
        </form>

        <p className="cadastro__rodape">
          Já tem conta? <Link to="/">Entre aqui!</Link>
        </p>
      </section>
    </main>
  );
}

export default Cadastro;