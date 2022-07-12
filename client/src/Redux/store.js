import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});