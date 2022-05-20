import { PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../models/entities/Car";
import { CarState } from "./state";

export const setCarsCaseReducer = (
  state: CarState,
  action: PayloadAction<Car[]>
) => {
  state.cars = action.payload;
};

export const setCurrentCarCaseReducer = (
  state: CarState,
  action: PayloadAction<Car>
) => {
  state.currentCar = action.payload;
};
