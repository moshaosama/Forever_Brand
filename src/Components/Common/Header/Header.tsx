import { Link, NavLink } from "react-router";
import { assets } from "../../../assets/frontend_assets/assets";
import GlobalStyles from "../../../Styles/Global.module.css";
import Style from "../Header/Header.module.css";
const Header = () => {
  const { container } = GlobalStyles;
  const { img, divLink, navLink } = Style;

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
      <div className={container}>
        <img className={img} src={assets.logo} alt="logo.png" />
        <div className={divLink}>
          <NavLinkRender />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <ImageRender />
        </div>
      </div>
      {/* <hr
        style={{ margin: "1pc 11pc", backgroundColor: "#eee", height: "-10px" }}
      /> */}
    </>
  );
};

export default Header;
