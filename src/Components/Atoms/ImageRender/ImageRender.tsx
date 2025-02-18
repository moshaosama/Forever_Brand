import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../assets/frontend_assets/assets";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { fetchgetCart } from "../../../Store/Reducer/Cart/getCartSlice";

const ImageRender = () => {
  const Token = window.localStorage.getItem("Token");
  const [detail, setDetail] = useState(false);
  const Navigate = useNavigate();
  const state = useSelector((state: RootState) => state.Cart);
  const dispatch = useDispatch<AppDispatch>();
  const [DataLength, setDataLength] = useState(0);

  useEffect(() => {
    dispatch(fetchgetCart()).then(() => setDataLength(DataLength + 1));
  }, [dispatch]);
  const changeDetail = () => {
    setDetail(!detail);
  };
  const ImagesList = [
    {
      src: assets.search_icon,
      alt: "search.png",
      link: "",
      onclick: () => {},
    },
    {
      src: assets.profile_icon,
      alt: "profile.png",
      link: Token ? window.location.pathname : "/login",
      onclick: changeDetail,
    },
    {
      src: assets.cart_icon,
      alt: "cart.png",
      link: "/cart",
      onclick: () => {},
    },
  ];

  const Header = [
    {
      Head: "Source Code",
      onclick: () => {
        window.open(
          "https://github.com/moshaosama/Forever_Brand",
          "_blank",
          "width=800,height=600"
        );
      },
    },
    {
      Head: "Orders",
      onclick: () => {
        Navigate("/orders");
      },
    },
    {
      Head: "Logout",
      onclick: () => {
        window.localStorage.removeItem("Token");
        Navigate("/login");
      },
    },
  ];
  return (
    <>
      {ImagesList.map((el, index) => {
        return (
          <Link to={el.link} onClick={el.onclick}>
            <div className="relative">
              <img
                key={index}
                src={el.src}
                alt={el.alt}
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
              />
              {index === 2 ? (
                <div className="absolute top-3 left-2 flex justify-center items-center">
                  <div
                    className="w-4 h-4 bg-black rounded-full text-white  text-center"
                    style={{ fontSize: "12px" }}
                  >
                    {state?.data?.result?.length}
                  </div>
                </div>
              ) : null}
            </div>
          </Link>
        );
      })}
      {Token ? (
        detail ? (
          <div
            className={`bg-[#f8f8f8] ${
              Token ? "" : "none"
            } absolute px-8 py-2 top-16 right-56`}
          >
            <div className=" flex flex-col gap-3">
              {Header.map((el: { Head: string; onclick: () => void }) => {
                return (
                  <h1
                    className="text-black hover:font-semibold cursor-pointer"
                    onClick={() => {
                      el.onclick();
                      setDetail(false);
                    }}
                  >
                    {el.Head}
                  </h1>
                );
              })}
            </div>
          </div>
        ) : null
      ) : null}
    </>
  );
};

export default ImageRender;
