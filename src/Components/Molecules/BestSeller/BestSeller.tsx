import TitleContent from "../../Atoms/TitleContent/TitleContent";
import ProductItem from "../Productitem/ProductItem";

const BestSeller = () => {
  return (
    <>
      <TitleContent LeftTitle="BEST" RightTitle="SELLERS" Active={true} />
      <ProductItem StartSLice={11} EndSlice={16} />
    </>
  );
};

export default BestSeller;
