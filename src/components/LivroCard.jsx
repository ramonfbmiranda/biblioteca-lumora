import { categorias } from "../data/livros";
import "./LivroCard.css";

function LivroCard({ livro }) {

  // Tom de azul por livro
  
  const matiz = 200 + ((livro.id * 38) % 40);

  const genero = categorias.find((categoria) => categoria.id === livro.genero);

  return (
    <article className="livro-card">
      <div className="livro-card__capa" style={{ "--capa-h": matiz }}>
        <span className="livro-card__inicial" aria-hidden="true">
          {livro.titulo.charAt(0)}
        </span>
        {livro.novo && <span className="livro-card__selo">Novo</span>}
      </div>

      <div className="livro-card__corpo">
        <h3 className="livro-card__titulo">{livro.titulo}</h3>
        <p className="livro-card__autor">{livro.autor}</p>

        <div className="livro-card__rodape">
          {genero && (
            <span className="livro-card__genero">
              <span aria-hidden="true">{genero.emoji}</span> {genero.nome}
            </span>
          )}
          <span
            className="livro-card__nota"
            role="img"
            aria-label={`Nota ${livro.nota.toFixed(1)} de 5`}
          >
            ★ {livro.nota.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}

export default LivroCard;