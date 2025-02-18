import { useDispatch, useSelector } from "react-redux";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import ProductItem from "../Productitem/ProductItem";
import { useEffect } from "react";
import { getProduct } from "../../../Store/Reducer/Products/productSlice";
import style from "./AllCollection.module.css";
import { fetchgetCart } from "../../../Store/Reducer/Cart/getCartSlice";
const AllCollection = () => {
  const state = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const { product } = style;

  useEffect(() => {
    dispatch(getProduct());
    dispatch(fetchgetCart());
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
        <div className="-mx-44">
          <ProductItem
            StartSLice={0}
            EndSlice={state.data.length}
            product={product}
          />
        </div>
      </div>
    </>
  );
};

export default AllCollection;
