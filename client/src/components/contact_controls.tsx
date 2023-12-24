import { MISDEMEANOURS, JUST_TALK } from "../types/misdemeanours.types";
import Label from "./atoms/label";
import Select from "./atoms/select";

const options = [...MISDEMEANOURS, JUST_TALK] as const;

const ContactControls: React.FC = () => {
  return (
    <>
      <Label label="Reason:">
        <Select name="reason" options={options} value="" required={true} />
      </Label>
    </>
  );
};

export default ContactControls;
