import TitleContent from "../../Atoms/TitleContent/TitleContent";
import ProductItem from "../Productitem/ProductItem";

const LatestCollection = () => {
  return (
    <>
      <div className="my-10">
        <TitleContent
          LeftTitle="LATEST"
          RightTitle="COLLECTIONS"
          Active={true}
        />
        <ProductItem StartSLice={0} EndSlice={10} />
      </div>
    </>
  );
};

export default LatestCollection;
