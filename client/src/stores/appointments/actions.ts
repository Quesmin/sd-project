import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import {
  addAppointmentRequest,
  deleteAppointmentRequest,
  getAllAppointmentsRequest,
  getAppointmentByIdRequest,
  updateAppointmentRequest,
} from "../../services/AppointmentService";
import {
  getAllCarsRequest,
  getCarByIdRequest,
} from "../../services/CarService";
import { RootState } from "../store";
import {
  addAppointment,
  deleteAppointment,
  setAppointments,
  updateAppointment,
} from "../appointments/slice";
import { setCurrentAppointment } from "./slice";
import { AppointmentDto } from "../../models/dto/AppointmentDto";

export const getAppointmentsAction =
  (): ThunkAction<void, RootState, null, AnyAction> => async (dispatch) => {
    try {
      const response = await getAllAppointmentsRequest();
      dispatch(setAppointments(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const getCurrentAppointmentAction =
  (id: number): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await getAppointmentByIdRequest(id);
      dispatch(setCurrentAppointment(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const addAppointmentAction =
  (data: AppointmentDto): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await addAppointmentRequest(data);
      dispatch(addAppointment(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const updateAppointmentAction =
  (
    id: number,
    data: AppointmentDto
  ): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await updateAppointmentRequest(id, data);
      dispatch(updateAppointment({ id, data: response }));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const deleteAppointmentAction =
  (id: number): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await deleteAppointmentRequest(id);
      if (response) {
        dispatch(deleteAppointment(id));
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
