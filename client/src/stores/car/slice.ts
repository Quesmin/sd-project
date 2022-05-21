import { createSlice } from "@reduxjs/toolkit";
import {
  addCarCaseReducer,
  deleteCarCaseReducer,
  setCarsCaseReducer,
  setCurrentCarCaseReducer,
  updateCarCaseReducer,
} from "./reducers";
import { carInitialState } from "./state";

const CarReducerSlice = createSlice({
  name: "car",
  initialState: carInitialState,
  reducers: {
    setCars: setCarsCaseReducer,
    setCurrentCar: setCurrentCarCaseReducer,
    deleteCar: deleteCarCaseReducer,
    addCar: addCarCaseReducer,
    updateCar: updateCarCaseReducer,
  },
});

export const { setCars, setCurrentCar, deleteCar, addCar, updateCar } =
  CarReducerSlice.actions;

export const CarReducer = CarReducerSlice.reducer;
