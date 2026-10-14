import logo from "../assets/logo.png";
import "./Cabecalho.css";

function Cabecalho({ titulo }) {
  return (
    <div className="cabecalho">
      <img className="cabecalho__logo" src={logo} alt="" />
      <h1 className="cabecalho__titulo">{titulo}</h1>
    </div>
  );
}

export default Cabecalho;