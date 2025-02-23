import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./getCartSlice";
import request from "../../../hooks/useApi";

export const fetchDeleteCart = createAsyncThunk(
  "deletecart/fetchDeleteCart",
  async (id: number) => {
    return request(`http://localhost:8000/deletecart/${id}`, "DELETE");
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
