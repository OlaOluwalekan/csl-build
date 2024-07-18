import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AdminPayloadProps,
  adminResponseProps,
  authSliceInitialState,
} from "../types/store.interface";
import axios from "axios";
import { getAdminFromLocalStorage } from "../utils/localStorage";

const initialState: authSliceInitialState = {
  isAuthenticated: false,
  isLoading: false,
  admin: getAdminFromLocalStorage(),
};

export const createAdmin = createAsyncThunk<
  adminResponseProps,
  AdminPayloadProps,
  { rejectValue: any }
>("auth/createAdmin", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3100/api/v1/admin/signup",
      payload
    );
    // console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.admin = payload.data.admin;
      })
      .addCase(createAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default authSlice.reducer;
