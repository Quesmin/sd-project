import { PayloadAction } from "@reduxjs/toolkit";
import { Appointment } from "../../models/entities/Appointment";
import { Car } from "../../models/entities/Car";
import { Manufacturer } from "../../models/entities/Manufacturer";
import { ManufacturerState } from "./state";

export const setManufacturersCaseReducer = (
  state: ManufacturerState,
  action: PayloadAction<Manufacturer[]>
) => {
  state.manufacturers = action.payload;
};
