import TitleContent from "../../Atoms/TitleContent/TitleContent";
import { assets } from "../../../assets/frontend_assets/assets";
import style from "./AboutContent.module.css";
import globalStyle from "../../../Styles/Global.module.css";
const AboutContent = () => {
  const { Img, about_container } = style;
  const { container } = globalStyle;
  const aboutTexts = [
    "Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.",
    "Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.",
  ];

  const AboutTasksRender = () =>
    aboutTexts.map((text, index) => <p key={index}>{text}</p>);

  return (
    <>
      <div className="my-12">
        <TitleContent LeftTitle="ABOUT" RightTitle="US" Active={false} />
      </div>
      <div className={`${container} ${about_container} max-sm:flex-col`}>
        <img src={assets.about_img} alt="About.png" className={Img} />
        <div className="w-[50pc] max-sm:w-[23pc]  flex flex-col gap-7 text-gray-600">
          <AboutTasksRender />
          <p className="text-black font-bold text-md">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
