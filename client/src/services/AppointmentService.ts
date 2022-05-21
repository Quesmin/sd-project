import { AppointmentDto } from "../models/dto/AppointmentDto";
import { Appointment } from "../models/entities/Appointment";
import { Car } from "../models/entities/Car";
import {
  axiosDeleteRequest,
  axiosGetRequest,
  axiosPostRequest,
  axiosPutRequest,
} from "./api/axios";

export const getAllAppointmentsRequest = () =>
  axiosGetRequest<Appointment[]>(`/appointments`, "");

export const getAppointmentByIdRequest = (id: number) =>
  axiosGetRequest<Appointment>(`/appointments/${id}`, "");

export const deleteAppointmentRequest = (id: number) =>
  axiosDeleteRequest<Appointment>(`/appointments/${id}`);

export const updateAppointmentRequest = (id: number, data: AppointmentDto) =>
  axiosPutRequest<AppointmentDto, Appointment>(`/appointments`, id, "", data);

export const addAppointmentRequest = (data: AppointmentDto) =>
  axiosPostRequest<AppointmentDto, Appointment>(`/appointments`, "", data);
