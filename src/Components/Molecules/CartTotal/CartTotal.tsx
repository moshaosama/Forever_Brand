import { useDispatch, useSelector } from "react-redux";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import style from "./cartTotal.module.css";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { useEffect } from "react";
import { fetchGetSumCart } from "../../../Store/Reducer/Cart/getCartSlice";
import { Link } from "react-router-dom";

interface CartTotalProps {
  TitleBtn: any;
  onClick?: () => void;
}

const CartTotal = ({ TitleBtn, onClick }: CartTotalProps) => {
  const { cartTotalSection } = style;
  const state = useSelector((state: RootState) => state.SumCart);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetSumCart());
  }, []);

  const cartDetail = [
    {
      Name: "Subtotal",
      Price: +state.Total?.Total,
    },
    {
      Name: "Shipping Fee",
      Price: 10.0,
    },
    {
      Name: "Total",
      Price: +state.Total?.Total + 10,
    },
  ];

  const CartTotalRender = () => {
    return (
      <div>
        {cartDetail?.map(
          (el: { Name: string; Price: number }, index: number) => {
            return (
              <div key={index}>
                <div className={cartTotalSection}>
                  <p
                    className={`${
                      index == cartDetail?.length - 1 ? "font-bold" : ""
                    }`}
                  >
                    {el.Name}
                  </p>
                  <p
                    className={`${
                      index == cartDetail?.length - 1 ? "font-bold" : ""
                    }`}
                  >
                    $ {el.Price}.00
                  </p>
                </div>
                {index == cartDetail?.length - 1 ? "" : <hr className="my-1" />}
              </div>
            );
          }
        )}
      </div>
    );
  };

  return (
    <>
      <div className="w-[30pc] my-16 max-sm:w-[20pc]">
        <div className="w-full flex  justify-start">
          <TitleContent LeftTitle="CART" RightTitle="TOTALS" Active={false} />
        </div>
        <CartTotalRender />
        <Link to={"/place-order"}>
          <div className="w-full flex justify-end my-5">
            <button
              className="bg-black text-white p-3 cursor-pointer"
              onClick={onClick}
            >
              {TitleBtn}
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CartTotal;
