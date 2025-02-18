import { useEffect, useState } from "react";
import { CheckBoxComProps } from "../../../../Types/CheckBox/CheckBox";
import CheckBoxForm from "../CheckBoxForm/CheckBoxForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Store/globalStore/store";
import { FilterProduct } from "../../../../Store/Reducer/Products/productSlice";

const CheckBoxComponent = ({ Lists, Type }: CheckBoxComProps) => {
  const [Category, setCategory] = useState<string>(""!);
  const dispatch = useDispatch<AppDispatch>();

  // console.log(state);
  useEffect(() => {
    dispatch(FilterProduct(Category));
  }, [Category, dispatch]);

  console.log(Category);

  return (
    <>
      <div className="border-gray-400 border-[1px] px-3 py-1">
        <h1 className="text-md font-semibold ">{Type}</h1>
        <div className="flex flex-col gap-2 my-3">
          {Lists.map((el: any, index: any) => (
            <CheckBoxForm
              Name={el.Name}
              key={index}
              onChange={() => {
                setCategory(el.Name);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CheckBoxComponent;
