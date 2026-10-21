import "./Chip.css";

function Chip({ label, cor, selecionado, desabilitado, destaque, onClick }) {
  const classes = ["chip", selecionado && "chip--ativo"]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      style={{ "--cor-chip": cor }}
      onClick={onClick}
      disabled={desabilitado}
      aria-pressed={selecionado}
    >
      {destaque && <span className="chip__selo">1º</span>}
      {label}
    </button>
  );
}

export default Chip;