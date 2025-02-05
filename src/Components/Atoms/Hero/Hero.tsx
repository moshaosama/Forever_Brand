import globalStyle from "../../../Styles/Global.module.css";
import { assets } from "../../../assets/frontend_assets/assets";
import style from "../Hero/Hero.module.css";

export const HR = () => {
  return (
    <>
      <p className="w-12 h-[2px] bg-[rgba(65,65,65,1)] rounded-full text-start"></p>
    </>
  );
};

const Hero = () => {
  const { container } = globalStyle;
  const { divText, Paragraph } = style;

  return (
    <>
      <div className={container} style={{ border: "1px solid black" }}>
        {/* Left Hero Side */}
        <div className="flex justify-between items-center w-[100%]">
          <div className="w-1/2 text-start flex flex-col items-center text-[rgba(65,65,65,1)]">
            <div className={divText}>
              <HR />
              <p className={Paragraph}>OUR BESTSELLERS</p>
            </div>
            <h1 className="font-semibold text-5xl">Latest Arrivals</h1>
            <div className={divText}>
              <p className={Paragraph}>SHOP NOW</p>
              <HR />
            </div>
          </div>
          {/* Right Hero Side */}
          <div>
            <img src={assets.hero_img} alt="Hero.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
