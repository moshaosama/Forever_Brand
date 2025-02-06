import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  productItemProps,
  productType,
} from "../../../Types/Products/productType";
import { RootState } from "../../../Store/globalStore/store";
import style from "./ProductItem.module.css";

const ProductItem = ({ EndSlice, StartSLice }: productItemProps) => {
  const data = useSelector((state: RootState) => state.products);
  const [products, setProduct] = useState<productType[]>([]);
  useEffect(() => setProduct(data.data.slice(StartSLice, EndSlice)), []);
  const { product } = style;
  return (
    <>
      <div className={`${product}`}>
        {products.map((el, index) => {
          return (
            <>
              <div className="bg-[#f8f8f8] rounded-lg" key={index}>
                <div className="rounded-lg cursor-pointer overflow-hidden">
                  <img
                    src={el.image[0]}
                    alt={el.image + ".png"}
                    className="transition-all duration-500 transform hover:scale-110"
                  />
                </div>
                <div className="text-sm my-2 mx-2">
                  <p key={index}>{el.name}</p>
                  <p>$ {el.price}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductItem;
