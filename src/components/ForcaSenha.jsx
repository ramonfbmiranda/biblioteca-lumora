import "./ForcaSenha.css";

const NIVEIS = ["Muito fraca", "Fraca", "Razoável", "Boa", "Forte"];

function calcularForca(senha) {
  let pontos = 0;
  if (senha.length >= 8) pontos++;
  if (/[a-z]/.test(senha) && /[A-Z]/.test(senha)) pontos++;
  if (/\d/.test(senha)) pontos++;
  if (/[^A-Za-z0-9]/.test(senha)) pontos++;
  return pontos; // de 0 a 4
}

function ForcaSenha({ senha }) {
  if (!senha) return null;

  const nivel = calcularForca(senha);

  return (
    <div className="forca" data-nivel={nivel}>
      <div className="forca__barras" aria-hidden="true">
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className={`forca__barra ${n <= nivel ? "forca__barra--ativa" : ""}`}
          />
        ))}
      </div>
      <p className="forca__texto" aria-live="polite">
        Força da senha: {NIVEIS[nivel]}
      </p>
    </div>
  );
}

export default ForcaSenha;