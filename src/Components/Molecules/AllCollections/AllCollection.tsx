import { useSelector } from "react-redux";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import { RootState } from "../../../Store/globalStore/store";
import ProductItem from "../Productitem/ProductItem";

const AllCollection = () => {
  const state = useSelector((state: RootState) => state.products);

  return (
    <>
      <div className="my-10 mx-0">
        <div className="flex justify-start mx-44 max-sm:mx-4">
          <TitleContent
            LeftTitle="ALL"
            RightTitle="COLLECTIONS"
            Active={false}
          />
        </div>
        <ProductItem StartSLice={0} EndSlice={state.data.length} />
      </div>
    </>
  );
};

export default AllCollection;
