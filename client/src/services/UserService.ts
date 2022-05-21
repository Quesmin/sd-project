import { AppointmentDto } from "../models/dto/AppointmentDto";
import { FavoriteDto } from "../models/dto/FavoriteDto";
import { UserDto } from "../models/dto/UserDto";
import { Appointment } from "../models/entities/Appointment";
import { Favorite } from "../models/entities/Favorite";
import { User } from "../models/entities/User";
import {
  axiosGetRequest,
  axiosPostRequest,
  axiosDeleteRequest,
} from "./api/axios";

export const loginRequest = (email: string, password: string) =>
  axiosPostRequest<UserDto, User>(`/users/login`, "", {
    email,
    password,
  } as UserDto);

export const signupRequest = (email: string, password: string) =>
  axiosPostRequest<UserDto, User>(`/users/register`, "", { email, password });

export const getUserAppointmentsRequest = (id: number) =>
  axiosGetRequest<Appointment[]>(`/appointments/user/${id}`, "");

export const getUserFavoritesRequest = (id: number) =>
  axiosGetRequest<Favorite[]>(`/favorites/user/${id}`, "");

export const addFavoriteRequest = (favorite: FavoriteDto) =>
  axiosPostRequest<FavoriteDto, Favorite>(`/favorites`, "", favorite);

export const removeFavoriteRequest = (id: number) =>
  axiosDeleteRequest<Favorite>(`/favorites/${id}`);

export const addAppointmentRequest = (appointment: AppointmentDto) =>
  axiosPostRequest<AppointmentDto, Appointment>(
    `/appointments`,
    "",
    appointment
  );
