import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AdminPayloadProps,
  adminResponseProps,
  authSliceInitialState,
  ResetPasswordPayload,
} from "../types/store.interface";
import axios from "axios";
import {
  addAdminToLocalStorage,
  getAdminFromLocalStorage,
} from "../utils/localStorage";

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

export const loginAdmin = createAsyncThunk<
  adminResponseProps,
  AdminPayloadProps,
  { rejectValue: any }
>("auth/loginAdmin", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3100/api/v1/admin/signin",
      payload
    );
    // console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const sendPasswordResetEmail = createAsyncThunk<
  any,
  { email: string },
  { rejectValue: any }
>("auth/sendPasswordResetEmail", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3100/api/v1/admin/forget-password-email",
      payload
    );
    // console.log(data)
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const resetPassword = createAsyncThunk<
  any,
  ResetPasswordPayload,
  { rejectValue: any }
>("auth/resetPassword", async (payload, thunkAPI) => {
  console.log(payload);
  try {
    const { data } = await axios.patch(
      "http://localhost:3100/api/v1/admin/forget-password-reset",
      payload
    );
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
      .addCase(createAdmin.fulfilled, (state) => {
        state.isLoading = false;
        // state.admin = payload.data.admin
      })
      .addCase(createAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.admin = payload.data.admin;
        addAdminToLocalStorage(payload.data.admin);
      })
      .addCase(loginAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(sendPasswordResetEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendPasswordResetEmail.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendPasswordResetEmail.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default authSlice.reducer;
