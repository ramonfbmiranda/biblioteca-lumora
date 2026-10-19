import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar({ busca, onBuscaChange }) {
  return (
    <header className="navbar">
      <div className="navbar__conteudo">
        <Link to="/home" className="navbar__marca">
          <img className="navbar__logo" src={logo} alt="" />
          <span className="navbar__nome">Lumora</span>
        </Link>

        <div className="navbar__busca">
          <label htmlFor="busca" className="navbar__busca-rotulo">
            Buscar livros
          </label>
          <input
            id="busca"
            type="search"
            value={busca}
            onChange={(e) => onBuscaChange(e.target.value)}
            placeholder="Buscar por título ou autor"
            autoComplete="off"
          />
        </div>

        <div className="navbar__usuario">
          <span className="navbar__saudacao">Olá, visitante</span>
          {/* TODO (etapa de autenticação): chamar sair() e voltar para "/" */}
          <button type="button" className="navbar__sair">
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;