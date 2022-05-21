import { createSlice } from "@reduxjs/toolkit";
import {
  addAppointmentCaseReducer,
  addFavoriteCaseReducer,
  loginCaseReducer,
  logoutCaseReducer,
  removeFavoriteCaseReducer,
  setAppointmentsCaseReducer,
  setFavoritesCaseReducer,
  setIsInputErrorCaseReducer,
  setSearchInputCaseReducer,
} from "./reducers";
import { userInitialState } from "./state";

const UserReducerSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login: loginCaseReducer,
    logout: logoutCaseReducer,
    setIsInputError: setIsInputErrorCaseReducer,
    setSearchInput: setSearchInputCaseReducer,
    setAppointments: setAppointmentsCaseReducer,
    setFavorites: setFavoritesCaseReducer,
    addFavorite: addFavoriteCaseReducer,
    removeFavorite: removeFavoriteCaseReducer,
    addAppointment: addAppointmentCaseReducer,
  },
});

export const {
  login,
  logout,
  setIsInputError,
  setSearchInput,
  setAppointments,
  setFavorites,
  addFavorite,
  removeFavorite,
  addAppointment,
} = UserReducerSlice.actions;

export const UserReducer = UserReducerSlice.reducer;
