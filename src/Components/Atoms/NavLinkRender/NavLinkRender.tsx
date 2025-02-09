import { NavLink } from "react-router-dom";
import Style from "./navLinkRender.module.css";
export const NavLinkLists = [
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
const NavLinkRender = () => {
  const { navLink } = Style;
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

export default NavLinkRender;
