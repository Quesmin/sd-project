import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { loginRequest, signupRequest } from "../../services/UserService";
import { RootState } from "../store";
import { login, setIsInputError } from "./slice";

export const loginAction =
  (
    email: string,
    password: string
  ): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const loginResponse = await loginRequest(email, password);
      console.log(
        "🚀 ~ file: actions.ts ~ line 15 ~ loginResponse",
        loginResponse
      );
      dispatch(login(loginResponse));
      dispatch(setIsInputError(false));
    } catch (error) {
      console.log("Error:", error);
      dispatch(setIsInputError(true));
    }
  };

export const signupAction =
  (
    email: string,
    password: string
  ): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await signupRequest(email, password);
      dispatch(login(response));
      dispatch(setIsInputError(false));
    } catch (error) {
      console.log("Error:", error);
      dispatch(setIsInputError(true));
    }
  };
