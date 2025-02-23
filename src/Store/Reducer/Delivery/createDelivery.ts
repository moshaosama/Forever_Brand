import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import request from "../../../hooks/useApi";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchCraeteDelivery = createAsyncThunk(
  "createDelivery/fetchCraeteDelivery",
  async (data: any) => {
    return await request("http://localhost:8000/createdelivery", "POST", data);
  }
);

const CreateDeliverySlice = createSlice({
  name: "createDelivery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCraeteDelivery.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCraeteDelivery.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCraeteDelivery.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default CreateDeliverySlice.reducer;
