import TitleContent from "../../Atoms/TitleContent/TitleContent";
import globalStyle from "../../../Styles/Global.module.css";
import style from "./ChooseUs.module.css";

const ChooseUs = () => {
  const { container } = globalStyle;
  const { Choose_Container, Choose_Card, Choose_Content } = style;

  const ChooseCardList = [
    {
      Header: "Quality Assurance:",
      Description:
        "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
    },
    {
      Header: "Convenience:",
      Description:
        "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
    },
    {
      Header: "Exceptional Customer Service:",
      Description:
        "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
    },
  ];

  const ChooseCardRender = () =>
    ChooseCardList.map((el) => {
      return (
        <div className={Choose_Card}>
          <h1 className="text-md font-semibold">{el.Header}</h1>
          <p className="text-gray-500">{el.Description}</p>
        </div>
      );
    });

  return (
    <>
      <div className={`${container} ${Choose_Container}`}>
        <TitleContent LeftTitle="WHY" RightTitle="CHOOSE US" Active={false} />
      </div>
      <div className={`${container} ${Choose_Content} `}>
        <ChooseCardRender />
      </div>
    </>
  );
};

export default ChooseUs;
