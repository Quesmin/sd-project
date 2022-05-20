import { createSlice } from "@reduxjs/toolkit";
import { setCarsCaseReducer, setCurrentCarCaseReducer } from "./reducers";
import { carInitialState } from "./state";

const CarReducerSlice = createSlice({
  name: "car",
  initialState: carInitialState,
  reducers: {
    setCars: setCarsCaseReducer,
    setCurrentCar: setCurrentCarCaseReducer,
  },
});

export const { setCars, setCurrentCar } = CarReducerSlice.actions;

export const CarReducer = CarReducerSlice.reducer;
