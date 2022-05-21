import { PayloadAction } from "@reduxjs/toolkit";
import { resourceLimits } from "worker_threads";
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

export const deleteCarCaseReducer = (
  state: CarState,
  action: PayloadAction<number>
) => {
  state.cars = state.cars.filter((e) => e.id != action.payload);
};

export const addCarCaseReducer = (
  state: CarState,
  action: PayloadAction<Car>
) => {
  state.cars.push(action.payload);
};

export const updateCarCaseReducer = (
  state: CarState,
  action: PayloadAction<{ id: number; car: Car }>
) => {
  let result: Car[] = [];
  state.cars.forEach((e) => {
    if (e.id == action.payload.id) {
      result.push(action.payload.car);
    } else {
      result.push(e);
    }
  });

  state.cars = result;
};
