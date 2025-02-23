import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../../hooks/useApi";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchCraeteCart = createAsyncThunk(
  "createCart/fetchCraeteCart",
  async (data: any) => {
    return await request("http://localhost:8000/addcart", data, "POST");
  }
);

const cartSlice = createSlice({
  name: "createCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCraeteCart.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCraeteCart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCraeteCart.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default cartSlice.reducer;
