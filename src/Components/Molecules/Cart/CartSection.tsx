import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { useEffect } from "react";
import { fetchgetCart } from "../../../Store/Reducer/Cart/getCartSlice";
import style from "./CartSection.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
const CartSection = () => {
  const state = useSelector((state: RootState) => state.Cart);
  const dispatch = useDispatch<AppDispatch>();
  const { cart_container, Size } = style;

  useEffect(() => {
    dispatch(fetchgetCart());
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-4 ">
        {state?.data &&
          state?.data?.result?.map((el: any, index: number) => {
            return (
              <div key={index} className={`${cart_container} shadow-md`}>
                <div className="flex px-2 w-full justify-between items-center">
                  <div className="flex gap-10">
                    <div>
                      <img
                        src={el.image}
                        alt="imageCart.png"
                        className="w-24"
                      />
                    </div>
                    <div className="flex flex-col justify-around">
                      <h1 className="text-lg font-bold">{el.name}</h1>
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
                      className="border-[1px] border-[#ddd] border-solid w-20 rounded-sm px-2"
                    />
                  </div>
                  <div>
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
