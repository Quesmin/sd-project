import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import {
  getAllCarsRequest,
  getCarByIdRequest,
} from "../../services/CarService";
import { RootState } from "../store";
import { setCars, setCurrentCar } from "./slice";

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
