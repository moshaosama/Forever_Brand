import { useSelector } from "react-redux";
import { RootState } from "../Store/globalStore/store";
import { useEffect, useState } from "react";
import globalStyle from "../Styles/Global.module.css";
import { productType } from "../Types/Products/productType";

const Product = () => {
  const data = useSelector((state: RootState) => state.productId);
  const [imageState, setImageState] = useState("");
  const [, setDataProduct] = useState(
    window.localStorage.getItem("productId") || {}
  );
  const { container } = globalStyle;
  const ProductId = JSON.parse(window.localStorage.getItem("productId")!);

  useEffect(() => {
    if (data.data && Object.keys(data.data).length > 0) {
      window.localStorage.setItem("productId", JSON.stringify(data.data));
      setDataProduct(data.data);
    }
  }, [data.data]);
  return (
    <>
      <div className={`${container}`} style={{ marginTop: "40px" }}>
        {ProductId &&
          ProductId?.map((el: productType) => {
            return (
              <>
                <div className="flex max-sm:flex-col">
                  <div className="flex max-sm:flex-col-reverse  h-full gap-4 items-start">
                    <div
                      key={el._id}
                      className="h-full flex flex-col max-sm:flex-row max-sm:w-full gap-4 max-sm:gap-2"
                    >
                      {el.image.map((el, index) => (
                        <img
                          key={index}
                          onClick={() => setImageState(el)}
                          src={el}
                          alt="ImageBrand.png"
                          className="w-[9rem] max-sm:w-20  cursor-pointer"
                        />
                      ))}
                    </div>
                    <div className="h-full">
                      <img
                        src={imageState}
                        alt="Image.png"
                        className=" w-[38.7rem] max-sm:w-[21.7rem] object-cover"
                      />
                    </div>
                  </div>
                  <div className="mx-6 max-sm:mx-0 flex flex-col gap-3 items-start">
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
                    <button className="bg-black my-10 p-2 w-40 rounded-md text-white hover:bg-gray-800 transition-all duration-500 cursor-pointer">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Product;
