import { useDispatch, useSelector } from "react-redux";
import globalStyle from "../../../Styles/Global.module.css";
import TitleContent from "../../Atoms/TitleContent/TitleContent";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { useEffect } from "react";
import { fetchgetOrders } from "../../../Store/Reducer/Delivery/getOrders";
import cartStyle from "../Cart/CartSection.module.css";
const OrderSec = () => {
  const { container } = globalStyle;
  const state = useSelector((state: RootState) => state.Orders);
  const dispatch = useDispatch<AppDispatch>();
  const { cart_container } = cartStyle;

  useEffect(() => {
    dispatch(fetchgetOrders());
  }, []);

  const OrdersRender = () => {
    return (
      <>
        <div className="w-full">
          {state.data?.result?.map((el: any, index: number) => {
            return (
              <div key={index} className="flex flex-col gap-3">
                {JSON.parse(el.Order).map((el2: any, index: number) => {
                  return (
                    <div key={index} className={`${cart_container} shadow-md`}>
                      <div className="flex px-2 w-full justify-between items-center">
                        <div className="flex gap-3 max-sm:gap-3">
                          <div>
                            <img
                              src={el2.image}
                              alt="imageCart.png"
                              className="w-24 max-sm:w-20"
                            />
                          </div>
                          <div className="flex text-sm max-w-fit flex-col gap-2">
                            <h1 className="text-md max-sm:font-light max-sm:text-sm">
                              {el2.name}
                            </h1>
                            <div className="flex items-center gap-4">
                              <p>${el2.price}</p>
                              <p>Size: {el2.sizes}</p>
                            </div>
                            <div>
                              Date:{" "}
                              <span className="text-[#adadad] font-semibold">
                                {el.Date}
                              </span>
                            </div>
                            <div>
                              Payment:{" "}
                              <span className="text-[#adadad] font-semibold">
                                COD
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-1/2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <p>Order Placed</p>
                          </div>
                          <div className="w-fit">
                            <button className="border-[1px] hover:border-[2px] cursor-pointer border-[#ddd] px-2 p-1 rounded-sm border-solid">
                              Track Order
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className={container}>
        <TitleContent LeftTitle="YOUR" RightTitle="ORDERS" Active={false} />
      </div>
      <div className={container}>
        <OrdersRender />
      </div>
    </>
  );
};

export default OrderSec;
