import { Car } from "../models/entities/Car";
import { axiosGetRequest } from "./api/axios";

export const getAllCarsRequest = () => axiosGetRequest<Car[]>(`/cars`, "");

export const getCarByIdRequest = (id: number) =>
  axiosGetRequest<Car>(`/cars/${id}`, "");
