import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AdminProfileFetchResponse,
  AdminProfileInitialStateProps,
  AdminProfileUpdateResponse,
} from "../types/admin.interface";
import customFetch from "../utils/axios";

const initialState: AdminProfileInitialStateProps = {
  isLoading: false,
  adminProfile: null,
  editBankDetails: false,
  editBasicInfo: false,
  editPassword: false,
};

export const getAdminProfile = createAsyncThunk<
  AdminProfileFetchResponse,
  void,
  { rejectValue: any }
>("admin/getAdminProfile", async (_, thunkAPI) => {
  try {
    const { data } = await customFetch.get("admin/admin-profile", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    // console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateAdminBasicInfo = createAsyncThunk<
  AdminProfileUpdateResponse,
  any,
  { rejectValue: any }
>("admin/updateAdminBasicInfo", async (payload, thunkAPI) => {
  try {
    const { data } = await customFetch.patch(
      `admin/basic-information/${payload.id}`,
      payload.data,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateAccountDetails = createAsyncThunk<
  AdminProfileUpdateResponse,
  any,
  { rejectValue: any }
>("admin/updateAccountDetails", async (payload, thunkAPI) => {
  try {
    console.log(payload);

    const { data } = await customFetch.patch(
      `admin/account-details/${payload.id}`,
      payload.data,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setEditBasicInfo: (state, { payload }) => {
      state.editBasicInfo = payload;
    },
    setEditBankDetails: (state, { payload }) => {
      state.editBankDetails = payload;
    },
    setEditPassword: (state, { payload }) => {
      state.editPassword = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdminProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adminProfile = payload.data.adminProfile;
      })
      .addCase(getAdminProfile.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAdminBasicInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAdminBasicInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adminProfile = payload.data.updatedProfile;
      })
      .addCase(updateAdminBasicInfo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAccountDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAccountDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adminProfile = payload.data.updatedProfile;
      })
      .addCase(updateAccountDetails.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setEditBasicInfo, setEditBankDetails, setEditPassword } =
  adminSlice.actions;

export default adminSlice.reducer;
