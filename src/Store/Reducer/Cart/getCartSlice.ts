import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
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

export default cartSlice.reducer;
