import { assets } from "../../../../assets/frontend_assets/assets";
import FeatureDetails from "../FeatureDetails/FeatureDetails";
import style from "./Detail.module.css";
const Detail = () => {
  const { container } = style;
  const featuresList = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      description: "We offer hassle-free exchange policy",
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy",
    },
    {
      icon: assets.support_img,
      title: "Best Customer Support",
      description: "We provide 24/7 customer support",
    },
  ];
  return (
    <div className={container}>
      {featuresList.map((el, index) => {
        return (
          <>
            <FeatureDetails
              key={index}
              assets={el.icon}
              Title={el.title}
              Description={el.description}
            />
          </>
        );
      })}
    </div>
  );
};

export default Detail;
