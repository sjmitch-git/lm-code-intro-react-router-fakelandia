interface InputProps {
  type?: "text" | "number";
  name: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ required = false, type = "text", name }) => (
  <input
    className="form-input required:bg-yellow-200"
    type={type}
    name={name}
    required={required}
  />
);

export default Input;
