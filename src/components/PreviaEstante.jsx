import { GENEROS, LIMITE_GENEROS } from "../data/generos";
import "./PreviaEstante.css";

const ALTURAS = ["6.5rem", "5.5rem", "6rem"];

function PreviaEstante({ generos }) {
    
  // Sempre 3 espaços; os que não têm gênero ficam como "vaga" tracejada

  const espacos = Array.from({ length: LIMITE_GENEROS }, (_, i) => generos[i]);

  return (
    <div className="estante" aria-hidden="true">
      <div className="estante__livros">
        {espacos.map((id, i) => {
          const genero = GENEROS.find((g) => g.id === id);

          if (!genero) {
            return (
              <div
                key={`vazio-${i}`}
                className="lombada lombada--vazia"
                style={{ height: ALTURAS[i] }}
              />
            );
          }

          return (
            <div
              key={genero.id}
              className="lombada"
              style={{ "--cor-lombada": genero.cor, height: ALTURAS[i] }}
            >
              <span className="lombada__nome">{genero.nome}</span>
            </div>
          );
        })}
      </div>
      <div className="estante__tabua" />
    </div>
  );
}

export default PreviaEstante;