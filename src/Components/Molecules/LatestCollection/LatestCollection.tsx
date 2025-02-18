import TitleContent from "../../Atoms/TitleContent/TitleContent";
import ProductItem from "../Productitem/ProductItem";
import style from "./LatestCollection.module.css";

const LatestCollection = () => {
  const { product } = style;
  return (
    <>
      <div className="my-10">
        <TitleContent
          LeftTitle="LATEST"
          RightTitle="COLLECTIONS"
          Active={true}
        />
        <ProductItem StartSLice={0} EndSlice={10} product={product} />
      </div>
    </>
  );
};

export default LatestCollection;
