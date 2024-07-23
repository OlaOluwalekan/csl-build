import { createSlice } from "@reduxjs/toolkit";
import { ClientInitialStateProps } from "../types/admin.interface";

const initialState: ClientInitialStateProps = {
  isLoading: false,
  organizations: [],
  filter: { field: "all", value: "all" },
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setFilter } = clientsSlice.actions;

export default clientsSlice.reducer;
