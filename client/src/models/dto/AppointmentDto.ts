import { CarDto } from "./CarDto";
import { UserDto } from "./UserDto";

export interface AppointmentDto {
  user: UserDto;
  car: CarDto;
  date: string;
  phoneNumber: string;
  message: string;
}
