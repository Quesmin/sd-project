import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { AppointmentDto } from "../../models/dto/AppointmentDto";
import { FavoriteDto } from "../../models/dto/FavoriteDto";
import {
  addAppointmentRequest,
  addFavoriteRequest,
  getUserAppointmentsRequest,
  getUserFavoritesRequest,
  loginRequest,
  removeFavoriteRequest,
  signupRequest,
} from "../../services/UserService";
import { RootState } from "../store";
import {
  addAppointment,
  addFavorite,
  login,
  removeFavorite,
  setAppointments,
  setFavorites,
  setIsInputError,
} from "./slice";

export const loginAction =
  (
    email: string,
    password: string
  ): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const loginResponse = await loginRequest(email, password);
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

export const initUserData =
  (id: number): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const [favorites, appointments] = await Promise.all([
        getUserFavoritesRequest(id),
        getUserAppointmentsRequest(id),
      ]);
      dispatch(setFavorites(favorites));
      dispatch(setAppointments(appointments));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const addFavoriteAction =
  (favorite: FavoriteDto): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await addFavoriteRequest(favorite);
      dispatch(addFavorite(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const removeFavoriteAction =
  (id: number): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await removeFavoriteRequest(id);
      dispatch(removeFavorite(response.id));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const addAppointmentAction =
  (
    appointment: AppointmentDto
  ): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await addAppointmentRequest(appointment);
      dispatch(addAppointment(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };
