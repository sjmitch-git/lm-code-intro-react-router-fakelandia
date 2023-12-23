import Input from "./atoms/input";
import Label from "./atoms/label";

const SubjectControls: React.FC = () => (
  <>
    <Label label="Subject:" required={true}>
      <Input type="text" name="subject" required />
    </Label>
  </>
);

export default SubjectControls;
