import React, { ChangeEvent, TextareaHTMLAttributes, useState } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  name: string;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({ value, name, placeholder = "" }) => {
  const [textareaValue, setTextareaValue] = useState<string>(value);
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  return (
    <textarea
      className="textarea flex-grow col-span-2"
      value={textareaValue}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      rows={4}
    />
  );
};

export default Textarea;
