import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import { getAllManufacturersRequest } from "../../services/ManufacturerService";
import { RootState } from "../store";
import { setManufacturers } from "./slice";

export const getManufacturersAction =
  (): ThunkAction<void, RootState, null, AnyAction> => async (dispatch) => {
    try {
      const response = await getAllManufacturersRequest();
      dispatch(setManufacturers(response));
    } catch (error) {
      console.log("Error:", error);
    }
  };
