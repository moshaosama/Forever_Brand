import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchgetOrders = createAsyncThunk(
  "getOrders/fetchgetOrders",
  async () => {
    try {
      const response = await axios.get("http://localhost:8000/getdelivery");
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
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
