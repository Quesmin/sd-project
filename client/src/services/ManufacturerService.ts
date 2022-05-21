import { Manufacturer } from "../models/entities/Manufacturer";
import { axiosGetRequest } from "./api/axios";

export const getAllManufacturersRequest = () =>
  axiosGetRequest<Manufacturer[]>(`/manufacturers`, "");
