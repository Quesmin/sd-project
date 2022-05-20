import { Car } from "./Car";
import { User } from "./User";

export interface Favorite {
  id: number;
  user: User;
  car: Car;
  date: string;
}
