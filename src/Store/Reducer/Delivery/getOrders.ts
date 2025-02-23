import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchgetOrders = createAsyncThunk(
  "getOrders/fetchgetOrders",
  () => {
    useAxios("http://localhost:8000/getdelivery");
  }
);

const getOrdersSlice = createSlice({
  name: "getOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchgetOrders.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchgetOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchgetOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default getOrdersSlice.reducer;
