interface LabelProps {
  children: React.ReactNode;
  label: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ label, required = false, children }) => (
  <label className={`flex flex-col lg:grid grid-cols-3 ${required ? "required" : ""}`}>
    <span className="font-bold col-span-1 pt-2">{label}</span>
    {children}
  </label>
);

export default Label;
