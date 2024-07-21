import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  RequestsInitialStateProps,
  RequestsResponseProps,
} from "../types/admin.interface";
import customFetch from "../utils/axios";

const initialState: RequestsInitialStateProps = {
  isLoading: false,
  organizations: [],
  filter: { field: "all", value: "all" },
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
      .addCase(getOrgRequests.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export const { setFilter } = requestSlice.actions;

export default requestSlice.reducer;
