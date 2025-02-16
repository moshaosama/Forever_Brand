import TitleContent from "../Components/Atoms/TitleContent/TitleContent";
import CartSection from "../Components/Molecules/Cart/CartSection";
import CartTotal from "../Components/Molecules/CartTotal/CartTotal";
import globalStyle from "../Styles/Global.module.css";

const Cart = () => {
  const { container } = globalStyle;
  return (
    <>
      <div className={container}>
        <TitleContent LeftTitle="YOUR" RightTitle="CART" Active={false} />
      </div>
      <div className={container}>
        <CartSection />
      </div>
      <div className={container} style={{ justifyContent: "end" }}>
        <CartTotal TitleBtn="PROCEED TO CHECKOUT" />
      </div>
    </>
  );
};

export default Cart;
