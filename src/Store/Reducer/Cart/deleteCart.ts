import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "./getCartSlice";
import useAxios from "../../../hooks/useAxios";

export const fetchDeleteCart = createAsyncThunk(
  "deletecart/fetchDeleteCart",
  (id: number) => {
    useAxios(`http://localhost:8000/deletecart/${id}`);
  }
);

const deletCartSlice = createSlice({
  name: "deletecart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDeleteCart.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteCart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDeleteCart.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default deletCartSlice.reducer;
