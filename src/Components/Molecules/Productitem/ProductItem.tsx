import { useDispatch, useSelector } from "react-redux";
import { productItemProps } from "../../../Types/Products/productType";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";

import { Link } from "react-router";
import { getProductByID } from "../../../Store/Reducer/Products/ProductIdSlice";
import { getProduct } from "../../../Store/Reducer/Products/productSlice";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Skeleton from "../../Atoms/Skeleton/Skeleton";

const ProductItem = ({ EndSlice, StartSLice, product }: productItemProps) => {
  const data = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = (id: string) => {
    dispatch(getProductByID(id));
  };

  const { isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await dispatch(getProduct());
      return res;
    },
    refetchOnWindowFocus: false,
    retry: 3,
    staleTime: 5000,
  });

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={`${product} `}>
          {data?.data?.slice(StartSLice, EndSlice).map((el, index) => (
            <Suspense fallback={<Skeleton />}>
              <Link to={`${el._id}`} key={index} className="w-fit">
                <div
                  className="bg-[#f8f8f8] w-fit rounded-lg"
                  onClick={() => handleClick(el._id)}
                >
                  <div className="rounded-lg cursor-pointer overflow-hidden">
                    <img
                      src={el.image[0]}
                      alt={`${el.name}.png`}
                      className="transition-all duration-500 transform hover:scale-110"
                    />
                  </div>
                  <div className="text-sm my-2 mx-2">
                    <p>{el.name}</p>
                    <p>$ {el.price}</p>
                  </div>
                </div>
              </Link>
            </Suspense>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductItem;
