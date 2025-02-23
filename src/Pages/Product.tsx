import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/globalStore/store";
import { useEffect, useState } from "react";
import globalStyle from "../Styles/Global.module.css";
import { productType } from "../Types/Products/productType";
import { fetchCraeteCart } from "../Store/Reducer/Cart/createCartSlice";
import { fetchgetCart } from "../Store/Reducer/Cart/getCartSlice";

const Product = () => {
  const data = useSelector((state: RootState) => state.productId);
  const dispatch = useDispatch<AppDispatch>();
  // const productData = JSON.parse(window.localStorage.getItem("productId")!)[0];
  const [imageState, setImageState] = useState("");
  const [, setDataProduct] = useState(() => {
    const storedProductId = window.localStorage.getItem("productId");
    return storedProductId ? JSON.parse(storedProductId) : {};
  });

  const [dataLength, setDataLength] = useState(false);

  const { container } = globalStyle;

  const storedProductId = window.localStorage.getItem("productId");
  const ProductId = storedProductId ? JSON.parse(storedProductId) : [];

  useEffect(() => {
    if (data.data && Object.keys(data.data).length > 0) {
      window.localStorage.setItem(
        "productId",
        ProductId ? JSON.stringify(data.data) : ""
      );
      setDataProduct(data.data);
    }
    dispatch(fetchgetCart());
  }, [data.data, dataLength]);

  const handleCick = () => {
    const Image_Product = document.getElementById("Images_Product");
    const Details = document.getElementById("Details");
    const imageState = document.getElementById("imageState");
    imageState?.style?.setProperty("opacity", "100%");
    imageState?.style?.setProperty("left", "0px");
    Details?.style?.setProperty("opacity", "100%");
    Details?.style?.setProperty("left", "0px");
    Image_Product?.style.setProperty("gap", "10px");
  };

  return (
    <>
      <div className={`${container}`} style={{ marginTop: "40px" }}>
        {ProductId &&
          ProductId?.map((el: productType, index: number) => {
            return (
              <div className="flex max-sm:flex-col" key={index}>
                <div className="flex max-sm:flex-col-reverse  h-full gap-4 items-start">
                  <div
                    key={el._id}
                    className="h-full flex flex-col max-sm:flex-row max-sm:w-full gap-20 transition-all duration-1000  max-sm:gap-2"
                    id="Images_Product"
                  >
                    {el.image.map((el, index) => (
                      <img
                        key={index}
                        onClick={() => {
                          setImageState(el);
                          handleCick();
                        }}
                        src={el}
                        alt="ImageBrand.png"
                        className="w-[9rem] max-sm:w-20  cursor-pointer"
                      />
                    ))}
                  </div>
                  <div
                    className="h-full opacity-5 relative left-20 transition-all duration-700"
                    id="imageState"
                  >
                    <img
                      src={imageState}
                      alt="Image.png"
                      className=" w-[38.7rem] max-sm:w-[21.7rem] object-cover"
                    />
                  </div>
                </div>
                <div
                  className="mx-6 relative left-20 transition-all duration-500 opacity-5 max-sm:mx-0 flex flex-col gap-3 items-start"
                  id="Details"
                >
                  <div>
                    <h1 className="text-2xl max-sm:text-lg font-bold mx-3">
                      {el.name}
                    </h1>
                    <img
                      src="/1_k5m8q1rRpdQ-H5NogaHnBQ-removebg-preview.png"
                      alt="rating.png"
                      className="w-32"
                    />
                  </div>
                  <h1 className="text-2xl font-bold mx-3">${el.price}</h1>
                  <p className="w-[40pc] my-4 max-sm:w-full text-gray-600 font-semibold">
                    {el.description}
                  </p>
                  <p className="text-black text-sm">Select Size</p>
                  <div className="flex gap-3">
                    {el.sizes.map((el, index) => {
                      return (
                        <button
                          className="bg-[#ddd] p-2 w-10 rounded-md text-black cursor-pointer"
                          key={index}
                        >
                          {el}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() =>
                      dispatch(
                        fetchCraeteCart({
                          ...el,
                          sizes: el.sizes[0],
                          image: el.image[0],
                        })
                      ).then(() => setDataLength(!dataLength))
                    }
                    className="bg-black my-10 p-2 w-40 rounded-md text-white hover:bg-gray-800 transition-all duration-500 cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Product;
