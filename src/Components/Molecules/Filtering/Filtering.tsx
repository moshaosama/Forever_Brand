import GlobalStyle from "../../../Styles/Global.module.css";
import {
  CheckBoxCaegories,
  CheckBoxType,
} from "../../../Types/CheckBox/CheckBox";
import CheckBoxComponent from "../../Atoms/CheckBox/CheckBoxAtoms/CheckBoxComponent";

const Filtering = () => {
  const { container } = GlobalStyle;
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
        className={`${container} justify-start`}
        style={{ position: "sticky", top: "0px" }}
      >
        <div className="my-10 flex flex-col gap-7 ">
          <h1 className="text-xl">FILTERS</h1>
          <div>
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
