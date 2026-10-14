import "./Input.css";

function Input({ label, name, type = "text", erro, ...props }) {
  return (
    <div className="campo">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={erro ? "true" : "false"}
        aria-describedby={erro ? `${name}-erro` : undefined}
        {...props}
      />
      {erro && (
        <span id={`${name}-erro`} className="campo__erro" role="alert">
          {erro}
        </span>
      )}
    </div>
  );
}

export default Input;