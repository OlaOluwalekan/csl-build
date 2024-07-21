import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./features/generalSlice";
import authSlice from "./features/authSlice";
import requestsSlice from "./features/requestsSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    auth: authSlice,
    requests: requestsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
