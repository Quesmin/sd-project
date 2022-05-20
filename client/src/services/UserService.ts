import { UserDto } from "../models/dto/UserDto";
import { User } from "../models/entities/User";
import { axiosPostRequest } from "./api/axios";

export const loginRequest = (email: string, password: string) =>
  axiosPostRequest<UserDto, User>(`/users/login`, "", { email, password });

export const signupRequest = (email: string, password: string) =>
  axiosPostRequest<UserDto, User>(`/users/register`, "", { email, password });
