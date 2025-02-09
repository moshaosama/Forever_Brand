import { inputForm } from "../../../Types/InputForm/InputForm";

const InputForm = ({ Type, Name, Label, onChange }: inputForm) => {
  return (
    <>
      <p>
        <input
          type={Type}
          name={Name}
          placeholder={Label}
          className="p-2 w-96 max-sm:w-80 border-[1px] border-black "
          onChange={onChange}
        />
      </p>
    </>
  );
};

export default InputForm;
