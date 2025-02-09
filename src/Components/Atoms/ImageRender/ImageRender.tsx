
import { Link } from "react-router-dom";
import { assets } from "../../../assets/frontend_assets/assets";

const ImageRender = () => {
  const ImagesList = [
    {
      src: assets.search_icon,
      alt: "search.png",
      link: "",
    },
    {
      src: assets.profile_icon,
      alt: "profile.png",
      link: "/login",
    },
    {
      src: assets.cart_icon,
      alt: "cart.png",
      link: "/cart",
    },
  ];
  return ImagesList.map((el, index) => {
    return (
      <Link to={el.link}>
        <img
          key={index}
          src={el.src}
          alt={el.alt}
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
        />
      </Link>
    );
  });
};

export default ImageRender;
