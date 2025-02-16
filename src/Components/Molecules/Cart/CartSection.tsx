import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { useEffect, useState } from "react";
import {
  fetchgetCart,
  fetchGetSumCart,
} from "../../../Store/Reducer/Cart/getCartSlice";
import style from "./CartSection.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { fetchDeleteCart } from "../../../Store/Reducer/Cart/deleteCart";
const CartSection = () => {
  const state = useSelector((state: RootState) => state.Cart);
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState(false);
  const { cart_container, Size } = style;

  useEffect(() => {
    dispatch(fetchgetCart());
    dispatch(fetchGetSumCart());
  }, [data]);

  return (
    <>
      <div className="w-full flex flex-col gap-4 ">
        {state?.data &&
          state?.data?.result?.map((el: any, index: number) => {
            return (
              <div key={index} className={`${cart_container} shadow-md`}>
                <div className="flex px-2 w-full justify-between items-center">
                  <div className="flex gap-10 max-sm:gap-3">
                    <div>
                      <img
                        src={el.image}
                        alt="imageCart.png"
                        className="w-24 max-sm:w-20"
                      />
                    </div>
                    <div className="flex flex-col justify-around">
                      <h1 className="text-lg font-bold max-sm:font-light max-sm:text-sm">
                        {el.name}
                      </h1>
                      <div className="flex items-center gap-10">
                        <p>${el.price}</p>
                        <p className={Size}>{el.sizes}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      value={1}
                      className="border-[1px] max-sm:w-14 border-[#ddd] border-solid w-20 rounded-sm px-2"
                    />
                  </div>
                  <div
                    onClick={() => {
                      dispatch(fetchDeleteCart(el.id));
                      setData(!data);
                    }}
                    className="cursor-pointer"
                  >
                    <MdOutlineDeleteOutline className="text-4xl" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CartSection;
