import { useDispatch, useSelector } from "react-redux";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import ProductItem from "../Productitem/ProductItem";
import { useEffect } from "react";
import { getProduct } from "../../../Store/Reducer/Products/productSlice";

const AllCollection = () => {
  const state = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="my-10 mx-0">
        <div className="flex mb-8 justify-start max-sm:mx-4">
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
