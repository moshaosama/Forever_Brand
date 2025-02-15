import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchCraeteCart = createAsyncThunk(
  "createCart/fetchCraeteCart",
  async (data: any) => {
    try {
      const response = await axios.post("http://localhost:8000/addcart", data);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
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
