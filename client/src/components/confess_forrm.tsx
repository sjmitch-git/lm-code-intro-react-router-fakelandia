import { useState, useRef } from "react";
import SubjectControls from "./subject_controls";
import ContactControls from "./contact_controls";
import DetailsControls from "./details_controls";
import FormAction from "./form_action";
import Loading from "./loading";
import Alert from "./alert";
import usePost from "../hooks/use_post";

interface FormDataProps {
  subject: string;
  reason: string;
  details: string;
}

const ConfessForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null!);
  const [isFormValid, setIsFormValid] = useState(false);

  const { response, error, isLoading, postData } = usePost<{ success: boolean; message: string }>({
    url: "http://localhost:8080/api/confess",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataObject = Object.fromEntries(
      new FormData(formRef.current)
    ) as unknown as FormDataProps;

    try {
      await postData(formDataObject);
      formRef.current?.reset();
      handleFormChange();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFormChange = () => {
    const isValid = formRef.current?.checkValidity() || false;
    setIsFormValid(isValid);
  };

  return (
    <>
      {response && <Alert title="Success" message={response.message} status="success" />}
      {error && <Alert title="Error" message={error.message} status="error" />}
      {isLoading ? (
        <Loading message="Posting Data" />
      ) : (
        <form
          className="flex flex-col gap-4 m-auto bg-grey-100 p-4 border border-gray-200"
          ref={formRef}
          onChange={handleFormChange}
          onSubmit={handleSubmit}
        >
          <SubjectControls />
          <ContactControls />
          <DetailsControls />
          <FormAction isFormValid={isFormValid} label="Confess" />
        </form>
      )}
    </>
  );
};

export default ConfessForm;
