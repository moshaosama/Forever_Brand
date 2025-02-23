import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import request from "../../../hooks/useApi";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (data: any) => {
    return await request("http://localhost:8000/login", "POST", data);
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default loginSlice.reducer;
