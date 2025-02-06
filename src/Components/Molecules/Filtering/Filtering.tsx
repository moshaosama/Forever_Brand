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
        className={container}
        style={{ margin: "1pc 0pc 1pc 11pc", position: "sticky", top: "0px" }}
      >
        <div className="my-10 flex flex-col gap-7 max-sm:hidden">
          <h1 className="text-xl">FILTERS</h1>
          {CheckLists.map((el, index) => (
            <CheckBoxComponent key={index} Lists={el.List} Type={el.Type} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Filtering;
