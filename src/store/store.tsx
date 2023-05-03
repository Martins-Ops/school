import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authslice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const authStore = (state: RootState) => state.auth;

export default store;
