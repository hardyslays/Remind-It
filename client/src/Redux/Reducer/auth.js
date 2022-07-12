import { createSlice } from '@reduxjs/toolkit';
import {
  getItemFromStorage,
  setItemInStorage,
  removeItemFromStorage,
} from "../../Utils/storage";


export const authDataSlice = createSlice({
  name: "authData",
  initialState: {
    token: getItemFromStorage("token") || "",
  },
  reducers: {
    updateToken: (state, action) => {
      console.log("updateToken : ", action.payload);
      setItemInStorage("token", action.payload);
      console.log(state);
      state.token = action.payload;
    },
    removeToken: (state) => {
      console.log("removeToken : ");
      removeItemFromStorage("token");
      state.token = "";
    },
  },
});

export const { updateToken, removeToken } = authDataSlice.actions;

export default authDataSlice.reducer;