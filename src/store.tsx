import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./features/generalSlice";
import authSlice from "./features/authSlice";
import requestsSlice from "./features/requestsSlice";
import clientsSlice from "./features/clientsSlice";
import adminSlice from "./features/adminSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    auth: authSlice,
    requests: requestsSlice,
    clients: clientsSlice,
    admin: adminSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
