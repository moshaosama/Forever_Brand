import TitleContent from "../../Atoms/TitleContent/TitleContent";
import ProductItem from "../Productitem/ProductItem";
import style from "./BestSaller.module.css";
const BestSeller = () => {
  const { product } = style;
  return (
    <>
      <TitleContent LeftTitle="BEST" RightTitle="SELLERS" Active={true} />
      <ProductItem StartSLice={11} EndSlice={16} product={product} />
    </>
  );
};

export default BestSeller;
