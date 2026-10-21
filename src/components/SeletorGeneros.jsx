import Chip from "./Chip";
import PreviaEstante from "./PreviaEstante";
import { GENEROS, LIMITE_GENEROS } from "../data/generos";
import "./SeletorGeneros.css";

// valor: array de ids escolhidos (ex.: ["fantasia", "terror"]); a ORDEM importa
// onChange: função que o pai passa para receber o novo array

function SeletorGeneros({ valor, onChange }) {
  const limiteAtingido = valor.length >= LIMITE_GENEROS;

  function alternar(id) {
    if (valor.includes(id)) {
      onChange(valor.filter((g) => g !== id)); // remove, sem alterar o array original
    } else if (!limiteAtingido) {
      onChange([...valor, id]); // adiciona no final, sem usar push
    }
  }

  function surpreender() {
    const disponiveis = GENEROS.filter((g) => !valor.includes(g.id));
    if (limiteAtingido || disponiveis.length === 0) return;

    const sorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
    onChange([...valor, sorteado.id]);
  }

  return (
    <fieldset className="generos">
      <legend className="generos__titulo">Gêneros favoritos</legend>
      <p className="generos__ajuda">
        Escolha até {LIMITE_GENEROS}. O primeiro será o seu favorito nº 1.
      </p>

      <div className="generos__lista">
        {GENEROS.map((g) => {
          const posicao = valor.indexOf(g.id); // -1 se não estiver escolhido
          const selecionado = posicao !== -1;

          return (
            <Chip
              key={g.id}
              label={g.nome}
              cor={g.cor}
              selecionado={selecionado}
              destaque={posicao === 0}
              desabilitado={limiteAtingido && !selecionado}
              onClick={() => alternar(g.id)}
            />
          );
        })}
      </div>

      <div className="generos__rodape">
        <span aria-live="polite">
          {valor.length} de {LIMITE_GENEROS}
        </span>
        <button
          type="button"
          className="generos__surpresa"
          onClick={surpreender}
          disabled={limiteAtingido}
        >
          Me surpreenda
        </button>
      </div>

      <PreviaEstante generos={valor} />
    </fieldset>
  );
}

export default SeletorGeneros;