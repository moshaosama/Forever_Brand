import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../assets/frontend_assets/assets";

const initialState = {
  data: products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { setProduct } = productSlice.actions;
