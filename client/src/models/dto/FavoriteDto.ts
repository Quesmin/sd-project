import { CarDto } from "./CarDto";
import { UserDto } from "./UserDto";

export interface FavoriteDto {
  user: UserDto;
  car: CarDto;
  date: string;
}
