import { CarDto } from "../models/dto/CarDto";
import { Car } from "../models/entities/Car";
import {
  axiosDeleteRequest,
  axiosGetRequest,
  axiosPostRequest,
  axiosPutRequest,
} from "./api/axios";

export const getAllCarsRequest = () => axiosGetRequest<Car[]>(`/cars`, "");

export const getCarByIdRequest = (id: number) =>
  axiosGetRequest<Car>(`/cars/${id}`, "");

export const deleteCarRequest = (id: number) =>
  axiosDeleteRequest<Car>(`/cars/${id}`);

export const updateCarRequest = (id: number, data: CarDto) =>
  axiosPutRequest<CarDto, Car>(`/cars`, id, "", data);

export const addCarRequest = (data: CarDto) =>
  axiosPostRequest<CarDto, Car>(`/cars`, "", data);
