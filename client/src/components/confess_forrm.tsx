import { useState, useRef } from "react";
import SubjectControls from "./subject_controls";
import ContactControls from "./contact_controls";
import FormAction from "./form_action";

const ConfessForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null!);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = new FormData(formRef.current);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
  };

  const handleFormChange = () => {
    const isValid = formRef.current?.checkValidity();
    setIsFormValid(isValid);
    console.log("handleFormChange");
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 m-auto bg-grey-100 p-4 border border-gray-400 border-r-2"
        ref={formRef}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
      >
        <SubjectControls />
        <ContactControls />
        <FormAction isFormValid={isFormValid} label="Confess" />
      </form>
    </>
  );
};

export default ConfessForm;
