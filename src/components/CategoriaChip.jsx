import "./CategoriaChip.css";

function CategoriaChip({ categoria, ativa, onClick }) {
  return (
    <button
      type="button"
      className={`categoria-chip ${ativa ? "categoria-chip--ativa" : ""}`}
      aria-pressed={ativa}
      onClick={() => onClick(categoria.id)}
    >
      <span aria-hidden="true">{categoria.emoji}</span>
      {categoria.nome}
    </button>
  );
}

export default CategoriaChip;