import { createSlice } from "@reduxjs/toolkit";
import { setManufacturersCaseReducer } from "./reducers";
import { manufacturerInitialState } from "./state";

const ManufacturerReducerSlice = createSlice({
  name: "manufacturer",
  initialState: manufacturerInitialState,
  reducers: {
    setManufacturers: setManufacturersCaseReducer,
  },
});

export const { setManufacturers } = ManufacturerReducerSlice.actions;

export const ManufacturerReducer = ManufacturerReducerSlice.reducer;
