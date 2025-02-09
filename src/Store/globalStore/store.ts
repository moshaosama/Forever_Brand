import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducer/Products/productSlice";
import loginReducer from "../Reducer/User/LoginReducer";

export const Store = configureStore({
  reducer: {
    products: productReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
