import { SelectHTMLAttributes, ChangeEvent, useState } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: readonly string[];
  value?: string | number;
  onchange?: (selectedValue: string) => void;
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({ name, options, value = "", required = false }) => {
  const [selectedValue, setSelectedValue] = useState<string | number>(value);
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select
      className="form-select required:bg-yellow-200"
      name={name}
      value={selectedValue}
      onChange={handleSelectChange}
      required={required}
    >
      <option value="" disabled hidden>
        Select an option
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
