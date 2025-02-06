import { NavLink } from "react-router-dom";
import { MenuItemType } from "../../../Types/MenuItems/MenuItemType";
import { assets } from "../../../assets/frontend_assets/assets";
import { NavLinkLists } from "../../Common/Header/Header";

const MenuLinks = ({ activeMenu, setActiveMenu }: MenuItemType) => {
  return (
    <>
      <div
        className={`absolute top-0 right-0 z-50 ${
          activeMenu ? "w-full" : "w-0"
        } transition-all h-full duration-500 bg-white`}
      >
        {activeMenu ? (
          <div>
            <div
              className="flex items-center gap-4 m-3"
              onClick={setActiveMenu}
            >
              <img
                src={assets.dropdown_icon}
                className="scale-x-[-1] w-3"
                alt=""
              />
              <h1>Back</h1>
            </div>
            <div className="my-3">
              {NavLinkLists.map((el, index) => {
                return (
                  <NavLink
                    key={index}
                    to={el.To}
                    className="flex flex-col p-3 w-full"
                    onClick={setActiveMenu}
                  >
                    {el.Title}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MenuLinks;
