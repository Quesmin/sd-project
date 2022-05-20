import { Car } from "./Car";
import { User } from "./User";

export interface Appointment {
  id: number;
  user: User;
  car: Car;
  date: string;
  phoneNumber: string;
  message: string;
}
