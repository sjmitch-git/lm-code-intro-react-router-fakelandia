import React from "react";

import { Button } from "./atoms";

interface FormActionProps {
  isFormValid: boolean;
  label?: string;
}

const FormAction: React.FC<FormActionProps> = ({ isFormValid, label = "Submit" }) => {
  return (
    <div className="flex justify-center flex-col gap-2">
      {!isFormValid && <p className="text-center">Please fill in all required fields correctly.</p>}

      <Button type="submit" disabled={!isFormValid}>
        {label}
      </Button>
    </div>
  );
};

export default FormAction;
