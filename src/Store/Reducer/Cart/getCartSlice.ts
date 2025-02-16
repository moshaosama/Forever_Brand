import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchgetCart = createAsyncThunk(
  "getcart/fetchgetCart",
  async () => {
    try {
      const response = await axios.get("http://localhost:8000/getcarts");
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
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
    try {
      const response = await axios.get("http://localhost:8000/getsumprice");
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
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
