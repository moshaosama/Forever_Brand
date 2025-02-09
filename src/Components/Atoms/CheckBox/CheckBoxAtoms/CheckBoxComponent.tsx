import { CheckBoxComProps } from "../../../../Types/CheckBox/CheckBox";
import CheckBoxFrom from "../CheckBoxForm/CheckBoxForm";

const CheckBoxComponent = ({ Lists, Type }: CheckBoxComProps) => {
  return (
    <>
      <div className="border-gray-400 border-[1px] px-3 py-1">
        <h1 className="text-md font-semibold ">{Type}</h1>
        <div className="flex flex-col gap-2 my-3">
          {Lists.map((el: any, index: any) => (
            <CheckBoxFrom Name={el.Name} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CheckBoxComponent;
