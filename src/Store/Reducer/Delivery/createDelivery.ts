import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchCraeteDelivery = createAsyncThunk(
  "createDelivery/fetchCraeteDelivery",
  async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/createdelivery",
        data
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
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
