import GlobalStyle from "../../../Styles/Global.module.css";
import style from "./Filtering.module.css";
import {
  CheckBoxCaegories,
  CheckBoxType,
} from "../../../Types/CheckBox/CheckBox";
import CheckBoxComponent from "../../Atoms/CheckBox/CheckBoxAtoms/CheckBoxComponent";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Filtering = () => {
  const { container } = GlobalStyle;
  const { Filtering } = style;
  const [FilterState, setFilterState] = useState(false);
  const CheckLists = [
    {
      List: CheckBoxCaegories,
      Type: "CATEGORIES",
    },
    {
      List: CheckBoxType,
      Type: "TYPE",
    },
  ];
  return (
    <>
      <div
        className={`${container} ${Filtering} justify-start max-sm:relative`}
      >
        <div className="my-10 max-sm:my-2 flex flex-col gap-7 ">
          <h1
            className="text-xl flex items-center gap-1"
            onClick={() => setFilterState(!FilterState)}
          >
            FILTERS{" "}
            <span>
              {FilterState ? (
                <IoIosArrowDown className="text-[#afafaf] text-lg" />
              ) : (
                <IoIosArrowForward className="text-[#afafaf] text-lg" />
              )}
            </span>
          </h1>
          <div
            className={`${
              FilterState ? "max-sm:block" : "max-sm:hidden"
            } w-[126%]`}
          >
            {CheckLists.map((el, index) => (
              <CheckBoxComponent key={index} Lists={el.List} Type={el.Type} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filtering;
