import { createSlice } from "@reduxjs/toolkit";
import {
  loginCaseReducer,
  logoutCaseReducer,
  setIsInputErrorCaseReducer,
} from "./reducers";
import { userInitialState } from "./state";

const UserReducerSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login: loginCaseReducer,
    logout: logoutCaseReducer,
    setIsInputError: setIsInputErrorCaseReducer,
  },
});

export const { login, logout, setIsInputError } = UserReducerSlice.actions;

export const UserReducer = UserReducerSlice.reducer;
