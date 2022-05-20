import { PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../models/entities/Food";
import { Order } from "../../models/entities/Order";
import { Restaurant } from "../../models/entities/Restaurant";
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
