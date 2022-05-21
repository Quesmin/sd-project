import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { CarDto } from "../../models/dto/CarDto";
import {
  addCarRequest,
  deleteCarRequest,
  getAllCarsRequest,
  getCarByIdRequest,
  updateCarRequest,
} from "../../services/CarService";
import { RootState } from "../store";
import { addCar, deleteCar, setCars, setCurrentCar, updateCar } from "./slice";

export const getCarsAction =
  (): ThunkAction<void, RootState, null, AnyAction> => async (dispatch) => {
    try {
      const response = await getAllCarsRequest();
      dispatch(setCars(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const getCurrentCarAction =
  (id: number): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await getCarByIdRequest(id);
      dispatch(setCurrentCar(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const addCarAction =
  (car: CarDto): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await addCarRequest(car);
      dispatch(addCar(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const updateCarAction =
  (id: number, car: CarDto): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await updateCarRequest(id, car);
      dispatch(updateCar({ id, car: response }));
    } catch (error) {
      console.log("Error:", error);
    }
  };

export const deleteCarAction =
  (id: number): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await deleteCarRequest(id);
      if (response) {
        dispatch(deleteCar(id));
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
