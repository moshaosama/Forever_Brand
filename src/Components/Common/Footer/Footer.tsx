import globalStyle from "../../../Styles/Global.module.css";
import style from "../Footer/Footer.module.css";
import { assets } from "../../../assets/frontend_assets/assets";
const Footer = () => {
  const { container } = globalStyle;
  const { img, Text } = style;
  return (
    <>
      <div className={container}>
        <div>
          <img src={assets.logo} alt="" className={img} />
          <p style={{ width: "40pc" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel
            dolor similique? Modi dolorum consequatur quibusdam consequuntur
            incidunt eveniet obcaecati illo. Nemo sunt dolores voluptatibus odio
            alias nam, saepe voluptate.
          </p>
        </div>
        <div>
          <h1 className={Text}>Company</h1>
          <p>Home</p>
          <p>About Us</p>
          <p>Delivery</p>
          <p>Privacy policy</p>
        </div>
        <div>
          <h1 className={Text}>GET IN TOUCH</h1>
          <p>+1-000-000-0000</p>
          <p>greatstackdev@gmail.com</p>
          <p>Instagram</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
