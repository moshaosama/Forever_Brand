import { configureStore } from "@reduxjs/toolkit";

import productSlice from "../Products/productSlice";

export const Store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
