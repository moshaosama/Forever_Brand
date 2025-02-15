import TitleContent from "../Components/Atoms/TitleContent/TitleContent";
import CartSection from "../Components/Molecules/Cart/CartSection";
import globalStyle from "../Styles/Global.module.css";

const Cart = () => {
  const { container } = globalStyle;
  return (
    <>
      <div className={container}>
        <TitleContent LeftTitle="Your" RightTitle="Cart" Active={false} />
      </div>
      <div className={container}>
        <CartSection />
      </div>
    </>
  );
};

export default Cart;
