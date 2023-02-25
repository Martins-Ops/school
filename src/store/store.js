import { configureStore } from "@reduxjs/toolkit";
import authslice from "./slices/authslice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
