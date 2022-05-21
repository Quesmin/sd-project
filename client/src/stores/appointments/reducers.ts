import { PayloadAction } from "@reduxjs/toolkit";
import { Appointment } from "../../models/entities/Appointment";
import { Car } from "../../models/entities/Car";
import { AppointmentState } from "./state";

export const setAppointmentsCaseReducer = (
  state: AppointmentState,
  action: PayloadAction<Appointment[]>
) => {
  state.appointments = action.payload;
};

export const setCurrentAppointmentCaseReducer = (
  state: AppointmentState,
  action: PayloadAction<Appointment>
) => {
  state.currentAppointment = action.payload;
};

export const addAppointmentCaseReducer = (
  state: AppointmentState,
  action: PayloadAction<Appointment>
) => {
  state.appointments.push(action.payload);
};

export const updateAppointmentCaseReducer = (
  state: AppointmentState,
  action: PayloadAction<{ id: number; data: Appointment }>
) => {
  let result: Appointment[] = [];
  state.appointments.forEach((e) => {
    if (e.id == action.payload.id) {
      result.push(action.payload.data);
    } else {
      result.push(e);
    }
  });

  state.appointments = result;
};

export const deleteAppointmentCaseReducer = (
  state: AppointmentState,
  action: PayloadAction<number>
) => {
  state.appointments = state.appointments.filter((e) => e.id != action.payload);
};
