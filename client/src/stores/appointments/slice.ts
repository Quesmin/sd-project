import { createSlice } from "@reduxjs/toolkit";
import {
  addAppointmentCaseReducer,
  deleteAppointmentCaseReducer,
  setAppointmentsCaseReducer,
  setCurrentAppointmentCaseReducer,
  updateAppointmentCaseReducer,
} from "./reducers";
import { appointmentInitialState } from "./state";

const AppointmentReducerSlice = createSlice({
  name: "appointment",
  initialState: appointmentInitialState,
  reducers: {
    setAppointments: setAppointmentsCaseReducer,
    setCurrentAppointment: setCurrentAppointmentCaseReducer,
    addAppointment: addAppointmentCaseReducer,
    updateAppointment: updateAppointmentCaseReducer,
    deleteAppointment: deleteAppointmentCaseReducer,
  },
});

export const {
  setAppointments,
  setCurrentAppointment,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} = AppointmentReducerSlice.actions;

export const AppointmentReducer = AppointmentReducerSlice.reducer;
