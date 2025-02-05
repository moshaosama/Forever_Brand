import ProductItem from "../Productitem/ProductItem";
import TitleContent from "../TitleContent/TitleContent";

const LatestCollection = () => {
  return (
    <>
      <div className="my-10">
        <TitleContent LeftTitle="LATEST" RightTitle="COLLECTIONS" />
        <ProductItem EndSlice={10} />
      </div>
    </>
  );
};

export default LatestCollection;
