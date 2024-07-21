import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AccountEmailProps,
  GeneratePasswordResponse,
  RequestsInitialStateProps,
  RequestsResponseProps,
  SendAccountEmailResponse,
} from "../types/admin.interface";
import customFetch from "../utils/axios";
import { getTokenFromLocalStorage } from "../utils/localStorage";

const initialState: RequestsInitialStateProps = {
  isLoading: false,
  organizations: [],
  filter: { field: "all", value: "all" },
  fetchingPassword: false,
  sendingAccountEmail: false,
};

export const getOrgRequests = createAsyncThunk<
  RequestsResponseProps,
  void,
  { rejectValue: any }
>("request/getOrgRequests", async (_, thunkAPI) => {
  try {
    const { data } = await customFetch.get("admin/organisation-accounts", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    // console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const generateRandomPassword = createAsyncThunk<
  GeneratePasswordResponse,
  void,
  { rejectValue: any }
>("request/generatePassword", async (_, thunkAPI) => {
  try {
    const { data } = await customFetch.get("generate-password", {
      headers: { authorization: `Bearer ${getTokenFromLocalStorage()}` },
    });
    // console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const sendAccountEmail = createAsyncThunk<
  SendAccountEmailResponse,
  AccountEmailProps,
  { rejectValue: any }
>("request/sendAccountEmail", async (payload, thunkAPI) => {
  console.log(payload);

  try {
    const { data } = await customFetch.patch("account-verify", payload, {
      headers: { authorization: `Bearer ${getTokenFromLocalStorage()}` },
    });
    // console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrgRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrgRequests.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.organizations = payload.data.accounts;
      })
      .addCase(getOrgRequests.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(generateRandomPassword.pending, (state) => {
        state.fetchingPassword = true;
      })
      .addCase(generateRandomPassword.fulfilled, (state) => {
        state.fetchingPassword = false;
        // state.organizations = payload.data.accounts;
      })
      .addCase(generateRandomPassword.rejected, (state) => {
        state.fetchingPassword = false;
      })
      .addCase(sendAccountEmail.pending, (state) => {
        state.sendingAccountEmail = true;
      })
      .addCase(sendAccountEmail.fulfilled, (state) => {
        state.sendingAccountEmail = false;
        // state.organizations = payload.data.accounts;
      })
      .addCase(sendAccountEmail.rejected, (state) => {
        state.sendingAccountEmail = false;
      });
  },
});

export const { setFilter } = requestSlice.actions;

export default requestSlice.reducer;
