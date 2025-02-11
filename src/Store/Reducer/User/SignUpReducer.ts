import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchSignUp = createAsyncThunk(
  "signup/fetchSignUp",
  async (data: any) => {
    try {
      const response = await axios.post("http://localhost:8000/signup", data);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const SignUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSignUp.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchSignUp.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSignUp.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default SignUpSlice.reducer;
