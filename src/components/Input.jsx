import "./Input.css";

function Input({ label, name, type = "text", ...props }) {
  return (
    <div className="campo">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} {...props} />
    </div>
  );
}

export default Input;