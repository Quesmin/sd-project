import { BodyType } from "../enums/BodyType";
import { FuelType } from "../enums/FuelType";
import { ManufacturerDto } from "./ManufacturerDto";

export interface CarDto {
  model: string;
  manufacturerId: number;
  body: BodyType;
  mileage: number;
  seats: number;
  weight: number;
  vin: string;
  hp: number;
  yearOfManufacture: number;
  price: number;
  fuelType: FuelType;
}
