import Plus from "../icons/Plus";
import Button from "./Button";

interface AddNewBoxType {
  fn: () => void;
}

const AddNewButtonBox = ({ fn }: AddNewBoxType) => {
  return (
    <div
      className={`w-60 h-40 flex items-center justify-center bg-white rounded-2xl shadow-md p-4 transition-transform duration-200 hover:scale-[1.02]`}
    >
      <Button
        fn={fn}
        variant="tertiary"
        title="Add a Content"
        icon={<Plus />}
      />
    </div>
  );
};

export default AddNewButtonBox;
