import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducer/Products/productSlice";
import productIdReducer from "../Reducer/Products/ProductIdSlice";
import loginReducer from "../Reducer/User/LoginReducer";
import SignUpReducer from "../Reducer/User/SignUpReducer";

export const Store = configureStore({
  reducer: {
    products: productReducer,
    productId: productIdReducer,
    login: loginReducer,
    SignUp: SignUpReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
