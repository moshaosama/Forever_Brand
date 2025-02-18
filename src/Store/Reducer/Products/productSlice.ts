import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../assets/frontend_assets/assets";
import { productType } from "../../../Types/Products/productType";

const initialState = {
  data: products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state) => {
      state.data = state.data;
    },
    setProduct: (state, action) => {
      state.data = action.payload;
    },
    FilterProduct: (state, action) => {
      if (action.payload === "") {
        state.data = products;
      } else {
        state.data = state.data.filter(
          (el: productType) => el.category === action.payload
        );
      }
    },
  },
});

export default productSlice.reducer;
export const { setProduct, FilterProduct, getProduct } = productSlice.actions;
