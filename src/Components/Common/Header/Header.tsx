import { NavLink } from "react-router";
import { assets } from "../../../assets/frontend_assets/assets";
import GlobalStyles from "../../../Styles/Global.module.css";
import Style from "../Header/Header.module.css";
const Header = () => {
  const { container } = GlobalStyles;
  const { navLink } = Style;

  const ImagesList = [
    {
      src: assets.search_icon,
      alt: "search.png",
    },
    {
      src: assets.profile_icon,
      alt: "profile.png",
    },
    {
      src: assets.cart_icon,
      alt: "cart.png",
    },
  ];

  const NavLinkLists = [
    {
      To: "",
      Title: "Home",
    },
    {
      To: "/collection",
      Title: "Collections",
    },
    {
      To: "/about",
      Title: "About",
    },
    {
      To: "/contact",
      Title: "contact",
    },
  ];

  const ImageRender = () => {
    return ImagesList.map((el, index) => {
      return (
        <img
          key={index}
          src={el.src}
          alt={el.alt}
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
        />
      );
    });
  };

  const NavLinkRender = () => {
    return (
      <>
        {NavLinkLists.map((el, index) => {
          return (
            <NavLink key={index} to={el.To} className={navLink}>
              {el.Title}
            </NavLink>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className={`${container}`}>
        <img
          className="w-[9%] max-sm:w-32 cursor-poiner"
          src={assets.logo}
          alt="logo.png"
        />
        <div className={`flex gap-8 max-sm:hidden`}>
          <NavLinkRender />
        </div>
        <div className="flex items-center gap-6 max-sm:gap-4">
          <ImageRender />
          <div className="sm:hidden">
            <img
              src={assets.menu_icon}
              alt={"menu.png"}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {/* <hr
        style={{ margin: "1pc 11pc", backgroundColor: "#eee", height: "-10px" }}
      /> */}
    </>
  );
};

export default Header;
