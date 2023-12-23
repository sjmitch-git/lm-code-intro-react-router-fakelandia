import { Label, Textarea } from "./atoms";

const DetailsControls: React.FC = () => (
  <>
    <Label label="Details:">
      <Textarea name="details" placeholder="Add more detail here" value="" className="col-span-3" />
    </Label>
  </>
);

export default DetailsControls;
