import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchCraeteDelivery = createAsyncThunk(
  "createDelivery/fetchCraeteDelivery",
  (data: any) => {
    useAxios("http://localhost:8000/createdelivery", data);
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
