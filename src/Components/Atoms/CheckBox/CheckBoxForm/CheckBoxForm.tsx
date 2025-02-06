import { CheckBoxFormProps } from "../../../../Types/CheckBox/CheckBox";

const CheckBoxForm = ({ Name }: CheckBoxFormProps) => {
  return (
    <>
      <label className="flex items-center gap-2 w-60">
        <input type="checkbox" name={Name} className="w-4 h-4" />
        <span>{Name}</span>
      </label>
    </>
  );
};

export default CheckBoxForm;
