import { Link, NavLink } from "react-router-dom";
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
      <div className="flex items-center gap-7">
        {NavLinkLists.map((el, index) => {
          return (
            <NavLink key={index} to={el.To} className={navLink}>
              {el.Title}
            </NavLink>
          );
        })}

        <a href={"/admin"} target="_black">
          <button className="text-sm px-2 py-1 font-semibold text-[#858585] border-[1px] cursor-pointer border-solid border-[#ddd] rounded-full">
            Admin Panel
          </button>
        </a>
      </div>
    </>
  );
};

export default NavLinkRender;
