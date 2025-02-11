import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../assets/frontend_assets/assets";
import { productType } from "../../../Types/Products/productType";

const initialState = {
  data: {} as Array<productType>,
};

const productIdSlice = createSlice({
  name: "productId",
  initialState,
  reducers: {
    getProductByID: (state, action) => {
      state.data =
        products && products.filter((el) => el._id === action.payload);
    },
  },
});

export default productIdSlice.reducer;
export const { getProductByID } = productIdSlice.actions;
