import { useDispatch, useSelector } from "react-redux";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { lazy, Suspense, useEffect } from "react";
import style from "./AllCollection.module.css";
import { fetchgetCart } from "../../../Store/Reducer/Cart/getCartSlice";

import Skeleton from "../../Atoms/Skeleton/Skeleton";
const AllCollection = () => {
  const state = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const { product } = style;

  useEffect(() => {
    dispatch(fetchgetCart());
  }, [dispatch]);

  const ProductItem = lazy(() => {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver(import("../Productitem/ProductItem"!));
      }, 500);
    });
  });

  return (
    <>
      <div className="my-10 mx-0">
        <div className="flex  mb-8 justify-start max-sm:mx-4">
          <TitleContent
            LeftTitle="ALL"
            RightTitle="COLLECTIONS"
            Active={false}
          />
        </div>

        <div className="-mx-44  max-sm:mx-2 max-sm:flex max-sm:justify-center">
          <Suspense fallback={<Skeleton />}>
            <ProductItem
              StartSLice={0}
              EndSlice={state.data.length}
              product={product}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default AllCollection;
