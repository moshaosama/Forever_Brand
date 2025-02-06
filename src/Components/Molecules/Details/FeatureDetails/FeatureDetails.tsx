import { FeatureDetail } from "../../../../Types/Details/FeatureDetail";
import style from "./FeatureDetails.module.css";
const FeatureDetails = ({ assets, Title, Description }: FeatureDetail) => {
  const { paragraph, Header } = style;
  return (
    <>
      <div className="flex flex-col items-center max-sm:w-80">
        <img src={assets} alt="exhange.png" className="w-10" />

        <h1 className={Header}>{Title}</h1>
        <p className={paragraph}>{Description}</p>
      </div>
    </>
  );
};

export default FeatureDetails;
