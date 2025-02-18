import { CheckBoxFormProps } from "../../../../Types/CheckBox/CheckBox";

const CheckBoxForm = ({ Name, onChange }: CheckBoxFormProps) => {
  return (
    <>
      <label className="flex items-center gap-2 w-60">
        <input
          type="checkbox"
          name={Name}
          className="w-4 h-4"
          onChange={onChange}
        />
        <span>{Name}</span>
      </label>
    </>
  );
};

export default CheckBoxForm;
