function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Biblioteca Lumora</h1>
      <p>Sinta-se dentro do mundo dos livros.</p>
      <button
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "var(--raio-pequeno)",
          background: "var(--cor-primaria)",
          color: "white",
        }}
      >
        Entrar
      </button>
    </main>
  );
}

export default App;