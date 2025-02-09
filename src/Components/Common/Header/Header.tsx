import { Link } from "react-router";
import { assets } from "../../../assets/frontend_assets/assets";
import GlobalStyles from "../../../Styles/Global.module.css";
import { useState } from "react";
import MenuLinks from "../../Molecules/MenuLinks/MenuLinks";
import ImageRender from "../../Atoms/ImageRender/ImageRender";
import NavLinkRender from "../../Atoms/NavLinkRender/NavLinkRender";

const Header = () => {
  const { container } = GlobalStyles;
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClick = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      <div className={`${container}`}>
        <Link to={""}>
          <img
            className="w-[66%] max-sm:w-32 cursor-poiner"
            src={assets.logo}
            alt="logo.png"
          />
        </Link>
        <div className={`flex gap-8 max-sm:hidden`}>
          <NavLinkRender />
        </div>
        <div className="flex items-center gap-6 max-sm:gap-4">
          <ImageRender />
          <div className="sm:hidden" onClick={handleClick}>
            <img
              src={assets.menu_icon}
              alt={"menu.png"}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <MenuLinks activeMenu={activeMenu} setActiveMenu={handleClick} />

      <hr
        style={{
          margin: "1pc 11pc",
          backgroundColor: "#eee",
          height: "-10px",
        }}
      />
    </>
  );
};

export default Header;
