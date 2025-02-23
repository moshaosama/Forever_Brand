import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import request from "../../../hooks/useApi";

export const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchgetCart = createAsyncThunk(
  "getcart/fetchgetCart",
  async () => {
    return await request("http://localhost:8000/getcarts", "GET");
  }
);

const cartSlice = createSlice({
  name: "getcart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchgetCart.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchgetCart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchgetCart.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

// Sum Cart Price Slice

const initialSum: { Total: number; loading: boolean; error: string } | any = {
  Total: 0,
  loading: false,
  error: "",
};

export const fetchGetSumCart = createAsyncThunk(
  "getSumCart/fetchGetSumCart",
  async () => {
    return await request("http://localhost:8000/getsumprice", "GET");
  }
);

const cartSumSlice = createSlice({
  name: "getSumCart",
  initialState: initialSum,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetSumCart.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGetSumCart.fulfilled, (state, action) => {
      state.loading = false;
      state.Total = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGetSumCart.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

const rootReducers = {
  cart: cartSlice.reducer,
  cartSum: cartSumSlice.reducer,
};

export default rootReducers;
