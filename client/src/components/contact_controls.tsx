import { MISDEMEANOURS } from "../types/misdemeanours.types";
import Label from "./atoms/label";
import Select from "./atoms/select";

const ContactControls: React.FC = () => {
  return (
    <>
      <Label label="Reason for contact:">
        <Select name="reason" options={MISDEMEANOURS} value="" required={true} />
      </Label>
    </>
  );
};

export default ContactControls;
