import { PayloadAction } from "@reduxjs/toolkit";
import { Appointment } from "../../models/entities/Appointment";
import { Favorite } from "../../models/entities/Favorite";
import { User } from "../../models/entities/User";
import { userInitialState, UserState } from "./state";

export const loginCaseReducer = (
  state: UserState,
  action: PayloadAction<User>
) => {
  state.isLoggedIn = true;
  state.user = action.payload;
};

export const logoutCaseReducer = (state: UserState) => {
  state.isLoggedIn = false;
  state.user = userInitialState.user;
};

export const setIsInputErrorCaseReducer = (
  state: UserState,
  action: PayloadAction<boolean>
) => {
  state.isInputError = action.payload;
};

export const setSearchInputCaseReducer = (
  state: UserState,
  action: PayloadAction<string>
) => {
  state.searchInput = action.payload;
};

export const setAppointmentsCaseReducer = (
  state: UserState,
  action: PayloadAction<Appointment[]>
) => {
  state.appointments = action.payload;
};

export const setFavoritesCaseReducer = (
  state: UserState,
  action: PayloadAction<Favorite[]>
) => {
  state.favorites = action.payload;
};

export const setCarModalCaseReducer = (
  state: UserState,
  action: PayloadAction<boolean>
) => {
  state.isCarModalOpen = action.payload;
};

export const setAppModalCaseReducer = (
  state: UserState,
  action: PayloadAction<boolean>
) => {
  state.isAppModalOpen = action.payload;
};

export const addFavoriteCaseReducer = (
  state: UserState,
  action: PayloadAction<Favorite>
) => {
  state.favorites.push(action.payload);
};

export const removeFavoriteCaseReducer = (
  state: UserState,
  action: PayloadAction<number>
) => {
  state.favorites = state.favorites.filter((e) => e.id !== action.payload);
};

export const addAppointmentCaseReducer = (
  state: UserState,
  action: PayloadAction<Appointment>
) => {
  state.appointments.push(action.payload);
};
