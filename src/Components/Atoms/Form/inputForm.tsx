import { inputForm } from "../../../Types/InputForm/InputForm";

const InputForm = ({
  Type,
  Name,
  Label,
  value,
  onChange,
}: inputForm) => {
  return (
    <p>
      <input
        type={Type}
        name={Name}
        placeholder={Label}
        className="p-2 w-96 max-sm:w-80 border-[1px] border-black"
        onChange={onChange}
        value={value}
      />
    
    </p>
  );
};

export default InputForm;
