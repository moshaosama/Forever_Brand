import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "./getCartSlice";


export const fetchDeleteCart = createAsyncThunk(
  "deletecart/fetchDeleteCart",
  async (id: number) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/deletecart/${id}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
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
