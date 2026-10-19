import { useState } from "react";
import Navbar from "../components/Navbar";
import LivroCard from "../components/LivroCard";
import CategoriaChip from "../components/CategoriaChip";
import Button from "../components/Button";
import { livros, categorias } from "../data/livros";
import "./Home.css";

// Dados (Não dependem de estado, sendo calculados uma vez, fora do componente)

const destaques = livros.filter((livro) => livro.destaque);
const [principal, ...outrosDestaques] = destaques;
const novidades = livros.filter((livro) => livro.novo);
const generoPrincipal = categorias.find(
  (categoria) => categoria.id === principal?.genero
);

// "Código" -> "codigo": a busca ignora acentos e maiúsculas

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function Home() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);

  // Dado derivado: recalculado a cada renderização, sem useEffect

  const termo = normalizar(busca.trim());
  const livrosFiltrados = livros.filter((livro) => {
    const bateCategoria = !categoriaAtiva || livro.genero === categoriaAtiva;
    const bateBusca =
      !termo ||
      normalizar(livro.titulo).includes(termo) ||
      normalizar(livro.autor).includes(termo);
    return bateCategoria && bateBusca;
  });

  function alternarCategoria(id) {
    setCategoriaAtiva((atual) => (atual === id ? null : id));
  }

  function limparFiltros() {
    setBusca("");
    setCategoriaAtiva(null);
  }

  return (
    <>
      <Navbar busca={busca} onBuscaChange={setBusca} />

      <main className="home">
        <h1 className="home__titulo">Qual será a sua próxima leitura?</h1>

        {/* DESTAQUES */}
        <section aria-labelledby="titulo-destaques">
          <h2 id="titulo-destaques" className="home__titulo-secao">
            Destaques
          </h2>

          {principal && (
            <article
              className="destaque"
              style={{ "--capa-h": 200 + ((principal.id * 37) % 40) }}
            >
              <div className="destaque__capa" aria-hidden="true">
                <span className="destaque__inicial">
                  {principal.titulo.charAt(0)}
                </span>
              </div>

              <div className="destaque__texto">
                <p className="destaque__rotulo">Destaque da vez</p>
                <h3 className="destaque__titulo">{principal.titulo}</h3>
                <p className="destaque__autor">{principal.autor}</p>
                <p className="destaque__sinopse">{principal.sinopse}</p>
                <p className="destaque__meta">
                  {generoPrincipal && (
                    <>
                      <span aria-hidden="true">{generoPrincipal.emoji}</span>{" "}
                      {generoPrincipal.nome} ·{" "}
                    </>
                  )}
                  {principal.ano} · ★ {principal.nota.toFixed(1)}
                </p>
                {/* TODO: levar para a página de detalhes quando ela existir */}
                <Button>Ver detalhes</Button>
              </div>
            </article>
          )}

          {outrosDestaques.length > 0 && (
            <ul
              className="faixa"
              tabIndex={0}
              aria-label="Mais destaques: deslize ou use as setas do teclado"
            >
              {outrosDestaques.map((livro) => (
                <li key={livro.id} className="faixa__item">
                  <LivroCard livro={livro} />
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* NOVIDADES */}
        <section aria-labelledby="titulo-novidades">
          <h2 id="titulo-novidades" className="home__titulo-secao">
            Novidades
          </h2>
          <ul className="grade">
            {novidades.map((livro) => (
              <li key={livro.id}>
                <LivroCard livro={livro} />
              </li>
            ))}
          </ul>
        </section>

        {/* CATEGORIAS */}
        <section aria-labelledby="titulo-categorias">
          <h2 id="titulo-categorias" className="home__titulo-secao">
            Categorias
          </h2>
          <div className="categorias">
            {categorias.map((categoria) => (
              <CategoriaChip
                key={categoria.id}
                categoria={categoria}
                ativa={categoriaAtiva === categoria.id}
                onClick={alternarCategoria}
              />
            ))}
          </div>
        </section>

        {/* TODOS OS LIVROS */}
        
        <section aria-labelledby="titulo-todos">
          <div className="home__cabecalho-secao">
            <h2 id="titulo-todos" className="home__titulo-secao">
              Todos os livros
            </h2>
            <p className="home__contagem" aria-live="polite">
              {livrosFiltrados.length}{" "}
              {livrosFiltrados.length === 1 ? "livro" : "livros"}
            </p>
          </div>

          {livrosFiltrados.length > 0 ? (
            <ul className="grade">
              {livrosFiltrados.map((livro) => (
                <li key={livro.id}>
                  <LivroCard livro={livro} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="vazio">
              <p className="vazio__emoji" aria-hidden="true">
                🔎
              </p>
              <p className="vazio__titulo">Nenhum livro por aqui... ainda!</p>
              <p>Tente outra palavra ou escolha outra categoria.</p>
              <Button onClick={limparFiltros}>Limpar filtros</Button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;