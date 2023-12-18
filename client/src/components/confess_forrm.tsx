import SubjectControls from "./subject_controls";
import ContactControls from "./contact_controls";

const ConfessForm: React.FC = () => (
  <>
    <form className="flex flex-col gap-4 m-auto bg-grey-100 p-4 border border-gray-400 border-r-2">
      <SubjectControls />
      <ContactControls />
    </form>
  </>
);

export default ConfessForm;
