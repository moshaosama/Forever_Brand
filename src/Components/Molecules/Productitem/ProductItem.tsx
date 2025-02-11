import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productItemProps,
  productType,
} from "../../../Types/Products/productType";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import style from "./ProductItem.module.css";
import { Link } from "react-router";
import { getProductByID } from "../../../Store/Reducer/Products/ProductIdSlice";

const ProductItem = ({ EndSlice, StartSLice }: productItemProps) => {
  const data = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const [products, setProduct] = useState<productType[]>([]);
  useEffect(() => setProduct(data.data.slice(StartSLice, EndSlice)), []);
  const { product } = style;

  const handleClick = (id: string) => {
    dispatch(getProductByID(id));
  };

  useEffect(() => {}, [data.data]);
  return (
    <>
      <div className={`${product}`}>
        {products.map((el, index) => (
          <Link to={`${el._id}`}>
            <div
              className="bg-[#f8f8f8] rounded-lg"
              key={index}
              onClick={() => handleClick(el._id)}
            >
              <div className="rounded-lg cursor-pointer overflow-hidden">
                <img
                  src={el.image[0]}
                  alt={`${el.name}.png`}
                  className="transition-all duration-500 transform hover:scale-110"
                />
              </div>
              <div className="text-sm my-2 mx-2">
                <p>{el.name}</p>
                <p>$ {el.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductItem;
